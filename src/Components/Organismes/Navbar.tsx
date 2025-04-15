import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router";
import Button from "../Atoms/Button/Button";
import { useSessionStore } from "../../store/session/sessionStore";
import { useThemeStore } from "../../store/theme/themeStore";
const Navbar = () => {
  const hasToken = useSessionStore((state) => state.accessToken);
  const tokenExpiry = useSessionStore((state) => state.tokenExpiryDate);
  const hasValidToken = tokenExpiry > Math.floor(Date.now() / 1000);
  const clearToken = useSessionStore((state) => state.clearToken);
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <div
      className={
        lightTheme ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]"
      }
    >
      <nav className="flex justify-between items-center">
        <NavLink to="">
          <h1
            className={`px-5 py-5 font-semibold
              ${lightTheme ? "text-white" : "text-gray-200"}
            `}
          >
            User Management
          </h1>
        </NavLink>
        <div className="flex">
          {hasToken && hasValidToken && (
            <>
              <NavLink to="" className="mr-3">
                <Button
                  className={`bg-white text-[var(--color-primary)]
                                hover:bg-gray-500 hover:text-[var(--color-primary-dark)]
                                  border ${
                                    lightTheme
                                      ? "border-[var(--color-primary)]"
                                      : "border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-gray-500 hover:text-[var(--color-secondary)]"
                                  } 
                                    rounded-sm px-4 py-2`}
                  label="Create user"
                />
              </NavLink>
              <NavLink
                to="/"
                className="mr-3"
                onClick={() => {
                  clearToken();
                }}
              >
                <Button
                  className={`rounded-sm px-3 py-2 text-white border ${
                    lightTheme
                      ? "bg-red-500  border-red-500 hover:bg-red-700 hover:border-red-700"
                      : "bg-red-700 border border-red-700 hover:bg-red-500 hover:border-red-500"
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
