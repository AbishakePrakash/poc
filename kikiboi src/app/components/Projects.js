import { useTheme } from "@/app/context/themeContext"; // Adjust the path based on your folder structure
import { useData } from "../context/dataContext";
import Link from "next/link";

export function Projects() {
  const { darkMode } = useTheme(); // Get the border color from the theme
  const { projects } = useData(); // Get the projects from the context

  return (
    <section
      id="projects"
      className={`text-center border-b-2 border-t-2 w-full h-full `}
    >
      {/* Container with two parts */}
      <div className={`grid grid-cols-12 w-full h-full`}>
        {/* First Part: Selected Works */}
        <div className="col-span-6 md:col-span-8 flex items-center sm:pl-10 py-10 justify-start  border-r-2 h-full">
          <p className="typography-ps1  text-left w-full pl-5">
            Selected Works
          </p>
        </div>

        {/* Second Part: All Works */}
        <div className="col-span-6 md:col-span-4  flex items-center justify-center cursor-pointer">
          <Link href="/projects" className="flex items-center space-x-2">
            <p className=" typography-ps2">All Works</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 13.5L-1.18272e-06 26.0574L-8.49151e-08 0.94263L15 13.5Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        {projects
          ?.filter((project) => project.featured)
          .map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.projectId}`}
              className={`border-t-2 flex flex-col gap-8 items-center justify-center transition-all aspect-square p-8
      ${
        darkMode
          ? "hover:bg-white hover:text-black"
          : "hover:bg-black hover:text-white"
      }
      ${index % 3 !== 2 ? "md:border-r-2" : ""}
      ${index % 2 !== 1 ? "sm:border-r-2" : ""}`}
            >
              <img
                src={project.icon.fields.file.url}
                className="w-full h-full"
              />
              <h3 className="typography-ps3 self-start text-left w-full">
                {project.projectTitle}
              </h3>
            </Link>
          ))}
      </div>
    </section>
  );
}
