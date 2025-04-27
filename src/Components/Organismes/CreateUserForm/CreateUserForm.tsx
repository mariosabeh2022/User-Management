import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { useState } from "react";
import { useThemeStore } from "../../../store/theme/themeStore";
import { schema } from "./CreateUserForm_validation";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Status } from "../../Molecules/UserCard";
import { useSessionStore } from "../../../store/session/sessionStore";
import LoadingPage from "../../Pages/LoadingPage";
import createUser from "../../../hooks/createUser";
type FormData = z.infer<typeof schema>;
const CreateUserForm = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const userToken = useSessionStore((state) => state.accessToken);
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      status: Status.Active,
    },
  });

  const { field: statusField, fieldState: statusState } = useController({
    control,
    name: "status",
  });

  const mutation = useMutation({
    mutationFn: (data: FormData) => createUser(userToken!, data, navigate),
    onError: (error) => {
      console.log(error.message);
      navigate("/dashboard/new", {
        state: { message: error.message },
      });
    },
    onSuccess: (result) => {
      navigate("/dashboard", {
        state: { message: result.message },
      });
    },
  });

  const onSubmit = (data: FormData) => {
    setSubmitting(true);
    mutation.mutate(data);
  };
  if (submitting) return <LoadingPage />;
  else
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-lg mx-auto p-6 mt-2 ${
          lightTheme ? "bg-white" : "bg-gray-300"
        } rounded-xl shadow-md space-y-2`}
      >
        <div>
          <h1 className="text-center text-3xl font-semibold mb-6">
            Add New User
          </h1>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            First Name
          </label>
          <Input
            type="text"
            className={`base-input ${
              lightTheme ? "base-input" : "base-input-dark"
            }`}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Last Name (Optional)
          </label>
          <Input
            type="text"
            className={`base-input ${
              lightTheme ? "base-input" : "base-input-dark"
            }`}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <Input
            type="email"
            className={`base-input ${
              lightTheme ? "base-input" : "base-input-dark"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Date Of Birth
          </label>
          <Input
            type="date"
            className={`base-input ${
              lightTheme ? "base-input" : "base-input-dark"
            }`}
            {...register("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <p className="text-sm text-red-500 mt-1">
              {errors.dateOfBirth.message}
            </p>
          )}
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Status</label>
          <div className="flex gap-6">
            <select
              value={statusField.value}
              onChange={statusField.onChange}
              onBlur={statusField.onBlur}
              className={`base-input ${
                lightTheme ? "base-input" : "base-input-dark"
              }`}
            >
              {Object.values(Status).map((status) => (
                <option key={status} value={status}>
                  {status[0].toUpperCase() + status.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
          </div>
          {statusState.error && (
            <p className="text-sm text-red-500 mt-1">
              {statusState.error.message}
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={!isValid}
            className={`button-base px-4 py-2 mt-2 rounded-md font-semibold ${
              lightTheme ? "blue-button" : "blue-button-dark"
            } disabled:opacity-20`}
            label="Submit"
          />
        </div>
      </form>
    );
};

export default CreateUserForm;
