import { UserInitialProps } from "./UnserInitials.type";
import { useThemeStore } from "../../../store/theme/themeStore";
const UserInitial = ({ firstName, lastName }: UserInitialProps) => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  return (
    <div className="px-6 py-2 flex justify-center items-center">
      <span className={`${lightTheme?'user-initials-base-light':'user-initials-base-dark'} user-initials-base`}>
        {firstName.charAt(0).toUpperCase()}
        {lastName?.charAt(0).toUpperCase()}
      </span>
    </div>
  );
};
export default UserInitial;
