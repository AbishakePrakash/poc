"use client";
import { useProject } from "@/app/context/NavLink";
import { getProject } from "@/app/helper/projects";
import { getSingleProject } from "@/app/helper/projects copy";
import Link from "next/link";
// import { SingleProjectData } from "@/app/context/SingleProjectContext";
import { useRouter, useParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export default function CardDetail() {
  // const router = useRouter();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const router = useRouter();
  const [header, setHeader] = useState(null);
  const [projectId, setProjectId] = useState(id);
  const [length, setLength] = useState(0);
  const { projectid, setProjectid } = useProject();

  // const [loading ,setLoading]=useState(false)

  // useEffect(() => {
  //   if (!projectId) return;

  //   const getSingProjectData = async () => {
  //     const responese = await getSingleProject(projectId);
  //     setData(responese);
  //     console.log("SingleProject Data", responese);
  //   };
  //   getSingProjectData();
  // }, [projectId]);

  useEffect(() => {
    if (!projectId) return;

    const getProjects = async () => {
      const response = await getProject();
      setLength(response.length);
      console.log("response.length", response.length);

      localStorage.setItem("projectId", JSON.stringify(projectId));

      // const targetProject = response.sort((a, b) => a.projectId - b.projectId)[
      //   projectId - 1
      // ];

      const targetProject = response.find((item) => {
        console.log(item.projectId, projectId);
        return item.projectId == projectId;
      });

      if (targetProject) {
        setData(targetProject);
      }
      console.log({
        paramsId: projectId,
        projectId: targetProject?.projectId,
      });
    };
    getProjects();
  }, [projectId]);

  const updateHeader = () => {
    const result = JSON.parse(localStorage.getItem("header"));
    setHeader(result);
  };

  const handleNavigation = (string) => {
    // console.log(projectId, length);
    if (string === "p") {
      setProjectId(projectId == length ? 1 : parseInt(projectId) - 1);
    } else {
      setProjectId(projectId == length ? 1 : parseInt(projectId) + 1);
    }
  };

  useEffect(() => {
    updateHeader();

    const interval = setInterval(() => {
      updateHeader();
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // console.log("data:", data);

  const handlePrev = () => {
    const newId = projectId == 1 ? length : parseInt(projectId) - 1;
    setProjectId(newId);
    setProjectid(newId);
    router.replace(`/project/${newId}`);
  };

  const handleNext = () => {
    const newId = projectId == length ? 1 : parseInt(projectId) + 1;
    setProjectId(newId);
    setProjectid(newId);
    router.replace(`/project/${newId}`);
  };

  // if (!data) return <p>Loading...</p>;

  return (
    <div className={`"bg-background ${header ? "mt-[350px]" : "mt-0"} "`}>
      <div className="border-b w-full border-copy-primary flex justify-between  items-center h-[150px] sm:gap-10 sm:px-20 bg-background">
        <div className="flex w-[60%]   p-2 sm:p-10 items-center hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="text-copy-primary hover:text-copy-primary "
          >
            <path fill="currentColor" d="m14 7l-5 5l5 5z" />
          </svg>
          {/* <h4
            onClick={() => router.push("/")}
            className="text-copy-primary text-xl sm:text-2xl"
          >
            Home
          </h4> */}
          {/* <p className="font-semibold mx-2 sm:mx-5">/</p> */}
          <h4
            onClick={() => router.push("/projects")}
            className="text-copy-primary text-xl sm:text-2xl"
          >
            Projects
          </h4>
        </div>
        <div className="border-l border-copy-primary border-r h-full flex flex-col justify-evenly ">
          <svg
            onClick={handlePrev}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="border-b
           
            text-copy-primary cursor-pointer 
            w-[30px] sm:w-[40px] border-copy-primary hover:text-copy-secondary"
          >
            <path fill="currentColor" d="m14 7l-5 5l5 5z" />
          </svg>
          <svg
            onClick={handleNext}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="rotate-180 text-copy-primary cursor-pointer
            w-[30px] sm:w-[40px]
             hover:text-copy-secondary"
          >
            <path fill="currentColor" d="m14 7l-5 5l5 5z" />
          </svg>
        </div>
        <div>
          <span className="text-copy-primary text-xl mr-4 sm:mr-0 sm:text-2xl">
            {data?.projectId}/{length}
          </span>
        </div>
      </div>

      <div className="text-copy-primary px-20 py-10 flex justify-between items-center border-b border-copy-primary">
        <h1 className="text-2xl text-copy-primary font-bold">
          {data?.projectTitle}
        </h1>

        <span className="font-semibold">{data?.year}</span>
      </div>

      <div className="space-y-10  py-10 ">
        {data?.projectData?.map((item, index) => {
          return (
            <div key={index}>
              <p className="mt-2 px-10 w-full py-10 text-copy-primary border-b border-copy-primary ">
                {item.fields.paragraph}
              </p>

              <div
                className="
        border-b py-10 border-copy-primary px-10 w-full
        "
              >
                <img
                  className="mx-auto"
                  src={item.fields.url.fields.file.url}
                  alt=""
                />
              </div>
            </div>
          );
        })}
        <div>
          <p className=" px-10 my-auto w-full pb-10 text-copy-primary text-center justify-center border-b border-copy-primary ">
            {data?.quote}
          </p>
        </div>
      </div>
    </div>
  );
}
