"use client";

import { useData } from "@/app/context/dataContext"; // Adjust based on your structure
import Link from "next/link";
import { useTheme } from "../context/themeContext";

export default function ProjectList() {
    const { projects } = useData();
    const { darkMode } = useTheme();
    if (!projects) return <div className="text-center p-10">Loading...</div>;
    console.log({projects});
    return (
        <section className={`text-center w-full h-full`}>
            {/* Container with two parts */}
            <div className={`grid grid-cols-12 w-full h-full`}>
                {/* First Part: Selected Works */}
                <div className="col-span-6 md:col-span-8 flex items-center ml-8 sm:ml-14 py-10 justify-start typography-ps1 h-full">
                    All Works
                </div>
            </div>
            {/* Projects Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
                {projects?.map((project) => (
                    <Link key={project.id} href={`/projects/${project.projectId}`}
                        className={`gap-4 border-r-2 border-t-2 flex flex-col gap-8 items-center transition-all transition aspect-square p-8 ${darkMode ? "hover:bg-white hover:text-black" : "hover:bg-black hover:text-white"}`}
                    >
                        <img src={project.icon.fields.file.url} className="w-full h-full" />
                        <p className="typography-ps3 self-start text-left w-full">{project.projectTitle}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
