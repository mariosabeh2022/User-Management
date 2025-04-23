import { useThemeStore } from "../../store/theme/themeStore";
import CreateUserForm from "../Organismes/CreateUserForm/CreateUserForm";
const CreateUser = () => {
  const lightTheme = useThemeStore((state)=>state.lightTheme)
  return (
    <div
      className={`flex flex-col max-w-full items-center justify-center min-h-screen ${
        lightTheme ? "bg-primary" : "bg-primary-dark"
      }`}
    >
      <CreateUserForm/>
    </div>
  );
};

export default CreateUser;