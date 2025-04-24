import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { useState } from "react";
import { useThemeStore } from "../../../store/theme/themeStore";
import { schema } from "./EditUserForm_validationts";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "../../../store/session/sessionStore";
import { useedit_deleteStore } from "../../../store/Edit-delete/edit-deleteStore";
import LoadingPage from "../../Pages/LoadingPage";
import { useLocation } from "react-router-dom";
import NotFoundPage from "../../Pages/NotFoundPage";
type FormData = z.infer<typeof schema>;
const EditUserForm = () => {
  const location = useLocation();
  const id = location.state.fetchedUser.id;
  const navigate = useNavigate();
  const fetchedStatus = location.state.fetchedUser.status;
  const otherStatuses = fetchedStatus === "locked" ? "active" : "locked";
  const [submitting, setSubmitting] = useState(false);
  const userToken = useSessionStore((state) => state.accessToken);
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const toggleIsEdittingOrDeleting = useedit_deleteStore(
    (state) => state.setIsChanging
  );
  const UpdateUser = async (userData: FormData) => {
    const response = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server error:", errorText);
      throw new Error("Failed to update user");
    }
    return response.json();
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstName: location.state.fetchedUser.firstName,
      lastName: location.state.fetchedUser.lastName,
      email: location.state.fetchedUser.email,
      dateOfBirth: location.state.fetchedUser.dateOfBirth,
      status: location.state.fetchedUser.status,
    },
  });

  const { field: statusField, fieldState: statusState } = useController({
    control,
    name: "status",
  });

  const mutation = useMutation({
    mutationFn: UpdateUser,
    onError: (error) => {
      console.log(error);
      navigate("/dashboard/new", {
        state: { message: "Something went wrong" },
      });
    },
    onSuccess: () => {
      toggleIsEdittingOrDeleting(false);
      navigate("/dashboard", {
        state: { message: "User updated successfully" },
      });
    },
  });

  const onSubmit = (data: FormData) => {
    setSubmitting(true);
    mutation.mutate(data);
  };
  if (submitting) return <LoadingPage />;
  else if (location.state.fetchedUser!) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-lg mx-auto p-6 mt-2 ${
          lightTheme ? "bg-white" : "bg-gray-300"
        } rounded-xl shadow-md space-y-2`}
      >
        <div>
          <h1 className="text-center text-3xl font-semibold mb-6">Edit User</h1>
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
              <option key={fetchedStatus} value={fetchedStatus}>
                {fetchedStatus[0].toUpperCase() +
                  fetchedStatus.slice(1).toLowerCase()}
              </option>
              <option key={otherStatuses} value={otherStatuses}>
                {otherStatuses[0].toUpperCase() +
                  otherStatuses.slice(1).toLowerCase()}
              </option>
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
            label="Edit"
          />
        </div>
      </form>
    );
  } else {
    return <NotFoundPage />;
  }
};
export default EditUserForm;
