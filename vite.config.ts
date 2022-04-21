import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
    tsconfigPaths(),
    eslintPlugin({ include: "src/**/*.{js,jsx,ts,tsx}" }),
  ],
  publicDir: "assets",
});
// ./src/**/*.{js,jsx,ts,tsx}
