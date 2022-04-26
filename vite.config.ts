/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// @ts-ignore
import manifest from "./src/manifest.json";

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
      injectManifest: {
        swSrc: "./src/sw.ts",
        swDest: "./dist/sw.ts",
      },
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "favicon.ico",
        "apple-touch-icon.png",
        "android-chrome-192x192",
        "android-chrome-512x512",
      ],
      // injectManifest: {},
      devOptions: {
        type: "module",
        enabled: true,
        /* other options */
      },
      manifest: manifest,
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
