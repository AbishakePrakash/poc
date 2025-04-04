"use client";

import ToggleTheme from "../components/ToggleTheme";
import FanAnimation from "./fan";

export const Header = () => {
  return (
    <div className="flex justify-between items-center border-b-2 h-[300px] border-[#808080]">
      <div className="flex flex-col border-r-2 h-full border-[#808080] justify-between">
        {/* <svg
          width="137"
          height="137"
          viewBox="0 0 152 146"
          className=""
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M151.69 0H0V145.561H151.69V0Z" fill="black" />
          <path
            d="M67.8345 70.1007H44.3563C42.7355 70.1007 41.4228 71.3605 41.4228 72.9157C41.4228 74.471 42.7355 75.7307 44.3563 75.7307H67.8345C69.4553 75.7307 70.768 74.471 70.768 72.9157C70.768 71.3605 69.4553 70.1007 67.8345 70.1007Z"
            fill="white"
          />
          <path
            d="M87.2785 99.5102C88.0864 100.857 89.8838 101.317 91.2875 100.542C92.6911 99.767 93.1708 98.0422 92.3629 96.6952L80.6238 77.1841C79.816 75.8372 78.0185 75.3769 76.6149 76.1522C75.2112 76.9274 74.7316 78.6522 75.5394 79.9991L87.2785 99.5102Z"
            fill="white"
          />
          <path
            d="M92.3579 49.1361C93.1657 47.7892 92.6861 46.0692 91.2824 45.2892C89.8788 44.5139 88.0864 44.9742 87.2735 46.3212L75.5344 65.8323C74.7265 67.1792 75.2062 68.8992 76.6098 69.6792C78.0135 70.4593 79.8059 69.9942 80.6188 68.6472L92.3579 49.1361Z"
            fill="white"
          />
        </svg> */}
        <FanAnimation />
        <p className="px-6 py-2 text-center border-b-2 border-[#808080]">CV</p>
        <p className="px-6 py-2 text-center border-b-2 border-[#808080]">
          CONTACTS
        </p>
        <div>
          <ToggleTheme />
        </div>
      </div>
      <div className="">
        <h1>
          is Industrial Design <strong>,Creating exprience?</strong>
        </h1>
      </div>
      <div className=" text-white border-l-2 h-full flex items-center justify-center border-[#808080] px-10 ">
        <div className="bg-black h-[240px] w-[220px] p-4 flex justify-center items-center">
          <span>Project icon Image</span>
        </div>
      </div>
      <div className="h-full border-l border-r border-black">
        <ul className="  felx flex-col  w-[300px] text-end">
          <li className="px-10 py-3 border-b   border-black"> Project 1</li>
          <li className="px-10 py-3 border-b  border-black "> Project 2</li>
          <li className="px-10 py-3 border-b  border-black "> Project 3</li>
          <li className="px-10 py-3 border-b  border-black "> Project 4</li>
          <li className="px-10 py-3 border-b  border-black "> Project 5</li>
          <li className="px-10 py-3  border-black"> Project 6</li>
        </ul>
      </div>
      <span className="-rotate-90 ">&lt; Selected Works</span>
    </div>
  );
};
