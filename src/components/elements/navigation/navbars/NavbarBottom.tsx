import { HiChartBar, HiHome } from "react-icons/all";
import { Link } from "react-router-dom";

import { ScaleAnim } from "components/elements";

export const NavbarBottom = () => {
  return (
    <div className="flex z-50 flex-row justify-around w-full">
      <Link to="/">
        <ScaleAnim>
          <HiHome className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </ScaleAnim>
      </Link>
      <Link to="/stats">
        <ScaleAnim>
          <HiChartBar className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800" />
        </ScaleAnim>
      </Link>
    </div>
  );
};
