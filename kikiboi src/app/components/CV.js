import { useData } from "../context/dataContext";

export function CV() {
  const { profile, loading } = useData();
  const experience = profile[0]?.workExperience;
  const education = profile[0]?.education;
  const achievements = profile[0]?.achievements;

  console.log({ profile, experience, education });
  function getYear(date) {
    if (!date) return "Present";
    const year = date.split("-")[0];
    return year;
  }
  function getMonthAndYear(cDate) {
    const date = new Date(cDate);
    const formattedDate = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  }
  function formatDate(cDate) {
    const date = new Date(cDate);
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  }
  if (loading) return <p>Loading...</p>;
  return (
    <div id="cv" className=" border-b-2 w-full h-full">
      <div className=" py-10 px-5 sm:px-20 flex border-b-2 w-full">
        <p className="typography-ps1">CV</p>
      </div>

      <div className="mx-5 sm:mx-20 my-14">
        <p className="typography-ps2">Education</p>
        {education?.map((item, index) => (
          <div key={index} className="mt-10">
            <p className="typography-cv3">
              {getYear(item.fields.startDate)} - {getYear(item.fields.endDate)}
            </p>
            <p className="mt-5 typography-cv4">{item.fields.institute}</p>
            <p className="typography-cv4">
              {item.fields.qualification} - {item.fields.specialization}
            </p>
          </div>
        ))}
      </div>
      <div className="border-t-2 my-6" />
      <div className="mx-5 sm:mx-20 my-14">
        <p className="mb-10 typography-ps2">Work Experience</p>
        <div className="space-y-10">
          {experience?.map((item, index) => (
            <div key={index}>
              <p className="typography-cv3">
                {getMonthAndYear(item.fields.startDate)} -{" "}
                {getMonthAndYear(item.fields.endDate)}
              </p>
              <p className="mt-3 typography-cv5">{item.fields.role}</p>
              <p className="typography-cv5">{item.fields.employer}</p>
              <p className="mt-3 typography-cv4">
                {item.fields.jobDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-2 my-6" />
      <div className="mx-5 sm:mx-20 my-20">
        <p className="typography-ps2">
          Patents / Design registrations / Awards / Exhibitions
        </p>
        {achievements?.map((item, index) => (
          <div key={index} className="mt-10">
            <p className="typography-cv3">{formatDate(item.fields.date)}</p>
            <p className="mt-3 typography-cv5">{item.fields.title}</p>
            <p className="mt-3 typography-cv4">{item.fields.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
