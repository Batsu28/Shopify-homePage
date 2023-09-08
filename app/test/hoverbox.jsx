import { Instance } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useShape } from "./h-position";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const arr = [0, 1, 2, 3];
const boxSize = 0.2;

const HoverBox = ({ box, pointerOver }) => {
	const ref = useRef();
	const { hShape } = useShape();

	const pointerLeave = () => {
		hShape.forEach((box) => {
			box.value = 0;
		});
	};

	useFrame(() => {
		const check = hShape.some((info) => {
			const [x, _, z] = info.position;
			return (
				Math.abs(x - box.position[0]) <= 2 && Math.abs(z - box.position[2]) <= 2
			);
		});
		if (check) {
			ref.current.position.y = box.value;
		} else {
			ref.current.position.y = 0;
		}
	});

	return (
		<motion.group
			onPointerEnter={(e) => pointerOver(e, position)}
			onPointerLeave={pointerLeave}
			position={box.position}
			whileHover={{ y: 0.9 }}
			transition={{ duration: 0.3 }}
			ref={ref}
			pointerEvents="all" // Add this line
		>
			{arr.map((_, index) => (
				<Instance
					args={[boxSize, boxSize, boxSize]}
					scale={1}
					color={"royalBlue"}
					position={[0, index, 0]}
					key={index}
				/>
			))}
		</motion.group>
	);
};

export default HoverBox;
