import { motion } from "framer-motion";

interface ScaleAndRotationAnimProps {
  children: React.ReactNode;
  scaleVariant?: keyof typeof scaleVariants;
}
interface Rotate360AnimProps {
  children: React.ReactNode;
}

const scaleVariants = {
  sm: [1, 1.1, 1],
  md: [1, 1.3, 1],
  lg: [1, 1.5, 1],
};

export const ScaleAndRotationAnim = ({
  children,
  scaleVariant = "sm",
}: ScaleAndRotationAnimProps) => {
  return (
    <motion.div
      whileHover={{
        scale: scaleVariants[scaleVariant],
        rotate: [0, 0, 270],
      }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 1,
        ease: "easeIn",
        times: [0, 0.2, 0.5],
      }}
    >
      {children}
    </motion.div>
  );
};

export const Rotate360Anim = ({ children }: Rotate360AnimProps) => {
  return (
    <motion.div
      whileHover={{
        rotate: [0, 0, 360],
      }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 1,
        ease: "easeIn",
        times: [0, 0.2, 0.5],
      }}
    >
      {children}
    </motion.div>
  );
};
