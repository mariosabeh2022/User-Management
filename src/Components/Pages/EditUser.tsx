import { useThemeStore } from "../../store/theme/themeStore";
import { useEffect } from "react";
import { useLocation } from "react-router";
import EditUserForm from "../Organismes/EditUserForm/EditUserForm";
const EditUser = () => {
  const location = useLocation()
  const lightTheme = useThemeStore((state)=>state.lightTheme);
    useEffect(() => {
      if (location.state?.message) {
        alert(location.state.message);
      }
    }, [location]);
  return (
    <div
      className={`flex flex-col max-w-full items-center min-h-screen ${
        lightTheme ? "bg-primary" : "bg-primary-dark"
      }`}
    >
      <EditUserForm/>
    </div>
  );
};

export default EditUser;