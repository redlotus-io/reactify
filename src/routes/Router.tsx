import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from "virtual:pwa-register/react";

import { ErrorPage } from "pages";

import { routesWithSidebar, routes } from ".";

const useRegisterPWA = () => {
  const intervalMS = 60 * 60 * 1000; // 1 hour

  useRegisterSW({
    onRegistered(r: any) {
      r &&
        setInterval(() => {
          r.update();
        }, intervalMS);
    },
  });
};

const useThemeUtils = () => {
  const root = document.documentElement;

  useEffect(() => {
    if (localStorage.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

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
