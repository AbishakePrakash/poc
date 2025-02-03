"use-client";

import { useEffect, useState } from "react";
import { getProfile } from "../helper/cms";

export const Education = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await getProfile("education");
      setData(res);
      // console.log(res[0].startDate.split("-")[0]);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  function getYear(date) {
    const year = date.split("-")[0];
    console.log({ year });

    return year;
  }

  return (
    <div className="space-y-8 mx-20">
      <h3 className="mt-10 ">Education</h3>
      {data &&
        data.map((item, index) => (
          <div key={index} className="space-y-2">
            <p style={{ fontWeight: 600 }}>
              {item.startDate.split("-")[0]} -{item.endDate.split("-")[0]}
            </p>
            <p>{getYear(item.startDate)}</p>
            <p>{item.institute}</p>
            <p>adjfak adsjadkjf asdl adkjadsfk dkjfad adjkfads</p>
          </div>
        ))}
    </div>
  );
};
