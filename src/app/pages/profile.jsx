"use-client";

import { useProfileData } from "../context/DataContext";

export const Profile = () => {
  const { data } = useProfileData();
  console.log(data);

  if (!data) {
    return <div>Loadings...</div>; // Show this when no data exists
  }

  return (
    <div>
      <div className="px-20 py-10 h-dvh bg-background ">
        <div className="text-copy-primary flex items-baseline gap-10">
          <h1 className=" text-[65px] font-normal tracking-widest">
            {data.fields.name}
          </h1>
          <span className="text-[24px] font-normal text-gray-500 ">
            {data.fields.role}
          </span>
        </div>
        <div className="px-20 py-10 mt-10 space-y-4 text-copy-primary left-0 absolute">
          <p>{data.fields.para1}</p>
          <p>{data.fields.para2}</p>
        </div>
      </div>
      <div className="px-20 py-10 bg-background flex justify-center items-center h-dvh">
        showreel video here
      </div>
    </div>
  );
};
