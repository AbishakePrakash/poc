import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useData } from "../context/dataContext";
import Link from "next/link";
import { useTheme } from "../context/themeContext";

export const SlideBar = () => {
  const { darkMode } = useTheme();
  const { projects } = useData();
  const [pauseOnHover, setPauseOnHover] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setPauseOnHover(false); // Disable pausing on mobile
    }
  }, []);

  return (
    <Marquee
      direction="left"
      loop={0}
      speed={100}
      gradient={false}
      pauseOnHover={pauseOnHover} // Dynamically set pause behavior
      className="w-full border-b-2"
    >
      <div className="flex w-full">
        {projects?.map((item, index) => (
          <Link
            href={`/projects/${item.projectId}`}
            key={index}
            className={`px-8 sm:px-20 py-4 cursor-pointer typography-sb flex items-center justify-center text-nowrap bg-transparent transition-all duration-300 ${
              darkMode ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"
            }`}
          >
            {item.projectTitle}
          </Link>
        ))}
      </div>
    </Marquee>
  );
};
