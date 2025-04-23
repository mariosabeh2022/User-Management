import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { useThemeStore } from "../../../store/theme/themeStore";
import { schema } from "./CreateUserForm_validation";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
const CreateUserForm = () => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  type FormData = z.infer<typeof schema>;

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
      status: "Active",
    },
  });

  const { field: statusField, fieldState: statusState } = useController({
    control,
    name: "status",
  });

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-lg mx-auto p-6 mt-2 bg-white rounded-xl shadow-md space-y-2"
    >
      <div>
        <h1
          className={`text-center text-3xl font-semibold mb-6 ${
            lightTheme ? "text-blue" : "text-blue-dark"
          }`}
        >
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
          <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
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
          {...register("dob")}
        />
        {errors.dob && (
          <p className="text-sm text-red-500 mt-1">{errors.dob.message}</p>
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
            {["Active", "Locked"].map((status) => (
              <option key={status} value={status}>
                {status}
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
