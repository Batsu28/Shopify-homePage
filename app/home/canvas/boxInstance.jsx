import { Instance } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useShape } from "./positions";

const arr = [0, 1, 2, 3];
const boxSize = 0.2;

const BoxInstance = ({ box, pointerOver, hoverPosition, setHoverPosition }) => {
  const ref = useRef();
  const { hShape } = useShape();
  const [animate, setAnimate] = useState(0);

  const pointerLeave = () => {
    hShape.forEach((box) => {
      box.value = 0;
    });
    setHoverPosition(null);
    setAnimate(0);
  };

  useFrame(() => {
    let value = 0;

    if (!hoverPosition) {
      value = 0;
      setAnimate(value);
      return;
    }
    const [x, _, z] = hoverPosition;

    const check = Math.abs(x - box.position[0]) + Math.abs(z - box.position[2]);

    switch (true) {
      case check <= 0:
        value = 0.9;
        break;
      case check <= 2:
        value = 0.6;
        break;
      case check <= 3:
        value = 0.3;
        break;
      default:
        value = 0;
        break;
    }
    setAnimate(value);
  });

  const instances = useMemo(() => {
    return arr.map((_, index) => (
      <Instance
        key={index}
        scale={0.9``}
        position={[0, index, 0]}
        color={"royalBlue"}
      />
    ));
  }, [box]);

  return (
    <motion.group
      onPointerEnter={(e) => pointerOver(e, box.position)}
      onPointerLeave={pointerLeave}
      position={box.position}
      animate={{ y: animate }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      ref={ref}
    >
      {instances}
    </motion.group>
  );
};

export default BoxInstance;
