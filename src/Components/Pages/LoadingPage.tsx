import { useThemeStore } from "../../store/theme/themeStore";
const LoadingPage = () => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  return (
    <div className={`flex items-center justify-center h-screen ${lightTheme?'bg-white':'bg-gray-500'}`}>
      <div className={`animate-spin rounded-full h-16 w-16 border-t-4 
        ${lightTheme?'border-[var(--color-primary)]':'border-[var(--color-secondary)]'} border-solid`}></div>
    </div>
  );
};
export default LoadingPage;
