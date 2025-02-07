"use-client";

import { useEffect, useState } from "react";
import { useProfileData } from "../context/DataContext";
import { getProfile } from "../helper/cms";

export const Profile = () => {
  const { data } = useProfileData();
  // console.log(data);

  if (!data) return <div>Loadings...</div>;

  return (
    <div className="">
      <div className="mt-[340px] px-10 sm:px-20 py-10 h-[400px] bg-background ">
        <div className="text-copy-primary flex flex-col sm:flex-row items-baseline sm:gap-10 ">
          <h1 className="text-[28px] sm:text-[65px] sm:font-normal tracking-widest font-semibold">
            {data.name}
          </h1>
          <span className="text-[24px] font-normal text-gray-500 ">
            {data.role}
          </span>
        </div>
        <div className="px-10 py-6 sm:px-20 sm:py-10 sm:mt-10 sm:space-y-4 space-y-4 text-copy-primary left-0 absolute">
          <p>{data.para1}</p>
          <p>{data.para2}</p>
        </div>
      </div>
      <div className="px-10 mt-[300px] sm:mt-0 sm:px-20 sm:py-20 bg-background flex justify-center items-center">
        <video width="100%" height="auto" autoPlay loop muted>
          <source src={data.video.fields.file.url} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
