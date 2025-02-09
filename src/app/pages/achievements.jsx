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
    <div className="px-10 sm:px-20 sm:py-10  bg-background text-copy-primary">
      <hr className="my-5 border-t-2 border-gray-800" />

      <h1 className="font-bold">
        Patents / Design registrations / Awards / Exhibitions
      </h1>
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
