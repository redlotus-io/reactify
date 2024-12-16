import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { IRegularRouter } from "../types/types";

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
