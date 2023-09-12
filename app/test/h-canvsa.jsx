"use client";

import { CameraControls, OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LetterH from "./h-shape";

const HCanvas = () => {
  return (
    <Canvas camera={{ position: [25, 25, 20], fov: 55 }} dpr={1}>
      <ambientLight intensity={0.85} />
      <pointLight
        color={"aqua"}
        intensity={500}
        position={[-5.5, 18, 8.5]}
        decay={1}
      />

      <spotLight
        color={"purple"}
        intensity={400}
        position={[20, 20, -15]}
        decay={0.4}
      />
      <LetterH position={[-5, 14, -15]} scale={1} />
      <Stats />
      {/* <OrbitControls /> */}
      {/* <CameraControls /> */}
    </Canvas>
  );
};

export default HCanvas;
