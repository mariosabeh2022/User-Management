import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import { useThemeStore } from "../../store/theme/themeStore";
const CreateUser = () => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const schema = z.object({
    firstName: z.string().trim().min(1, "First Name is required"),
    lastName: z.string().trim(),
    email: z.string().email("Email is invalid"),
    status: z.enum(["Active", "Locked"], {
      required_error: "Status is required",
    }),
    dob: z.string().refine((date) => {
      const today = new Date();
      const selectedDate = new Date(date);
      return selectedDate < today;
    }, "Date of Birth must be in the past"),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      status: undefined,
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
    <div
      className={`flex flex-col max-w-full items-center justify-center min-h-screen ${
        lightTheme ? "bg-primary" : "bg-primary-dark"
      }`}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-2"
      >
        <div>
          <h1
            className={`text-center text-3xl font-bold mb-6 ${
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
          <input
            className="text-xl border rounded-sm px-3 py-2 w-full focus:outline-none border-gray-300 focus:border-blue"
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
          <input
            className="text-xl border rounded-sm px-3 py-2 w-full focus:outline-none border-gray-300 focus:border-blue"
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
          <input
            type="email"
            className="text-xl border rounded-sm px-3 py-2 w-full focus:outline-none border-gray-300 focus:border-blue"
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
          <input
            type="date"
            className="text-xl border rounded-sm px-3 py-2 w-full focus:outline-none border-gray-300 focus:border-blue"
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
              className="text-xl border rounded-sm px-3 py-2 w-full focus:outline-none border-gray-300 focus:border-blue"
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
          <button
            type="submit"
            className={`button-base px-4 py-2 mt-2 rounded-md font-semibold ${
              lightTheme ? "blue-button" : "blue-button-dark"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
