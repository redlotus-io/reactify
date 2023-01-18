import { useThemeUtils, useRegisterPWA } from "@redlotus/ui";
import { Route, Routes } from "react-router-dom";

import { ErrorPage } from "pages";

import { routesWithSidebar, routes } from ".";

export const Router = () => {
  useThemeUtils();
  useRegisterPWA();

  return (
    <Routes>
      {routesWithSidebar.map(route => (
        <Route path={route.to} element={route.element} />
      ))}
      {routes.map(route => (
        <Route key={route.to} path={route.to} element={route.element} />
      ))}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
