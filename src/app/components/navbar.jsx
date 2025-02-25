"use client";
import React, { useEffect, useState } from "react";
import { useProjectData } from "../context/ProjectContext";
import Marquee from "react-fast-marquee";
import { usePathname, useRouter } from "next/navigation";
import { useProject } from "../context/NavLink";

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const { projectid } = useProject();

  // console.log("proeject", projectid);

  // const pickOne = 3;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const { data } = useProjectData();
  if (!Array.isArray(data)) {
    console.warn("Project data is not available yet.");
    return null;
  }

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
    <div
      className={`fixed  overflow-hidden w-full bg-background border-b border-copy-primary
      transition-transform duration-300
    ${showHeader ? "translate-y-0" : "-translate-y-full"}
    `}
    >
      <Marquee
        direction="left"
        loop={0}
        speed={150}
        gradient={false}
        className="flex py-4 space-x-10 overflow-y-hidden  whitespace-nowrap"
      >
        {[...data, ...data]?.map((item, index) => (
          <span
            className={`shrink-0 px-10 py-5 font-semibold cursor-pointer ${
              item.projectId == projectid
                ? "bg-black text-white"
                : "text-copy-primary"
            }`}
            key={index}
            onClick={() => handleRoute(item.projectId)}
          >
            {item.projectTitle}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Navbar;
