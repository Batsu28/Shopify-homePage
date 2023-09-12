"use client";
import { Edges, Instances, Resize } from "@react-three/drei";
import { useState, memo } from "react";
import React from "react";
import { useShape } from "./h-position";
import HoverBox from "./hoverbox";

function LetterH({ ...props }) {
  const { hShape } = useShape();
  const [hoverPosition, setHoverPosition] = useState(null);

  const pointerOver = (e, position) => {
    e.stopPropagation();
    setHoverPosition(position);
  };

  return (
    <group {...props}>
      <Instances limit={hShape.length * 4} range={hShape.length * 4}>
        <boxGeometry />
        <meshStandardMaterial emissive={"blue"} color={"blue"} />

        <group>
          {hShape.map((props, key) => (
            <HoverBox
              key={key}
              box={props}
              pointerOver={pointerOver}
              hoverPosition={hoverPosition}
              setHoverPosition={setHoverPosition}
            />
          ))}
        </group>
      </Instances>
    </group>
  );
}

export default memo(LetterH);
