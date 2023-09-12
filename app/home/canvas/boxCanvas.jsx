"use client";

import Boxes from "@/app/home/canvas/boxes";
import { CameraControls, OrbitControls, Stars, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

const BoxCanvas = () => {
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
      <Suspense fallback={null}>
        <Boxes position={[-5, 14, -15]} />
        <Boxes position={[7, 8, -1]} />
      </Suspense>
      <Stats />
      {/* <OrbitControls /> */}
      {/* <CameraControls /> */}
    </Canvas>
  );
};

export default BoxCanvas;
