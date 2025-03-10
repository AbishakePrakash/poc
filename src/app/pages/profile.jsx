"use-client";

import { useEffect, useState } from "react";
import { useProfileData } from "../context/DataContext";
import { getProfile } from "../helper/cms";

export const Profile = () => {
  const { data } = useProfileData();
  // console.log(data);

  if (!data) return <div>Loadings...</div>;

  return (
    <div style={{ backgroundColor: "red" }}>
      <div className="px-20 py-10 h-dvh bg-background ">
        <div className="text-copy-primary flex items-baseline gap-10">
          <h1 className=" text-[65px] font-normal tracking-widest">
            {data.name}
          </h1>
          <span className="text-[24px] font-normal text-gray-500 ">
            {data.role}
          </span>
        </div>
        <div className="px-20 py-10 mt-10 space-y-4 text-copy-primary left-0 absolute">
          <p>{data.para1}</p>
          <p>{data.para2}</p>
        </div>
      </div>
      <div className="px-20 py-20 bg-background flex justify-center items-center">
        <video width="100%" height="auto" autoPlay loop muted>
          <source src={data.video.fields.file.url} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
