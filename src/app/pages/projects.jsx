import Link from "next/link";
import { useProjectData } from "../context/ProjectContext";
// import { useContext } from "react";
// import { SingleProjectData } from "../context/SingleProjectContext";

export const Projects = () => {
  const { data } = useProjectData();

  console.log(data);

  if (!data) return <div>Loadings...</div>;
  return (
    <div
      className="text-copy-primary px-10 sm:px-20 py-10 bg-background"
      id="sworks"
    >
      <div className="flex justify-between flex-col sm:flex-row items-start sm:items-center space-y-4">
        <h3 className="text-3xl sm:text-5xl  font-normal ">Selected Works</h3>
        <Link
          href="/project"
          className="text-2xl cursor-pointer sm:text-xl hover:text-copy-secondary"
        >
          All Works &gt;
        </Link>
      </div>
      <div className=" grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] sm:gap-10 gap-4 ">
        {data.slice(0, 6).map((item, index) => (
          <Link
            href={`project/${item.id}`}
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
};
