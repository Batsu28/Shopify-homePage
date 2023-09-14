"use client";

import { useEffect, useState } from "react";

const Backround = ({ style, num }) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(window.innerWidth / 5);
  }, []);

  const myArray = new Array(num).fill(0);

  return (
    <div className={`w-full flex flex-wrap ${style}`}>
      {myArray.map((_, i) => (
        <div
          key={i}
          className={`w-1/5 border-[0.3px] border-white bg-transparent`}
          style={{ height: size }}
        ></div>
      ))}
    </div>
  );
};

export default Backround;
