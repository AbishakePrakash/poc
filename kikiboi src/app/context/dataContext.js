"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { getProfile, getProject } from "../utils/contentful"; // Keep API functions in `utils`

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const profileData = await getProfile();
      const projectData = await getProject();
      setProfile(profileData);
      setProjects(projectData);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ profile, projects, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
