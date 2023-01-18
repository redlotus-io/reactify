import clsx from "clsx";
import { HiArchive, HiHome } from "react-icons/hi";

import { AboutPage, HomePage } from "pages";
import { ISidebarRouter, IRegularRouter } from "types";

const smallIconCss = "h-8 w-8 fill-inherit";
const bigIconCss = "mr-3 h-8 w-8 fill-inherit";

export const definedRoutes = {
  home: "/",
  about: "/about",
  random: "/random",
};

export const routesWithSidebar: ISidebarRouter[] = [
  {
    to: definedRoutes.home,
    routeName: "Home",
    element: <HomePage />,
    smallIcon: <HiHome className={clsx(smallIconCss)} />,
    bigIcon: <HiHome className={clsx(bigIconCss)} />,
  },
  {
    to: definedRoutes.about,
    routeName: "About",
    element: <AboutPage />,
    smallIcon: <HiArchive className={clsx(smallIconCss)} />,
    bigIcon: <HiArchive className={clsx(bigIconCss)} />,
  },
];

export const routes: IRegularRouter[] = [
  {
    to: definedRoutes.random,
    element: <AboutPage />,
  },
];
