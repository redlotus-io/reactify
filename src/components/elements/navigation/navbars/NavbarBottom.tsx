import { HiChartBar, HiHome } from "react-icons/all";
import { Link } from "react-router-dom";

import { animations, AnimationWrapper } from "components";

export const NavbarBottom = () => {
  return (
    <div className="flex fixed bottom-0 z-40 items-center py-2 m-2 w-[95%] h-fit bg-slate-50 rounded-md shadow-2xl">
      <div className="flex flex-row justify-around w-full">
        <Link to="/">
          <AnimationWrapper
            variants={animations.smallScale}
            animateOnAllScreens
            keyIndex="nb-home-icon"
          >
            <HiHome className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
          </AnimationWrapper>
        </Link>
        <Link to="/stats">
          <AnimationWrapper
            variants={animations.smallScale}
            animateOnAllScreens
            keyIndex="nb-chart-icon"
          >
            <HiChartBar className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
          </AnimationWrapper>
        </Link>
      </div>
    </div>
  );
};
