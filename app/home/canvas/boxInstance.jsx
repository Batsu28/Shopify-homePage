import { Instance } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const arr = [0, 1, 2, 3];
const boxSize = 0.2;

const calculateAnimateValue = (check) => {
  const valueMappings = {
    true: 0,
    [check <= 3]: 0.3,
    [check <= 2]: 0.6,
    [check <= 0]: 0.9,
  };

  return valueMappings[true];
};

const BoxInstance = ({ box, hoverPosition, setHoverPosition }) => {
  const ref = useRef();

  const [animate, setAnimate] = useState(0);

  const pointerOver = (e, position) => {
    e.stopPropagation();
    setHoverPosition(position);
  };

  const pointerLeave = () => {
    setHoverPosition(null);
    setAnimate(0);
  };

  useFrame(() => {
    if (!hoverPosition) {
      setAnimate(0);
      return;
    }

    const [x, _, z] = hoverPosition;
    const check = Math.abs(x - box.position[0]) + Math.abs(z - box.position[2]);

    const animateValue = calculateAnimateValue(check);
    setAnimate(animateValue);
  });

  const instances = useMemo(() => {
    return arr.map((_, index) => (
      <Instance
        key={index}
        scale={0.9}
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
