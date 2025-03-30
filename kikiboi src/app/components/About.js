import { useData } from "../context/dataContext";

export function About() {
  const { profile, loading } = useData();
  const data = profile[0];
  if (!data) return <div>Loadings...</div>;
  return (
    <div className="">
      <div
        className={`px-5 sm:px-20 py-10 sm:py-20`}
      >
        <div className="flex flex-col sm:flex-row items-baseline space-y-2 sm:space-y-0 sm:space-x-10">
          <p className="typography-name">{data.name}</p>
          <span className="typography-prof"> - {data.role}</span>
        </div>

        <div className="mt-8 space-y-8">
          <p className="typography-abou">{data.para1}</p>
          <p className="typography-abou">{data.para2}</p>
        </div>
      </div>
      <div className="w-full h-[600px]">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source src={data.video.fields.file.url} type="video/mp4" />
        </video>
      </div>

    </div>
  );
}