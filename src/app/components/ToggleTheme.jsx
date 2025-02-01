"use client";
import React from "react";
import { useTheme } from "../context/Themecontext";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="absolute top-0 right-0 z-20">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-background text-copy-primary border rounded"
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
};

export default ToggleTheme;
