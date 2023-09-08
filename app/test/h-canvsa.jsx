"use client";

import Boxes from "@/app/home/canvas/boxes";
import { CameraControls, OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LetterH from "./h-shape";

const HCanvas = () => {
	return (
		<Canvas camera={{ position: [20, 10, 10] }}>
			<ambientLight intensity={0.85} />
			<directionalLight
				position={[-10, -10, -10]}
				intensity={1}
			/>
			<LetterH />
			<Stars />

			<OrbitControls />
			{/* <CameraControls /> */}
		</Canvas>
	);
};

export default HCanvas;
