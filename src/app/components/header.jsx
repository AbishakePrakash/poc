"use client";

import { usePathname, useRouter } from "next/navigation";
import ToggleTheme from "../hooks/ToggleTheme";
import { useProjectData } from "../context/ProjectContext";
import FanAnimation from "./fan";
import React, { useEffect, useState } from "react";
import AnimatedText from "./titleAnimation";
import Navbar from "./navbar";
import { useTheme } from "../context/Themecontext";
import { WordRotateDemo } from "./marqueeText";
import { useProject } from "../context/NavLink";
import Link from "next/link";

const textList = [
  "Creating experience?",
  "Creating interactions",
  "Creating Aesthetics",
  "Creating Renderings",
  "All of them",
];

export const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const { data } = useProjectData();
  const featured = data?.filter((item) => item.featured === true);
  const router = useRouter();
  const pathname = usePathname();
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  const { projectid, setProjectid } = useProject();

  const winWidth = window.innerWidth < 430;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScrolll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
        localStorage.setItem("header", JSON.stringify(true));
      } else {
        setShowHeader(false);
        localStorage.setItem("header", JSON.stringify(false));
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScrolll);
    return () => {
      window.removeEventListener("scroll", handleScrolll);
    };
  }, [lastScrollY]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleRoute = (path) => {
  //   if (pathname.startsWith("/project")) {
  //     router.push(path);
  //     console.log(path);
  //   } else {
  //     router.push(`project/${path}`);
  //     console.log(`project/${path}`);
  //   }
  // };

  const handleClick = (item) => {
    if (projectid !== item.projectId) {
      setProjectid(item.projectId);
      router.replace(`/project/${item.projectId}`);
    } else {
      window.history.replaceState(null, "", `/project/${item.projectId}`);
    }
  };

  return (
    <div
      className={`border-box fixed w-full transition-transform duration-300 top-0 left-0 z-50
        
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <div
        className={`flex h-[275px] justify-between items-center text-copy-primary bg-yellow-200 border-b-2  border-[#808080]    `}
      >
        <div
          id="blockOne"
          className="flex flex-col  border-r-2 h-full border-[#808080] justify-between w-[250px] sm:w-[150px] "
        >
          <FanAnimation />
          <p
            onClick={() => handleScroll("cv")}
            className="p-1 sm:px-4 sm:py-2 h-full  text-center border-b-2 border-[#808080] cursor-pointer flex items-center justify-center"
          >
            CV
          </p>
          <p
            onClick={() => handleScroll("contact")}
            className="p-1 sm:px-4 sm:py-2 text-center border-b-2 border-[#808080] cursor-pointer h-full flex items-center justify-center"
          >
            CONTACTS
          </p>
          <div className="w-full">
            <ToggleTheme />
          </div>
        </div>
        <div
          id="blockTwo"
          className="hidden flex-1 sm:ml-20 sm:flex text-2xl   text-center"
        >
          <h1 className=" flex ml-40 ">
            is Industrial Design,
            <strong className="">
              <AnimatedText />
            </strong>
          </h1>
        </div>

        <div
          id="blockThree"
          className="hidden sm:flex text-white border-l-2 h-full  items-center justify-center border-[#808080] px-10 "
        >
          <div
            className={` h-[240px] w-[220px] p-4 flex justify-center items-center ${
              theme === "light" ? "bg-black text-white" : "bg-white text-black"
            } `}
          >
            <span className="text-cta-text-dark ">Project icon Image</span>
          </div>
        </div>
        <div
          id="blockFour"
          className="h-full border-l border-r border-copy-primary"
        >
          <ul className="h-full flex flex-col w-[250px]  sm:w-[300px]  text-center ">
            {featured &&
              // featured.map((item, index) => (
              featured.slice(0, 5).map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleClick(item)}
                  className="flex-1 px-10 py-2 border-b   border-copy-primary cursor-pointer flex items-center justify-end"
                  id="item"
                >
                  {item.projectTitle}
                </li>
              ))}
          </ul>
        </div>
        <div className="-rotate-90 bg-green-500">
          <a
            href="#sworks"
            className="-rotate-90  text-sm sm:text-[20px] text-nowrap  bg-red-500"
          >
            &lt; Selected Works
          </a>
        </div>
      </div>
      <div className="z-20 fixed top-[275px] left-0 w-full">
        <Navbar />
      </div>
    </div>
  );
};
