import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "robots.txt",
        "favicon.ico",
        "apple-touch-icon.png",
        "android-chrome-192x192",
        "android-chrome-512x512",
      ],
      manifest: {
        start_url: ".",
        name: "Reactify",
        short_name: "Reactify",
        description: "Boilerplate to get started fast",
        theme_color: "#282c31",
        background_color: "#282c31",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  publicDir: "public",
  server: {
    host: true,
    port: 3000,
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
});
