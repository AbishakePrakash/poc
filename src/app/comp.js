"use client";

import { useEffect, useState } from "react";
import { getData } from "./helper/cms";

export default function Comp() {
  const [data, setData] = useState(null); // Initialize as null for better handling
  const [loading, setLoading] = useState(true); // Optional loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const content = await getData(); // Await the Promise
        if (!content || content.length === 0) {
          setData([]); // Set empty array if no content
        } else {
          setData(content.items[0]); // Set data if available
        }
        console.log(content.items[0]); // Log the actual data
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors gracefully
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchData(); // Call the async function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>; // Show this when no data exists
  }

  return (
    <div>
      {data && (
        <div>
          <h2>{data.fields.name}</h2>
          <p>{data.fields.role}</p>
          <p>{data.fields.para1}</p>
        </div>
      )}
    </div>
  );
}
