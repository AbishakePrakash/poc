"use client";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "../context/themeContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FanAnimation() {
  const controls = useAnimation();
  const router = useRouter();
  const { darkMode } = useTheme();
  const fillColor = darkMode ? "black" : "white";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768); // Check if device is mobile
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) {
      controls.start({
        rotate: [0, 360],
        transition: { duration: 6, ease: "linear", repeat: Infinity },
      });
    }
  };

  const handleMouseLeave = () => {
    controls.stop();
    controls.start({ rotate: 0, transition: { duration: 0.5, ease: "easeOut" } });
  };

  return (
    <div onClick={() => router.push("/")}>
      <motion.svg
        viewBox="0 0 152 146"
        className="w-[100px] sm:w-[162px] group cursor-pointer"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.g className="origin-center" style={{ transformOrigin: "50% 50%" }}>
          <path
            d="M67.8345 70.1007H44.3563C42.7355 70.1007 41.4228 71.3605 41.4228 72.9157C41.4228 74.471 42.7355 75.7307 44.3563 75.7307H67.8345C69.4553 75.7307 70.768 74.471 70.768 72.9157C70.768 71.3605 69.4553 70.1007 67.8345 70.1007Z"
            fill={fillColor}
          />
          <path
            d="M87.2785 99.5102C88.0864 100.857 89.8838 101.317 91.2875 100.542C92.6911 99.767 93.1708 98.0422 92.3629 96.6952L80.6238 77.1841C79.816 75.8372 78.0185 75.3769 76.6149 76.1522C75.2112 76.9274 74.7316 78.6522 75.5394 79.9991L87.2785 99.5102Z"
            fill={fillColor}
          />
          <path
            d="M92.3579 49.1361C93.1657 47.7892 92.6861 46.0692 91.2824 45.2892C89.8788 44.5139 88.0864 44.9742 87.2735 46.3212L75.5344 65.8323C74.7265 67.1792 75.2062 68.8992 76.6098 69.6792C78.0135 70.4593 79.8059 69.9942 80.6188 68.6472L92.3579 49.1361Z"
            fill={fillColor}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}
