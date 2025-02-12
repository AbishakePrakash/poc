"use client";

import { useTheme } from "../context/Themecontext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`px-10 py-4 text-center  ${
        theme === "light" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className=" font-xl text-center ">
        Copyrights &copy; Kishore Krishnakumar
      </h1>
    </footer>
  );
};

export default Footer;
