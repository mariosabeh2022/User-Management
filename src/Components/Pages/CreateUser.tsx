import { useThemeStore } from "../../store/theme/themeStore";
import { useEffect } from "react";
import { useLocation } from "react-router";
import CreateUserForm from "../Organismes/CreateUserForm/CreateUserForm";
const CreateUser = () => {
  const location = useLocation()
  const lightTheme = useThemeStore((state)=>state.lightTheme);
    useEffect(() => {
      if (location.state?.message) {
        alert(location.state.message);
      }
    }, [location]);
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