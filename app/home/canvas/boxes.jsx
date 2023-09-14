"use client";
import { Instances } from "@react-three/drei";
import { useState, memo } from "react";
import React from "react";
import { useShape } from "./positions";
import BoxInstance from "./boxInstance";

function LetterH({ color, emissive, intensity, ...props }) {
  const { hShape } = useShape();
  const [hoverPosition, setHoverPosition] = useState(null);

  return (
    <group {...props}>
      <Instances limit={hShape.length * 4} range={hShape.length * 4}>
        <boxGeometry />

        <meshStandardMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={intensity}
        />

        <group>
          {hShape.map((props, key) => (
            <BoxInstance
              key={key}
              box={props}
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
