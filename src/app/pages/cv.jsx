import { Education } from "./education";
import { Experience } from "./experience";

export const Cv = () => {
  return (
    <div id="cv" className="sm:px-10 py-10 bg-background text-copy-primary">
      <h1 className="mx-10 py-5 font-bold">
        <hr className="mb-7 border-t-2 border-gray-800 " />
        CV
        <hr className="mt-7 border-t-2 border-gray-800" />
      </h1>
      <Education />
      <Experience />
    </div>
  );
};
