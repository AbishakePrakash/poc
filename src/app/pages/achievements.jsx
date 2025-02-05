import { useProfileData } from "../context/DataContext";

export const Achievements = () => {
  const { achievements } = useProfileData();
  // console.log("Achievements", achievements);
  if (!achievements) return <div>Loading...</div>;

  function getMonthAndYear(cDate) {
    const date = new Date(cDate);
    const formattedDate = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  }

  return (
    <div className="  mx-20 px-10 py-10">
      <h1>Patents / Design registrations / Awards / Exhibitions</h1>
      <div className="mt-10 space-y-10">
        {achievements &&
          achievements.map((item, index) => (
            <div key={index} className="">
              <p>{getMonthAndYear(item.fields.date)}</p>
              <p style={{ fontWeight: 600 }}>{item.fields.title} </p>
              <p>{item.fields.description} </p>
            </div>
          ))}
      </div>
    </div>
  );
};
