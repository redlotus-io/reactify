import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), VitePWA(), tsconfigPaths()],
  server: {
    host: true,
  },
  publicDir: "assets",
});
