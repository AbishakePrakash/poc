"use client";

import FanAnimation from "./FanAnimation";
import { useTheme } from "../context/themeContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SlideBar } from "./SlideBar";
import ShakyText from "./ShakyText";
import { useData } from "../context/dataContext";

export const Header = () => {
  const { projects } = useData();
  const { darkMode, toggleTheme } = useTheme();
  const borderColor = darkMode ? "border-white" : "border-black";
  const bgColor = darkMode ? "bg-white" : "bg-black";
  const textColor = darkMode ? "text-black" : "text-white";
  const defaultImage = darkMode ? "project-dark.svg" : "project.svg";

  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [hoveredImage, setHoveredImage] = useState(defaultImage);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setHoveredImage(darkMode ? "project-dark.svg" : "project.svg");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
          darkMode ? "bg-black" : "bg-white"
        } ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div
          className={`grid grid-cols-24 h-[110px] sm:h-[300px] border-2 ${borderColor}`}
        >
          <div
            className={`col-span-6 sm:col-span-2 flex flex-col border-r-2 ${borderColor}`}
          >
            <div
              className={`flex-[3] flex items-center justify-center border-b-2 ${borderColor} ${bgColor} ${textColor} aspect-square`}
            >
              <FanAnimation />
            </div>
            <div
              className={`flex-1 hidden md:flex items-center justify-center border-b-2 ${borderColor}`}
            >
              <Link href="/#cv" scroll={true} className="typography-hm1">
                CV
              </Link>
            </div>
            <div
              className={`flex-1 hidden md:flex items-center justify-center border-b-2 ${borderColor}`}
            >
              <Link href="/#contact" scroll={true} className="typography-hm1">
                CONTACT
              </Link>
            </div>
            <div className="flex-1 hidden md:flex">
              <div
                className={`flex-1 flex items-center justify-center border-r-2 ${borderColor}`}
                onClick={!darkMode ? toggleTheme : () => {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="-rotate-90"
                >
                  <path
                    fill="currentColor"
                    d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21"
                  />
                </svg>
              </div>
              <div
                className={`flex-1 flex items-center justify-center ${bgColor} ${textColor}`}
                onClick={darkMode ? toggleTheme : () => {}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688q0-.412.275-.712l1.4-1.425q.3-.3.712-.3q.413 0 .713.3q.275.275.275.7q0 .425-.275.7L18.35 7.05q-.275.275-.7.275q-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275q.425 0 .7.275L7.05 5.65q.275.275.275.7q0 .425-.275.7q-.3.275-.7.275q-.4 0-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.712q0-.413.275-.688q.275-.275.688-.275q.412 0 .712.275l1.425 1.4q.3.275.287.7q-.012.425-.287.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7q0-.425.275-.7L5.65 16.95q.275-.275.688-.275q.412 0 .712.275q.3.3.3.713q0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0 0q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className={`col-span-14 sm:col-span-11 md:flex items-center justify-center border-r-2 ${borderColor}`}
          >
            <div className="hidden md:block">
              <ShakyText />
            </div>
            <div className="flex flex-col h-full sm:hidden">
              <div
                className={`flex-1 flex items-center justify-end border-b-2 ${borderColor}`}
              >
                <Link href="/#cv" scroll={true} className="mr-4 typography-hm1">
                  CV
                </Link>
              </div>
              <div
                className={`flex-1 flex items-center justify-end border-b-2 ${borderColor}`}
              >
                <Link
                  href="/#contact"
                  scroll={true}
                  className="mr-4 typography-hm1"
                >
                  CONTACT
                </Link>
              </div>
              <div className="flex-1 flex">
                <div
                  className={`flex-1 flex items-center justify-center border-r-2 ${borderColor}`}
                  onClick={!darkMode ? toggleTheme : () => {}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="-rotate-90"
                  >
                    <path
                      fill="currentColor"
                      d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362t.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21"
                    />
                  </svg>
                </div>
                <div
                  className={`flex-1 flex items-center justify-center ${bgColor} ${textColor}`}
                  onClick={darkMode ? toggleTheme : () => {}}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 5q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm4.95 2.05q-.275-.275-.275-.688q0-.412.275-.712l1.4-1.425q.3-.3.712-.3q.413 0 .713.3q.275.275.275.7q0 .425-.275.7L18.35 7.05q-.275.275-.7.275q-.425 0-.7-.275ZM20 13q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8 10q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275q.425 0 .7.275L7.05 5.65q.275.275.275.7q0 .425-.275.7q-.3.275-.7.275q-.4 0-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.712q0-.413.275-.688q.275-.275.688-.275q.412 0 .712.275l1.425 1.4q.3.275.287.7q-.012.425-.287.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm2.225 6.775q-.275-.275-.275-.7q0-.425.275-.7L5.65 16.95q.275-.275.688-.275q.412 0 .712.275q.3.3.3.713q0 .412-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0 0q-1.65 0-2.825-1.175Q8 13.65 8 12q0-1.65 1.175-2.825Q10.35 8 12 8q1.65 0 2.825 1.175Q16 10.35 16 12q0 1.65-1.175 2.825Q13.65 16 12 16Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-span-5 hidden md:flex items-center justify-center border-r-2 ${borderColor} ${
              isHovered ? bgColor : ""
            } transition-all duration-300`}
          >
            <img
              src={hoveredImage}
              className="w-[240px] h-[220px] object-cover transition-all duration-300"
            />
          </div>

          <div
            className={`col-span-5 hidden md:flex flex-col border-r-2 ${borderColor}`}
          >
            {projects
              ?.filter((project) => project.featured)
              .map((project, index, filteredProjects) => (
                <Link
                  href={`/projects/${project.projectId}`}
                  key={project.id}
                  className={`typography-hm4 flex-1 flex items-center pr-5 justify-end ${
                    index !== filteredProjects.length - 1
                      ? `border-b-2 ${borderColor}`
                      : ""
                  } transition-all duration-300 ${
                    darkMode
                      ? "hover:bg-white hover:text-black"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onMouseEnter={() => {
                    setHoveredImage(project.icon.fields.file.url);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredImage(defaultImage);
                    setIsHovered(false);
                  }}
                >
                  {project.projectTitle}
                </Link>
              ))}
          </div>

          <div className="col-span-4 sm:col-span-1 flex items-center justify-center">
            <div className="hidden md:flex items-center justify-center relative">
              <Link
                href="/#projects"
                className="absolute -rotate-90 typography-hm5 text-nowrap flex items-center"
              >
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path
                    d="M8 9L0.20577 -9.50388e-08L15.7942 8.7838e-07L8 9Z"
                    fill="currentColor"
                  />
                </svg>
                Selected Works
              </Link>
            </div>
            <div className="flex sm:hidden items-center justify-center">
              <Link
                href="/#projects"
                className="-rotate-90 text-nowrap flex typography-hm5 items-center"
              >
                <svg
                  width="16"
                  height="9"
                  viewBox="0 0 16 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path
                    d="M8 9L0.20577 -9.50388e-08L15.7942 8.7838e-07L8 9Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-[15px] font-medium">Works</p>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`sticky bg-red-500 z-40 transition-all duration-300 ${
          headerVisible ? "top-[110px] sm:top-[300px]" : "top-0"
        }`}
      >
        <SlideBar />
      </div>

      <div className="h-[110px] sm:h-[300px]"></div>
    </>
  );
};
