import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router";
import Button from "../Atoms/Button/Button";
import { useSessionStore } from "../../store/session/sessionStore";
import { useThemeStore } from "../../store/theme/themeStore";
import { useedit_deleteStore } from "../../store/Edit-delete/edit-deleteStore";
const Navbar = () => {
  const hasToken = useSessionStore((state) => state.accessToken);
  const tokenExpiry = useSessionStore((state) => state.tokenExpiryDate);
  const hasValidToken = tokenExpiry > Math.floor(Date.now() / 1000);
  const clearToken = useSessionStore((state) => state.clearToken);
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const clearTheme = useThemeStore((state) => state.clearTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const toggleIsEdittingOrDeleting = useedit_deleteStore(
    (state) => state.setIsChanging
  );
  return (
    <div
      className={
        lightTheme
          ? "bg-[var(--color-primary)]"
          : "bg-[var(--color-primary-dark)]"
      }
    >
      <nav className="flex justify-between items-center">
        <NavLink to="/dashboard">
          <h1
            className={`px-5 py-5 font-semibold
              ${lightTheme ? "text-white" : "text-gray-200"}
            `}
            onClick={()=>toggleIsEdittingOrDeleting(false)}
          >
            User Management
          </h1>
        </NavLink>
        <div className="flex">
          {hasToken && hasValidToken && (
            <>
              <NavLink to="/dashboard/new" className="mr-3">
                <Button
                  className={`${
                    lightTheme ? "white-button" : "white-button-dark"
                  }`}
                  label="Create user"
                />
              </NavLink>
              <NavLink
                to="/"
                className="mr-3"
                onClick={() => {
                  clearToken();
                  clearTheme();
                }}
              >
                <Button
                  className={`rounded-sm px-3 py-2 text-white border ${
                    lightTheme ? "red-button" : "red-button-dark"
                  }`}
                  label="Logout"
                />
              </NavLink>
            </>
          )}
          {lightTheme ? (
            <Moon
              className="cursor-pointer w-6 h-6 text-white mt-2 ml-2 mr-6 sm:mt-1.6 md:mt-2"
              onClick={toggleTheme}
            />
          ) : (
            <Sun
              className="cursor-pointer w-6 h-6 text-white mt-2 ml-2 mr-6 sm:mt-1.6 md:mt-2"
              onClick={toggleTheme}
            />
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
