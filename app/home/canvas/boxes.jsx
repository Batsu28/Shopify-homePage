"use client";
import { Instances } from "@react-three/drei";
import { useState, memo } from "react";
import React from "react";
import { useShape } from "./positions";
import BoxInstance from "./boxInstance";

function LetterH({ position }) {
  const { hShape } = useShape();
  const [hoverPosition, setHoverPosition] = useState(null);

  const pointerOver = (e, position) => {
    e.stopPropagation();
    setHoverPosition(position);
  };

  return (
    <group>
      <Instances
        limit={hShape.length * 4}
        range={hShape.length * 4}
        position={position}
      >
        <boxGeometry />

        <meshStandardMaterial emissive={"purple"} emissiveIntensity={0.2} />

        <group>
          {hShape.map((props, key) => (
            <BoxInstance
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
