import { useThemeStore } from "../../store/theme/themeStore";
import { useEffect } from "react";
import { useLocation } from "react-router";
import UserForm from "../Organismes/UserForm/UserForm";
const EditUser = () => {
  const location = useLocation()
  const isEditMode = location.state && location.state.fetchedUser;
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
       <UserForm isEditMode={isEditMode} />
    </div>
  );
};

export default EditUser;