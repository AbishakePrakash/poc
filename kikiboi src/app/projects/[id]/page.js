"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useData } from "@/app/context/dataContext"; // Adjust path if needed
import Link from "next/link";

export default function ProjectDetail() {
  const { id } = useParams(); // Get project ID from URL
  const { projects } = useData(); // Fetch projects from Context

  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projects && id) {
      const selectedProject = projects.find(
        (p) => p.projectId === parseInt(id)
      );
      setProject(selectedProject);
      console.log({ selectedProject });
    }
  }, [id, projects]);

  if (!project) return <div className="p-10">Loading...</div>;

  // 🔹 Ensure projects are sorted by projectId
  const sortedProjects = [...projects].sort(
    (a, b) => a.projectId - b.projectId
  );

  // 🔹 Find the current project index based on projectId
  const projectIndex = sortedProjects.findIndex(
    (p) => p.projectId === parseInt(id)
  );

  // 🔹 Handle looping correctly based on actual projectId values
  const prevProject =
    sortedProjects[
      (projectIndex - 1 + sortedProjects.length) % sortedProjects.length
    ];
  const nextProject =
    sortedProjects[(projectIndex + 1) % sortedProjects.length];

  return (
    <section className="text-center w-full h-full">
      <div className="grid grid-cols-24 w-full h-full">
        <div className="col-span-15 md:col-span-18 flex items-center ml-10 py-12 justify-start border-r-2 h-full">
          <Link href="/projects" className="flex items-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 13.5L15 0.942632V26.0574L0 13.5Z"
                fill="currentColor"
              />
            </svg>
            <p className="ml-4 typography-ps2"> All Works</p>
          </Link>
        </div>

        <div className="col-span-8 md:col-span-5 flex items-center justify-center gap-8 lg:gap-58">
          {/* Navigation Buttons (Looping Enabled) */}
          <div className="w-full h-full flex flex-col items-center justify-between border-r-2 cursor-pointer">
            {/* Previous Project */}
            <Link
              href={`/projects/${prevProject.projectId}`}
              className="flex items-center justify-center w-full h-1/2 border-b-2"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13.5L15 0.942632V26.0574L0 13.5Z"
                  fill="currentColor"
                />
              </svg>
            </Link>

            {/* Next Project */}
            <Link
              href={`/projects/${nextProject.projectId}`}
              className="flex items-center justify-center w-full h-1/2"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 13.5L0 26.0574V0.94263L15 13.5Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>

          <div className="flex items-center w-full">
            <p className="typography-ps2">
              {project?.projectId}/{projects.length}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full h-full border-y-2">
        <div className="col-span-6 md:col-span-8 flex items-center pl-5 sm:pl-20 py-10 justify-start h-full typography-pd1">
          {project.projectTitle}
        </div>
        <div className="col-span-6 md:col-span-4 flex items-center  pr-5 sm:pr-20 justify-end  typography-pd2">
          {project.year}
        </div>
      </div>

      {/* Projects Detail Section */}
      <div className="w-full">
        {project &&
          project?.projectData.map((item) => (
            <div key={item.sys.id}>
              <div className="px-10 sm:px-20 py-12 border-b-2 typography-cv4">
                <p className="typography-cv4 text-left">
                  {item.fields.paragraph}
                </p>
              </div>
              <div className="w-full h-[500px] p-4 flex items-center justify-center">
                <img
                  src={item?.fields?.source?.fields?.file?.url}
                  alt="Project Image"
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
