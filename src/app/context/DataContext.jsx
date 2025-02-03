"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { getProfile } from "../helper/cms";

const DataContextApi = createContext();

const DataContext = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfile();
        setData(response[0]);
        // console.log(response[0]);
      } catch (error) {
        console.error("Err", error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <DataContextApi.Provider value={{ data }}>
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
