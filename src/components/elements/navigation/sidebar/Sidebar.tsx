import { AnimatePresence } from "framer-motion";

import clsx from "clsx";
import { HiChartBar, HiHome, HiX } from "react-icons/all";

import { animations, AnimationWrapper, SidebarLink } from "components";
import { useSidebar } from "context";

interface Props {
  placeMent: "left" | "right";
}

export const Sidebar = ({ placeMent = "right" }: Props) => {
  const { isSidebarOpen, setisSidebarOpen } = useSidebar();

  return (
    <AnimatePresence initial exitBeforeEnter>
      {isSidebarOpen && (
        <>
          <AnimationWrapper
            keyIndex="app-sidebar-content"
            animateOnAllScreens
            initial={{ x: placeMent === "right" ? "100vw" : "-100vw", opacity: 0 }}
            animate={{
              x: "0",
              opacity: 1,
              transition: {
                duration: 3,
                type: "spring",
                damping: 30,
                stiffness: 300,
              },
            }}
            exit={{
              x: placeMent === "right" ? "100vw" : "-100vw",
              opacity: 0,
            }}
            className={clsx(
              "flex fixed top-0 z-[900] flex-col w-64 h-full bg-white",
              placeMent === "right" ? "right-0" : "left-0"
            )}
          >
            {/* header */}
            <div
              className={clsx("flex p-3", placeMent === "right" ? "justify-end" : "justify-end")}
            >
              <button onClick={() => setisSidebarOpen(false)}>
                <AnimationWrapper keyIndex="sidebar-x-icon" variants={animations.scaleAndRotation}>
                  <HiX className="w-12 h-12 fill-slate-700 hover:fill-slate-800" />
                </AnimationWrapper>
              </button>
            </div>
            {/* body */}
            <div className="h-full">
              <SidebarLink to="/">
                <HiHome className="sidebar-link" />
                <p className="text-xl font-medium">Home</p>
              </SidebarLink>

              <SidebarLink to="/stats">
                <HiChartBar className="sidebar-link" />
                <p className="text-xl font-medium">Stats</p>
              </SidebarLink>
            </div>
          </AnimationWrapper>

          <AnimationWrapper
            keyIndex="app-sidebar-overlay"
            id="overlay"
            animateOnAllScreens
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.4, ease: "linear" }}
            exit={{ opacity: 0 }}
            onClick={() => setisSidebarOpen(false)}
            className="absolute inset-0 z-50 w-full h-full bg-gray-500"
          />
        </>
      )}
    </AnimatePresence>
  );
};
