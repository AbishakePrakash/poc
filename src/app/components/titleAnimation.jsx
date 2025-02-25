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
    }, 1800); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-10 overflow-hidden min-w-[250px]">
      <span
        className={`absolute left-0 right-0 text-copy-primary font-bold text-2xl text-center animate-fadeSlide`}
      >
        {textList[index]}
      </span>
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

// "use client";
// import React, { useEffect, useState } from "react";

// const textList = [
//   "Creating experience?",
//   "Creating interactions",
//   "Creating Aesthetics",
//   "Creating Renderings",
//   "All of them",
// ];

// const AnimatedText = () => {
//   const [index, setIndex] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsVisible(false); // Start fade-out & move-up

//       setTimeout(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % textList.length);
//         setIsVisible(true); // Fade in & move up new text
//       }, 900); // Matches the transition duration
//     }, 2000); // Every 2 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-10 overflow-hidden min-w-[250px] flex items-center justify-center">
//       <span
//         className={`absolute left-0 right-0 text-copy-primary font-bold text-2xl text-center transition-all duration-900 ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
//         }`}
//       >
//         {textList[index]}
//       </span>
//     </div>
//   );
// };

// export default AnimatedText;
