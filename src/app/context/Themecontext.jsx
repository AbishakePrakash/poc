"use client";

import { createContext, useEffect, useState, useContext } from "react";

const ThemeContextApi = createContext();

const Themecontext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefer-color-scheme:dark)").matches;

    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.setAttribute("data-theme", initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <ThemeContextApi.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextApi.Provider>
  );
};

export default Themecontext;

export function useTheme() {
  return useContext(ThemeContextApi);
}
