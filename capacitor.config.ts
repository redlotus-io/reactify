import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.reactify.vite",
  appName: "reactify-vite",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
