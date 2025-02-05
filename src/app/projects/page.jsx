"use client";

import React from "react";
import { useProjectData } from "../context/ProjectContext";

const page = () => {
  const { data } = useProjectData();
  // console.log(data);

  if (!data) return <div>Loadings...</div>;
  return (
    <div className="text-copy-primary px-10 py-10 bg-background">
      <div className=" mx-20 flex justify-between items-center">
        <h3 className="text-5xl font-normal ">All Works</h3>
        {/* <Link
          href="/allworks"
          className="text-xl cursor-pointer hover:text-copy-secondary"
        >
          All Works &gt;
        </Link> */}
      </div>
      <div className=" mx-20 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 ">
        {data.slice(0, 6).map((item, index) => (
          <div
            key={index}
            style={{ cursor: "pointer" }}
            className="flex flex-col space-y-5 mt-10"
          >
            <div className="text-copy-primary bg-copy-secondary h-[300px]">
              <img
                style={{ height: "100%", width: "100%" }}
                src={item.projectData[0].fields.url.fields.file.url}
                alt="img"
              />
            </div>
            <span className="text-copy-primary">{item.projectTitle}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
