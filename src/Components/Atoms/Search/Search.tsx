import { SearchProps } from "./Search.type";
import { useThemeStore } from "../../../store/theme/themeStore";
const Search = ({ label, onChange }: SearchProps) => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  return (
    <input
      type="text"
      className={`mt-8 ml-8 text-black px-4 py-2 border border-gray-300 rounded-sm 
                focus:outline-none focus:ring-2 focus:border-transparent ${
                  lightTheme
                    ? "focus:ring-[var(--color-primary)]"
                    : "focus:ring-[var(--color-primary-dark)] border-gray-700"
                }  `}
      placeholder="Search users..."
      onChange={onChange}
      value={label}
    />
  );
};
export default Search;
