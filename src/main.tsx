import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Router } from "routes";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <Router />
    </StrictMode>
  </BrowserRouter>
);
