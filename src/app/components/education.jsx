"use-client";

import { useProfileData } from "../context/DataContext";

export const Education = () => {
  const { education } = useProfileData();
  // console.log("Edu", education);

  if (!education) return <div>Loading...</div>;

  function getYear(date) {
    if (!date) return "Present";
    const year = date.split("-")[0];
    return year;
  }

  return (
    <div className="space-y-8 mx-10">
      <h3 className="mt-10 font-bold">Education</h3>
      {education &&
        education.map((item, index) => (
          <div key={index} className="space-y-2">
            <p style={{ fontWeight: 600 }}>
              {getYear(item.fields.startDate)} - {getYear(item.fields.endDate)}
            </p>
            <p>{item.fields.institute}</p>
            <p>
              {item.fields.qualification} - {item.fields.specialization}
            </p>
          </div>
        ))}
    </div>
  );
};
