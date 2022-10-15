import { SidebarProvider } from "@redlotus/ui";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Router } from "routes";
import "./index.css";

import "@redlotus/ui/dist/style.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
);
