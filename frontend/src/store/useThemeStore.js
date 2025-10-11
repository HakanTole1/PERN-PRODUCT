import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("preferred-theme") || "forest", //by default its forest otherwise it comes from localStorage
  setTheme: (theme) => {
    localStorage.setItem("preferred-theme", theme);
    set({ theme });
  }, //setter function: takes theme user pass, will set the current theme with it
}));