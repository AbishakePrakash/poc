"use client";
import React from "react";
import { useTheme } from "../context/Themecontext";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    // <div className="">
    <div className="flex items-center justify-between gap-0 -mt-5 sm:-mt-3">
      <span
        className="cursor-pointer  w-[50%] py-3 flex justify-center items-center"
        onClick={() => toggleTheme("dark")}
      >
        ⏾
      </span>
      <span
        className="bg-copy-primary text-copy-secondary cursor-pointer items-center w-[50%] py-3 flex justify-center"
        onClick={() => toggleTheme("light")}
      >
        ☀︎
      </span>
    </div>
    // </div>
  );
};

export default ToggleTheme;
