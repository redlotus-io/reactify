/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      srcDir: "src",
      filename: "sw.ts",
      strategies: "injectManifest",
      registerType: "autoUpdate",
      workbox: {
        sourcemap: true,
      },
      includeAssets: ["favicon.svg", "robots.txt"],
      // includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      injectManifest: {},
      devOptions: {
        type: "module",
        enabled: true,
        /* other options */
      },
      manifest: {
        dir: "ltr",
        start_url: "/",
        lang: "English",
        name: "React Boilerplate",
        short_name: "React Boilerplate",
        description: "Boilerplate to get started fast",
        theme_color: "#282c31",
        background_color: "#282c31",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/android-chrome-192x192",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/android-chrome-512x512",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/android-chrome-512x512",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
  },
  publicDir: "public",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTests.ts",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
