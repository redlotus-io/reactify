import { AboutPage, HomePage } from "@/pages";
import { IRegularRouter } from "@/types";

export const definedRoutes = {
  home: "/",
  about: "/about",
};

export const routes: IRegularRouter[] = [
  {
    to: definedRoutes.about,
    element: <AboutPage />,
  },
  {
    to: definedRoutes.home,
    element: <HomePage />,
  },
];
