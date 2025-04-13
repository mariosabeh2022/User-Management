import { UserInitialProps } from "./UnserInitials.type";
import { useThemeStore } from "../../../store/theme/ThemeStore";
const UserInitial = ({ firstName, lastName }: UserInitialProps) => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  return (
    <div className="px-6 py-2 flex justify-center items-center">
      <span className={`${lightTheme?'bg-[var(--color-primary)]':'bg-[var(--color-secondary)] border border-[var(--color-secondary)]'} w-16 h-16 flex items-center justify-center text-white text-xl font-semibold border rounded-full`}>
        {firstName.charAt(0).toUpperCase()}
        {lastName?.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};
export default UserInitial;
