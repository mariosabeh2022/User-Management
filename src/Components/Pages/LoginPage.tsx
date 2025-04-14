import Input from "../Atoms/Input/Input";
import Button from "../Atoms/Button/Button";
import { Eye, EyeOff, Route } from "lucide-react";
import { ChangeEvent, useState, useEffect } from "react";
import Span from "../Atoms/Span/Span";
import LoadingPage from "./LoadingPage";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "../../store/session/sessionStore";
import { useThemeStore } from "../../store/theme/themeStore";
const LoginPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const setIsLoggedIn = useSessionStore((state) => state.setIsLoggedIn);
  const setAccessToken = useSessionStore((state) => state.setAccessToken);
  const lightTheme = useThemeStore((state) => state.lightTheme);
  const navigate = useNavigate();
  const togglePassType = () => {
    setVisiblePassword((prev) => !prev);
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const isLoggedIn = useSessionStore((state) => state.isLoggedIn);
  const handleSubmit = async (email: string, password: string) => {
    try {
      setSubmitting(true);
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: { email, password } }),
      });

      const data = await response.json();
      const result = data.result.data;

      if (data.status === 200) {
        setAccessToken(result.accessToken, result.expiresIn);
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        console.log("Login failed:", result);
        setShowErrorMessage(result?.message || "Email Or Password Incorrect");
      }
    } catch (e) {
      console.log("Login error:", e);
      setShowErrorMessage("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn) {
    <Route to="/dashboard" />;
    setSubmitting(false);
  } else if (submitting) return <LoadingPage />;
  else
    return (
      <div
        className={`flex flex-col max-w-full items-center justify-center h-screen ${
          lightTheme ? " bg-gray-100" : "bg-gray-500"
        }`}
      >
        <div
          className={`p-8 rounded-lg shadow-md w-[400px] hover:shadow-2xl ${
            lightTheme ? " bg-gray-100" : "bg-gray-900"
          }`}
        >
          <h1 className="text-2xl font-bold text-gray-700 text-center">
            Login
          </h1>
          <form
            action=""
            className="pt-6"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(email, password);
            }}
          >
            <div className="mb-2">
              <Span
                className="text-gray-600 font-semibold mb-1 block"
                label="Email"
              />
              <Input
                type="email"
                className={`text-xl border rounded-sm px-3 py-2 w-full 
                                        focus:outline-none ${
                                          lightTheme
                                            ? "border-gray-300 focus:border-[var(--color-primary)]"
                                            : "border-gray-500 focus:border-[var(--color-secondary)] text-gray-500"
                                        }`}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3 pt-2">
              <Span
                className="text-gray-600 font-semibold mb-1 block"
                label="Password"
              />
              <div className="relative">
                <Input
                  type={visiblePassword ? "text" : "password"}
                  className={`text-xl border rounded-sm px-3 py-2 w-full 
                                        focus:outline-none ${
                                          lightTheme
                                            ? "border-gray-300 focus:border-[var(--color-primary)]"
                                            : "border-gray-500 focus:border-[var(--color-secondary)] text-gray-500"
                                        }`}
                  onChange={handlePassChange}
                />
                <span className="absolute right-8" onClick={togglePassType}>
                  {visiblePassword ? (
                    <span>
                      <EyeOff
                        color="#808080"
                        className="absolute mr-3 mt-2.5 cursor-pointer"
                      />
                    </span>
                  ) : (
                    <span>
                      <Eye
                        color="#808080"
                        className="absolute mr-3 mt-2.5 cursor-pointer"
                      />
                    </span>
                  )}
                </span>
              </div>
            </div>
            {showErrorMessage && (
              <Span
                className="text-red-500 font-semibold text-center block"
                label={showErrorMessage}
              />
            )}
            <div className="text-center">
              <Button
                className="max-w-full border rounded-sm px-5 py-3 mt-2
                                        bg-[var(--color-primary)] text-white border-[var(--color-primary)]
                                        hover:bg-[var(--color-primary-dark)] hover:text-white hover:border-[var(--color-primary-dark)]"
                label="Login"
              />
            </div>
          </form>
        </div>
      </div>
    );
};
export default LoginPage;
