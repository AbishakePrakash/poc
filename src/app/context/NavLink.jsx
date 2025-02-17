"use client";
import { useParams } from "next/navigation";
import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const { id } = useParams();
  const [projectid, setProjectid] = useState(id);
  console.log("id", id);

  return (
    <ProjectContext.Provider value={{ projectid, setProjectid }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  return useContext(ProjectContext);
}
