import Link from "next/link";

export const Projects = () => {
  return (
    <div className="text-copy-primary px-10 py-10 bg-background">
      <div className="flex justify-between items-center">
        <h3 className="text-5xl font-normal ">Selected Works</h3>
        <Link
          href="/allworks"
          className="text-xl cursor-pointer hover:text-copy-secondary"
        >
          All Works &gt;
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].slice(0, 6).map((item, index) => {
          return (
            <div key={index} className="flex flex-col space-y-5 mt-10">
              <div className="text-copy-primary bg-copy-secondary h-[300px]">
                Project Icon
              </div>
              <span className="text-copy-primary">PROJECT TITLE</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
