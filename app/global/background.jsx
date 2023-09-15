"use client";

import { useEffect, useState } from "react";

const Backround = ({ style, num }) => {
  const [size, setSize] = useState(0);

  useEffect(() => {
    setSize(window.innerWidth / 5);
  }, []);

  const myArray = new Array(num).fill(0);

  return (
    <div className={`w-full h-full ${style}`}>
      <div className={`w-full flex flex-wrap `}>
        {myArray.map((_, i) =>
          i < 5 ? (
            <div
              key={i}
              className={`w-1/5  border-[0.1px] border-white border-t-0 bg-transparent`}
              style={{ height: size }}
            />
          ) : (
            <div
              key={i}
              className={`w-1/5 border-[0.1px] border-white bg-transparent`}
              style={{ height: size }}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Backround;
