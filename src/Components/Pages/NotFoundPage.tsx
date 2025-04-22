import { Link } from "react-router";
import { useThemeStore } from "../../store/theme/themeStore";
const NotFoundPage = () => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  return (
    <div className={`flex flex-col items-center justify-center max-w-full ${lightTheme?'bg-primary':'bg-primary-dark'} h-screen`}>
      <h1 className={`${lightTheme?'text-[var(--color-primary)]':'text-[var(--color-primary-dark)]'} font-extrabold text-4xl`}>
        404 Not Found
      </h1>
      <br />
      <Link to="/login" className="font-bold text-2xl hover:underline hover:shadow-md">
        Go Back To Users Page
      </Link>
    </div>
  );
};
export default NotFoundPage;
