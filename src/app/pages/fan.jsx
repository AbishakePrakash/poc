import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function FanAnimation() {
  const [rotation, setRotation] = useState(0);
  const isDragging = useRef(false);
  const center = useRef(null);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current && center.current) {
      const rect = center.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle =
        Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
      setRotation(angle);
    }
  };

  return (
    <div
      className="flex justify-center items-center  bg-gray-900"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <motion.div
        ref={center}
        className="relative w-40 h-40 flex justify-center items-center cursor-grab"
        style={{ rotate: `${rotation}deg` }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute w-40 h-40 flex justify-center items-center">
          <div className="w-full h-full bg-blue-500 rounded-full"></div>
          <div className="absolute w-5 h-5 bg-gray-800 rounded-full"></div>
          <div className="absolute w-32 h-2 bg-white rotate-0"></div>
          <div className="absolute w-32 h-2 bg-white rotate-60"></div>
          <div className="absolute w-32 h-2 bg-white rotate-120"></div>
        </div>
      </motion.div>
    </div>
  );
}
