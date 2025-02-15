"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTheme } from "../context/Themecontext";

export default function FanAnimation() {
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const lastRotation = useRef(0); // Stores the last rotation
  const { theme } = useTheme();

  const router = useRouter();

  // const handleMouseDown = () => {
  //   isDragging.current = true;
  // };

  // const handleMouseUp = () => {
  //   isDragging.current = false;
  //   lastRotation.current = rotation; // Preserve the last rotation
  // };

  // const handleMouseMove = (e) => {
  //   if (isDragging.current) {
  //     const rect = e.currentTarget.getBoundingClientRect();
  //     const centerX = rect.left + rect.width / 2;
  //     const centerY = rect.top + rect.height / 2;
  //     const angle =
  //       Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
  //     setRotation(angle);
  //   }
  // };

  return (
    <div
      onClick={() => router.push("/")}
      className={`flex justify-center items-center ${
        theme === "light" ? "bg-black" : "bg-white"
      } `}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
    >
      <motion.svg
        width="152"
        height="146"
        viewBox="0 0 152 146"
        className={`w-[100px] sm:w-[162px] group cursor-pointer`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        whileHover={{
          rotate: [0, 360, 0, -360, 0, 360],
          transition: { duration: 6, ease: "linear", repeat: Infinity },
        }}
      >
        <motion.g
          className="origin-center
        
        "
          animate={{ rotate: 0 }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <path
            d="M67.8345 70.1007H44.3563C42.7355 70.1007 41.4228 71.3605 41.4228 72.9157C41.4228 74.471 42.7355 75.7307 44.3563 75.7307H67.8345C69.4553 75.7307 70.768 74.471 70.768 72.9157C70.768 71.3605 69.4553 70.1007 67.8345 70.1007Z"
            fill={theme === "light" ? "white" : "black"}
          />
          <path
            d="M87.2785 99.5102C88.0864 100.857 89.8838 101.317 91.2875 100.542C92.6911 99.767 93.1708 98.0422 92.3629 96.6952L80.6238 77.1841C79.816 75.8372 78.0185 75.3769 76.6149 76.1522C75.2112 76.9274 74.7316 78.6522 75.5394 79.9991L87.2785 99.5102Z"
            fill={theme === "light" ? "white" : "black"}
          />
          <path
            d="M92.3579 49.1361C93.1657 47.7892 92.6861 46.0692 91.2824 45.2892C89.8788 44.5139 88.0864 44.9742 87.2735 46.3212L75.5344 65.8323C74.7265 67.1792 75.2062 68.8992 76.6098 69.6792C78.0135 70.4593 79.8059 69.9942 80.6188 68.6472L92.3579 49.1361Z"
            fill={theme === "light" ? "white" : "black"}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
