"use client";
import { useTheme } from "../context/themeContext";

export function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`px-10 py-4 text-center ${
        !darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <p className="text-center typography-foot">
        Copyrights &copy; Kishore Krishnakumar | Powered by{" "}
        <a
          href="https://www.govarthan.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-500 transition-colors duration-300"
        >
          Govarthan
        </a>
      </p>
    </footer>
  );
}
