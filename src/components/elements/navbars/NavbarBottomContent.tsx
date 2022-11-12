import { animations, AnimationWrapper } from "@redlotus/ui";
import { HiChartBar, HiHome } from "react-icons/all";
import { Link } from "react-router-dom";

export const NavbarBottomContent = () => {
  return (
    <>
      <Link to="/">
        <AnimationWrapper variants={animations.smallScale} key="nb-home-icon">
          <HiHome className="h-14 w-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </AnimationWrapper>
      </Link>
      <Link to="/stats">
        <AnimationWrapper variants={animations.smallScale} key="nb-chart-icon">
          <HiChartBar className="h-14 w-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </AnimationWrapper>
      </Link>
    </>
  );
};
