"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { getProject } from "../helper/projects";

const ProjectContextApi = createContext();

const ProjectContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [experience, setExperience] = useState(null);
  const [achievements, setAchievements] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProject();
        setData(response);
        // setProjectData(response);
        // setExperience(response[0].experience);
        // setAchievements(response[0].patentsDesignRegistrationsAwardsExhibiti);
        console.log("Context", response);
      } catch (error) {
        console.error("Err", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <ProjectContextApi.Provider value={{ data }}>
      {children}
    </ProjectContextApi.Provider>
  );
};

export default ProjectContext;

export function useProjectData() {
  const context = useContext(ProjectContextApi);

  if (!context) {
    throw new Error(
      "useProjectData must be used within a ProjectContext provider"
    );
  }
  return context;
}
