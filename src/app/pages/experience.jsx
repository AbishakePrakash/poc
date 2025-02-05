import { useProfileData } from "../context/DataContext";

export const Experience = () => {
  const { experience } = useProfileData();
  // console.log("Exp", experience);

  if (!experience) return <div>Loading...</div>;

  function getMonthAndYear(cDate) {
    const date = new Date(cDate);
    const formattedDate = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  }

  return (
    <div className="mt-10 mx-10">
      <hr className="my-5 border-t-2 border-gray-800" />
      <h3 className="mb-10">Work Experience</h3>
      <div className="space-y-8">
        {experience &&
          experience.map((item, index) => (
            <div key={index}>
              <p>
                {getMonthAndYear(item.fields.startDate)} -
                {getMonthAndYear(item.fields.endDate)}
              </p>
              <p style={{ fontWeight: 600 }}>{item.fields.role}</p>
              <p style={{ fontWeight: 600 }}>{item.fields.employer}</p>
              <p>{item.fields.jobDescription}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
