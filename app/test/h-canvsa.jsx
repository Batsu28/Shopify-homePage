"use client";

import Boxes from "@/app/home/canvas/boxes";
import { CameraControls, OrbitControls, Stars, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LetterH from "./h-shape";

const HCanvas = () => {
	return (
		<Canvas
			camera={{ position: [-8, 9, -4] }}
			dpr={1}>
			<ambientLight intensity={0.85} />
			<directionalLight
				position={[-10, -10, -10]}
				intensity={1}
			/>
			<LetterH position={[-4, -1, 4]} />
			<Stats />
			<OrbitControls />
			{/* <CameraControls /> */}
		</Canvas>
	);
};

export default HCanvas;
