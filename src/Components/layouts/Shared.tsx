import Navbar from "../Organismes/Navbar";
import { Outlet } from "react-router";
import { useThemeStore } from "../../store/theme/themeStore";

const Shared = () => {
    const lightTheme = useThemeStore((state) => state.lightTheme);
    return(
        <div
        className={`min-h-screen ${
          lightTheme ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-gray-100"
        }`}
        >
            <Navbar />
            <div className="container mx-auto px-4 py-8">
            <Outlet />
        </div>
        </div>
    );
}
export default Shared;