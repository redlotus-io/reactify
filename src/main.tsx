import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setDefaultOptions } from "date-fns";
import { et } from "date-fns/locale";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import { Router } from "routes";

setDefaultOptions({ locale: et });

const root = createRoot(document.getElementById("root") as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
