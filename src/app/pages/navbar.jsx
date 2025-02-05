import React from "react";

const navList = ["Profile", "Project", "Education", "Exprience", "Achements"];
// const navList =["Holosuit","Chimes Rocket","Teller Care","Holo Rover","Mitra","Current Status"]
const Navbar = () => {
  return (
    <div className="">
      <ul className="bg-background px-10 py-4 flex justify-between items-center text-copy-primary font-semibold border-b border-copy-primary w-full">
        {navList.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
