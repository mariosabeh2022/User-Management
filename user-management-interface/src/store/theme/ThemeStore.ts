// store/theme/themeStore.ts
import { create } from "zustand";

type ThemeState = {
  lightTheme: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  lightTheme: localStorage.getItem("theme") !== "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.lightTheme;
      localStorage.setItem("theme", newTheme ? "light" : "dark");
      return { lightTheme: newTheme };
    }),
}));
