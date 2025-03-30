"use client";
import { useState, useEffect } from "react";
import { useData } from "../context/dataContext";

export default function ShakyText() {
  const { profile } = useData();

  const initialSentences = profile?.[0].headerText.fields.secondaryText?.map(
    (item) => item?.fields?.animatedText
  );
  console.log({ initialSentences });

  const headertext = profile?.[0].headerText?.fields?.primaryText;

  // console.log(initialSentences);

  // const initialSentences = [
  //   "Creating experience",
  //   "Creating interactions",
  //   "Creating Aesthetics",
  //   "Creating Renderings",
  //   "All of them",
  // ];

  const [sentences, setSentences] = useState(initialSentences);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Start animation

      setTimeout(() => {
        setSentences((prevSentences) => {
          if (!Array.isArray(prevSentences) || prevSentences.length === 0) {
            return prevSentences; // Prevent errors
          }

          return [...prevSentences.slice(1), prevSentences[0]];
        });
        setIsAnimating(false); // Reset animation
      }, 500); // Animation duration
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="grid grid-cols-2 items-center w-full">
      {/* Box with only the center sentence */}
      <div className="flex justify-center mr-4">
        <p className="typography-hm2">{headertext}</p>
      </div>

      {/* Slot Machine Effect Box */}
      <div className="w-full overflow-hidden h-8">
        <div
          className={`flex flex-col items-start space-y-2 transition-transform duration-500 ${
            isAnimating ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          {sentences?.map((sentence, index) => (
            <p
              key={index}
              className={`text-lg pt-1 ${
                index === 0 ? " font-bold text-2xl" : "text-gray-600"
              }`}
            >
              {index === 0 ? `${sentence}?` : sentence}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
