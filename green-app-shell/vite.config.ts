import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "blue-app-shell",
      remotes: {
        sharedComp1: "http://localhost:5173/dist/assets/remote1.js",
        sharedComp2: "http://localhost:5175/dist/assets/remote2.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
