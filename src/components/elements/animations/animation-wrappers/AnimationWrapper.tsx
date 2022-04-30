import { HTMLMotionProps, motion } from "framer-motion";

import { useIsMobile } from "hooks";

interface Props {
  children?: React.ReactNode;
  /**
   * @description Set true if you want to use animation on all screens
   * @default false
   */
  animateOnAllScreens?: boolean;
  keyIndex: string;
}

type IProps = Props & HTMLMotionProps<"div">;

export const AnimationWrapper = ({
  children,
  animateOnAllScreens = false,
  variants,
  keyIndex,
  ...props
}: IProps) => {
  const { isMobile } = useIsMobile();

  let animations;
  // when settings are overridden (we want animations to be applied on all screens)
  if (animateOnAllScreens) {
    animations = variants;
    // when user is on mobile
  } else if (isMobile) {
    animations = {};
    // when user is not on mobile
  } else if (!isMobile) {
    animations = variants;
  }

  return (
    <motion.div
      key={keyIndex}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="whileHover"
      whileTap="whileTap"
      variants={animations}
      {...props}
    >
      {children}
    </motion.div>
  );
};
