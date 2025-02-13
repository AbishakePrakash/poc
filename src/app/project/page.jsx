"use client";

import Link from "next/link";
import { useProjectData } from "../context/ProjectContext";
import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { SingleProjectData } from "../context/SingleProjectContext";

export default function Projects() {
  const { data } = useProjectData();
  const [header, setHeader] = useState();

  const updateHeader = () => {
    const result = JSON.parse(localStorage.getItem("header"));
    setHeader(result);
  };

  useEffect(() => {
    updateHeader();

    const interval = setInterval(() => {
      updateHeader();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  console.log(data);

  if (!data) return <div>Loadings...</div>;
  return (
    <div
      className={`text-copy-primary px-10 py-10 bg-background ${
        header ? "mt-[350px]" : "mt-0"
      }`}
    >
      <div className="space-x-4 mb-10">
        <Link
          href={"/"}
          className="flex w-[60%]    items-center hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="text-copy-primary hover:text-copy-primary "
          >
            <path fill="currentColor" d="m14 7l-5 5l5 5z" />
          </svg>
          <h3 className="text-2xl font-semibold">Home</h3>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-5xl font-normal ">Selected Works</h3>
      </div>
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 ">
        {data.map((item, index) => (
          <Link
            href={`project/${item.projectId}`}
            key={index}
            // style={{ cursor: "pointer" }}
            className="flex flex-col space-y-5 mt-10
            cursor-pointer

            "
          >
            <div className="text-copy-primary bg-copy-secondary h-[300px]">
              <img
                style={{ height: "100%", width: "100%" }}
                src={item.projectData[0].fields.url.fields.file.url}
                alt="img"
              />
            </div>
            <span className="text-copy-primary hover:text-white">
              {item.projectTitle}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
