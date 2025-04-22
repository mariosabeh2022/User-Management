import { useThemeStore } from "../../store/theme/themeStore";
const LoadingPage = () => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  return (
    <div className={`flex items-center justify-center h-screen ${lightTheme?'bg-primary':'bg-primary-dark'}`}>
      <div className={`animate-spin rounded-full h-16 w-16 border-t-4 
        ${lightTheme?'spinner':'spinner-dark'} border-solid`}></div>
    </div>
  );
};
export default LoadingPage;
