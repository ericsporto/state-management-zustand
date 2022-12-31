import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface DarkModeProps {
  dark: boolean;
  toogleDarkMode: () => void;
}

const useDarkModeStore = create(
  persist<DarkModeProps>((set) => ({
      dark: false,
      toogleDarkMode: () => set((state) => ({dark: !state.dark}))

  }), {
    name: 'darkMode'
  })
);

export default useDarkModeStore;
