"use client";
import React from "react";
import { useProjectData } from "../context/ProjectContext";

const Navbar = () => {
  const { data } = useProjectData();
  if (!Array.isArray(data)) {
    console.warn("Project data is not available yet.");
    return null;
  }
  const pickOne = Math.floor(Math.random() * (data?.length || 1));

  return (
    <div className="overflow-hidden w-full bg-background border-b border-copy-primary">
      <div className="flex space-x-10 animate-marquee whitespace-nowrap">
        {[...data, ...data]?.map((item, index) => (
          <span
            className={`shrink-0 px-10 py-4 font-semibold ${
              index === pickOne ? "bg-black text-white" : "text-copy-primary"
            }`}
            key={index}
          >
            {item.projectTitle}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
