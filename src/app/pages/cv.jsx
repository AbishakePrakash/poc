import { Education } from "./education";
import { Experience } from "./experience";

export const Cv = () => {
  return (
    <div className="px-10 py-10 mt-10 bg-background">
      <h1 className="mx-20">CV</h1>
      <Education />
      <Experience />
    </div>
  );
};
