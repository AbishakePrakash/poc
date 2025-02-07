"use client";

import { usePathname, useRouter } from "next/navigation";
import ToggleTheme from "../components/ToggleTheme";
import { useProjectData } from "../context/ProjectContext";
import FanAnimation from "./fan";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AnimatedText from "./titleAnimation";

const textList = [
  "Creating experience?",
  "Creating interactions",
  "Creating Aesthetics",
  "Creating Renderings",
  "All of them",
];

export const Header = () => {
  const { data } = useProjectData();
  const featured = data?.filter((item) => item.featured === true);
  const router = useRouter();
  const pathname = usePathname();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRoute = (path) => {
    if (pathname.startsWith("/project")) {
      router.push(path);
      console.log(path);
    } else {
      router.push(`project/${path}`);
      console.log(`project/${path}`);
    }
  };

  return (
    <div className="flex justify-between items-center text-copy-primary bg-background border-b-2 h-[300px] border-[#808080]">
      <div className="flex flex-col  border-r-2 h-full border-[#808080] justify-between">
        <FanAnimation />
        <p
          onClick={() => handleScroll("cv")}
          className="p-1 sm:px-6 sm:py-2 text-center border-b-2 border-[#808080]"
        >
          CV
        </p>
        <p
          onClick={() => handleScroll("contact")}
          className="p-1 sm:px-6 sm:py-2 text-center border-b-2 border-[#808080] cursor-pointer"
        >
          CONTACTS
        </p>
        <div>
          <ToggleTheme />
        </div>
      </div>
      <div className="flex-1 sm:flex hidden sm:ml-10 text-center">
        <h1>
          <span>is Industrial Design </span>
          <strong className="inline-bloack">
            <AnimatedText />
          </strong>
        </h1>
      </div>

      <div className="hidden sm:flex text-white border-l-2 h-full  items-center justify-center border-[#808080] px-10 ">
        <div className="bg-copy-primary h-[240px] w-[220px] p-4 flex justify-center items-center">
          <span className="text-cta-text-dark ">Project icon Image</span>
        </div>
      </div>
      <div className="h-full border-l border-r border-copy-primary">
        <ul className="  felx flex-col w-[250px]  sm:w-[300px]  text-end">
          {featured &&
            featured.map((item, index) => (
              <li
                key={index}
                onClick={() => handleRoute(item.id)}
                className="px-10 py-3 border-b   border-copy-primary cursor-pointer"
                id="item"
              >
                {item.projectTitle}
              </li>
            ))}
        </ul>
      </div>
      <span className="-rotate-90 text-sm sm:text-[20px] text-nowrap ">
        &lt; Selected Works
      </span>
    </div>
  );
};
