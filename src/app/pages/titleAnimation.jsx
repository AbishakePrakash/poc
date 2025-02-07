"use client";
import React, { useEffect, useState } from "react";

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
    <div className="relative h-10 overflow-hidden">
      {textList.map((text, i) => (
        <span
          key={i}
          className={`absolute left-0 right-0 text-black font-bold text-xl text-center transition-opacity duration-500 ${
            i === index ? "animate-fadeSlide" : "opacity-0"
          }`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
