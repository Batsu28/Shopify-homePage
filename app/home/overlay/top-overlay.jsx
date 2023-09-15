"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function TopOverlay() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handlePointerMove = ({ clientX, clientY }) => {
    if (isActive) {
      setPoint({
        x: window.innerWidth - clientX - 125,
        y: clientY - 200,
      });
    } else {
      setPoint({ x: 0, y: 0 });
    }
  };

  const handleMouseOver = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPoint({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full flex justify-start pt-4 pr-4 lg:justify-end lg:pt-10 lg:pr-10"
      onMouseMove={handlePointerMove}
    >
      <motion.div
        style={{
          transition: "all 0.2s ease",
        }}
        animate={{ x: -point.x, y: point.y }}
        className="pointer-events-auto rounded-full"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={"/rotating-img.webp"}
          alt={"rotating image"}
          className="animate-spin-slow w-[100px] lg:w-[200px]"
          width={100}
          height={100}
        />
      </motion.div>
    </div>
  );
}

export default TopOverlay;
