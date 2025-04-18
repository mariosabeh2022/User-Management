import { create } from "zustand";
import { ThemeStore } from "./themeStore.type";
import { persist } from "zustand/middleware";
export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      lightTheme: localStorage.getItem("theme") !== "dark",
      toggleTheme: () =>
        set((state) => {
          const newTheme = !state.lightTheme;
          localStorage.setItem("theme", newTheme ? "light" : "dark");
          return { lightTheme: newTheme };
        }),
      clearTheme: () => set(() => ({ lightTheme: true })),
    }),
    {
      name: "user-theme",
    }
  )
);
