import { Moon } from "lucide-react";
import { NavLink } from "react-router";
import Button from "../Atoms/Button/Button";
import { useSessionStore } from "../../store/session/sessionStore";
import { useState } from "react";

const Navbar = () => {
  const setIsLoggedIn = useSessionStore((state) => state.setIsLoggedIn);
  const loggedIn = useSessionStore((state) => state.isLoggedIn);
  const hasToken = useSessionStore((state) => state.accessToken);
  const [lightTheme, setLightTheme] = useState(true);
  const toggleTheme = () => {
    setLightTheme((theme) => !theme);
  };
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
          {hasToken && loggedIn ? (
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
                  setIsLoggedIn(false);
                  localStorage.clear();
                }}
              >
                <Button
                  className="bg-red-500 text-white border border-red-500 
                                hover:bg-red-700 hover:border-red-700 
                                  rounded-sm px-3 py-2"
                  label="Logout"
                />
              </NavLink>
              <Moon
                className="w-6 h-6 text-white mt-2 ml-2 mr-6 sm:mt-1.6 md:mt-2"
                onClick={toggleTheme}
              />
            </>
          ) : (
            <Moon
              className="w-6 h-6 text-white mt-1 ml-2 mr-6 sm:mt-1.6 md:mt-2 lg:mt-1"
              onClick={toggleTheme}
            />
          )}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
