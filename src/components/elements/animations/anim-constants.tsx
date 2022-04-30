import { Variants } from "framer-motion";

const flyInFromTop: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const flyInFromBottom: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const flyInFromRight: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const flyInFromLeft: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

export const flyIn = {
  flyInFromTop,
  flyInFromBottom,
  flyInFromLeft,
  flyInFromRight,
};

const scaleAndRotation: Variants = {
  whileHover: {
    scale: [1, 1.1],
    rotate: [0, 270],
    transition: {
      duration: 0.3,
      ease: "easeIn",
      times: [0, 1],
    },
  },
  whileTap: { scale: 0.8 },
};
const smallScale: Variants = {
  whileHover: {
    scale: [1, 1.1],
    transition: {
      duration: 0.3,
      ease: "easeIn",
      times: [0, 1],
    },
  },
  whileTap: { scale: 0.8 },
};
const rotate360: Variants = {
  whileHover: {
    rotate: [0, 360],
    transition: {
      duration: 0.4,
      ease: "easeIn",
      times: [0, 0.2, 0.5],
    },
  },
  whileTap: { scale: 0.8 },
};

const rotateInFromLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 360,
    transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" },
  },
};

const springInFromTop: Variants = {
  initial: { y: "-50vh", opacity: 0 },
  animate: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.1,
    },
  },
};
const overlayTransition = {
  duration: 0.2,
  ease: "easeIn",
};
const overlay: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.5, transition: overlayTransition },
  exit: {
    opacity: 0,
    transition: overlayTransition,
  },
};

const modalEffect: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const makeBiggerAndRotateSlightly: Variants = {
  whileHover: {
    rotate: [0, -2],
    scale: [1, 1.1],
    transition: { duration: 0.1 },
  },
};

export const animations = {
  scaleAndRotation,
  rotate360,
  rotateInFromLeft,
  springInFromTop,
  overlay,
  modalEffect,
  makeBiggerAndRotateSlightly,
  smallScale,
};
