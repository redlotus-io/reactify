import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from "virtual:pwa-register/react";

import { routes } from ".";

export const Router = () => {
  const root = document.documentElement;
  useEffect(() => {
    if (localStorage.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const intervalMS = 60 * 60 * 1000;

  useRegisterSW({
    onRegistered(r) {
      r &&
        setInterval(() => {
          r.update();
        }, intervalMS);
    },
  });

  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.to} element={route.element} />
      ))}
    </Routes>
  );
};
