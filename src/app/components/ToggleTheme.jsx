"use client";
import React from "react";
import { useTheme } from "../context/Themecontext";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className=" z-20">
      <div className="flex items-center justify-center  space-x-4">
        <span className="cursor-pointer px-4" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "🌙"}
        </span>
        <span
          className="bg-black cursor-pointer  px-6 py-2 text-white"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "☀️" : "☀️"}
        </span>
      </div>
      {/* <button
        onClick={toggleTheme}
        className="p-1 sm:px-4 sm:py-2 bg-background text-sm  text-copy-primary text-center w-full"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button> */}
    </div>
  );
};

export default ToggleTheme;
