import { useThemeUtils, useRegisterPWA } from "@redlotus/ui";
import { Route, Routes } from "react-router-dom";

import { routes } from ".";

export const Router = () => {
  useThemeUtils();
  useRegisterPWA();

  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.to} element={route.element} />
      ))}
    </Routes>
  );
};
