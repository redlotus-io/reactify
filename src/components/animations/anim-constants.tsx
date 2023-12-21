import { Variants } from "framer-motion";

const fadeInFromTop: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const fadeInFromBottom: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const fadeInFromRight: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
};

const fadeInFromLeft: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.5, ease: "easeInOut" } },
};
const fadeInFromLeftDelayed: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0, transition: { delay: 1, duration: 0.5, ease: "easeInOut" } },
};

const pageItems = {
  fadeInFromTop,
  fadeInFromBottom,
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromLeftDelayed,
};

const mouseFadeInFromBottom: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
  exit: { opacity: 0, y: 80, transition: { duration: 0.4, ease: "easeInOut" } },
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

const smallLeftRotation: Variants = {
  whileHover: {
    scale: [1, 1.2],
    transition: {
      duration: 0.3,
      ease: "easeIn",
      times: [0, 1],
    },
  },
  whileTap: {
    rotate: [0, -60],
    transition: {
      duration: 0.07,
      ease: "easeIn",
      times: [0, 1],
    },
  },
};

const scaleAndFullRotation: Variants = {
  whileHover: {
    scale: [1, 1.1],
    rotate: [0, 360],
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

const popoverEffect: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 12,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    y: 14,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
const realButtonEffect: Variants = {
  // "hover:-translate-y-[0.15rem]",
  // "active:duration-[25] active:translate-y-[0.2rem]",
  whileHover: {
    scale: 1,
    translateY: -4,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
  whileTap: {
    translateY: 1,
    transition: {
      duration: 0.05,
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

const smallScaleXs: Variants = {
  whileHover: {
    scale: [1, 1.05],
    transition: {
      duration: 0.2,
      ease: "easeIn",
      // times: [0, 1],
    },
  },
  whileTap: { scale: 0.9 },
};

const subtleScale: Variants = {
  whileHover: {
    scale: [1, 1.05],
    // translateX: 10,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      // times: [0, 1],
    },
  },
  whileTap: { scale: 0.9 },
};

const button: Variants = {
  whileHover: {
    scale: [1, 1.05],
    translateY: -2,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  whileTap: {
    translateY: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};
const buttonMobile: Variants = {
  whileTap: {
    translateY: 3,
    scale: 0.6,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const buttonGhost: Variants = {
  whileHover: {
    scale: [1, 1.05],
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  whileTap: {
    scale: 1,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

const content: Variants = {
  initial: { opacity: 0.8 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0.6,
    transition: {
      duration: 0.3,
    },
  },
};

const accordionHeader = (open: boolean) => {
  if (open) {
    return {
      animate: {
        backgroundColor: "red",
      },
    } as Variants;
  }
  return {
    animate: {
      backgroundColor: "hotpink",
    },
  } as Variants;
};

const sideButton: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.01,
    },
  },
};

const mobile = (placement: string) =>
  ({
    initial: { x: placement === "right" ? "15rem" : "-14rem" },
    animate: {
      x: 0,
      transition: {
        type: "just",
        duration: 0.5,
      },
    },
    exit: {
      x: placement === "right" ? "16rem" : "-16rem",
      transition: {
        type: "just",
        duration: 0.4,
      },
      opacity: 1,
    },
  }) as Variants;

const header: Variants = {
  enter: (direction: number) => ({ x: `${30 * direction}%`, opacity: 0 }),
  middle: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({ x: `${-30 * direction}%`, opacity: 0 }),
};

const view: Variants = {
  enter: (direction: number) => ({
    x: `${10 * direction}%`,
    opacity: 0,
    transition: { opacity: { duration: 0.5 } },
  }),
  middle: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({ x: `${-10 * direction}%`, opacity: 0 }),
};

const calendar = {
  header,
  view,
};

const sidebar = {
  content,
  mobile,
  sideButton,
};

const tabSwitch: Variants = {
  hidden: {
    opacity: 0,
  },
  active: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const calendarEventCreation = { tabSwitch };

export const defaultTransition = { type: "ease", ease: "easeInOut", duration: 1 };

const navigationMenu: Variants = {
  initial: (open: number) => ({ translateX: open ? "-13rem" : "13rem", opacity: 0 }),
  animate: () => ({
    translateX: "0rem",
    opacity: 1,
  }),
  exit: (open: number) => ({ translateX: open ? "13rem" : "-13rem", opacity: 0 }),
};

export const animations = {
  smallLeftRotation,
  scaleAndRotation,
  scaleAndFullRotation,
  realButtonEffect,
  popoverEffect,
  subtleScale,
  rotate360,
  rotateInFromLeft,
  springInFromTop,
  overlay,
  modalEffect,
  makeBiggerAndRotateSlightly,
  smallScale,
  smallScaleXs,
  button,
  buttonMobile,
  buttonGhost,
  sidebar,
  accordionHeader,
  calendar,
  calendarEventCreation,
  pageItems,
  mouseFadeInFromBottom,
  navigationMenu,
};
