import { AboutPage, HomePage, LoginPage, RegisterPage } from "@/pages";
import { IRegularRouter } from "@/types";

export const definedRoutes = {
  home: "/",
  about: "/about",
  login: "/login",
  register: "/register",
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
  {
    to: definedRoutes.login,
    element: <LoginPage />,
  },
  {
    to: definedRoutes.register,
    element: <RegisterPage />,
  },
];
