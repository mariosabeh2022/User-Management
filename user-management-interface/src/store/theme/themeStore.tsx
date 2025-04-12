import { create } from 'zustand';
import { ThemeStore, ThemeType } from './themeStore.type';

const useTheme = create<ThemeStore>((set) => ({
  theme: ThemeType.light,
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === ThemeType.light ? ThemeType.dark : ThemeType.light;
      // Update the root CSS variables dynamically
      document.documentElement.style.setProperty(
        '--color-primary',
        newTheme === ThemeType.light ? '#3251D0' : '#192868' // primary for light, secondary for dark
      );
      document.documentElement.style.setProperty(
        '--color-secondary',
        newTheme === ThemeType.light ? '#192868' : '#3251D0' // secondary for light, primary for dark
      );
      return { theme: newTheme };
    }),
  setTheme: (theme: ThemeType) => set({ theme }),
}));

export default useTheme;