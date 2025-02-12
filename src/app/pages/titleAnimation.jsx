"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const textList = [
  "Creating experience?",
  "Creating interactions",
  "Creating Aesthetics",
  "Creating Renderings",
  "All of them",
];

const AnimatedText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textList.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 overflow-hidden min-w-[250px]">
      {textList.map((text, i) => (
        <span
          key={i}
          className={`absolute left-0 right-0 text-copy-primary font-bold text-2xl text-center transition-opacity duration-900 ${
            i === index ? "animate-fadeSlide" : "opacity-0"
          }`}
        >
          {text}
        </span>
      ))}
    </div>
    // <div>
    //   <Marquee direction="up" autoFill loop={0}>
    //     {textList.map((text, i) => (
    //       <span
    //         key={i}
    //         className={`absolute left-0 right-0 text-copy-primary font-bold text-2xl text-center transition-opacity duration-500 ${
    //           i === index ? "animate-fadeSlide" : "opacity-0"
    //         }`}
    //       >
    //         {text}
    //       </span>
    //     ))}
    //   </Marquee>
    // </div>
  );
};

export default AnimatedText;
