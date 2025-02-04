"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { getProfile } from "../helper/cms";

const DataContextApi = createContext();

const DataContext = ({ children }) => {
  const [data, setData] = useState(null);
  const [education, setEducation] = useState(null);
  const [experience, setExperience] = useState(null);
  const [achievements, setAchievements] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfile();
        setData(response[0]);
        setEducation(response[0].education);
        setExperience(response[0].experience);
        setAchievements(response[0].patentsDesignRegistrationsAwardsExhibiti);
        setContact(response[0].contact.fields);
        console.log("Contact", response[0].contact);
      } catch (error) {
        console.error("Err", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <DataContextApi.Provider
      value={{ data, education, experience, achievements, contact }}
    >
      {children}
    </DataContextApi.Provider>
  );
};

export default DataContext;

export function useProfileData() {
  const context = useContext(DataContextApi);

  if (!context) {
    throw new Error(
      "useProfileData must be used within a DataContext provider"
    );
  }
  return context;
}
