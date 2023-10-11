"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import RingSvg from "./ring";

const limit = 200;
const num = 300 / 14;

function Test() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isFollow, setIsFollow] = useState(false);

  const handleMouseOver = (e) => {
    console.log(e.pageX, e.pageY, "page");
    console.log(window.innerWidth, window.innerHeight, "window");
    console.log(e.clientX, e.clientY, "client");
    if (isFollow) {
      setPoint({
        x: e.pageX - window.innerWidth / 2,
        y: e.pageY + 135 - window.innerHeight,
      });
    } else {
      setPoint({
        x: 0,
        y: 0,
      });
    }
  };
  //console.log(point);

  const handleMouseEnter = () => {
    setIsHover(true);
    setIsFollow(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  useEffect(() => {
    // if (!isHover) {
    if (
      point.x > limit ||
      point.x < -limit ||
      point.y > limit / 2 ||
      point.y < -limit
    )
      setIsFollow(false);
    // }
  }, [point.x, point.y]);

  return (
    <div
      className=" w-full h-full flex justify-center items-end bg-black pointer-events-none"
      onMouseMove={handleMouseOver}
    >
      <div
        className="m-5 p-10 pointer-events-auto"
        onMouseOver={handleMouseEnter}
      >
        <motion.div
          style={{
            transition: "all 0.2s ease",
          }}
          animate={{ x: point.x, y: point.y }}
          className=" rounded-full"
          onMouseOut={handleMouseLeave}
        >
          <RingSvg />
        </motion.div>
      </div>
      <div className="">
        <div className="w-[300px] h-[1px] absolute bottom-0 right-0 border-t-2 m-10 opacity-50"></div>
        <motion.div
          className="h-[1px] absolute bottom-0 right-0 border-t-2  m-10"
          animate={{ width: `${num * 1}px` }}
        ></motion.div>
      </div>
    </div>
  );
}

export default Test;
