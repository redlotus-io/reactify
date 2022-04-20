import { motion } from "framer-motion";

interface ScaleAnimProps {
  children: React.ReactNode;
  scaleVariant?: keyof typeof scaleVariants;
}
const scaleVariants = {
  sm: [1, 1.1, 1],
  md: [1, 1.3, 1],
  lg: [1, 1.5, 1],
};

export const ScaleAnim = ({ children, scaleVariant = "sm" }: ScaleAnimProps) => {
  return (
    <motion.div
      whileHover={{
        scale: scaleVariants[scaleVariant],
      }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 1,
        ease: "easeIn",
        times: [0, 0.2, 0.7],
      }}
    >
      {children}
    </motion.div>
  );
};
