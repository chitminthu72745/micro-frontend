import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app-one",
      filename: "remote1.js",
      // Modules to expose
      exposes: {
        "./RemoteApp1": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    // modulePreload: false,
    target: "esnext",
    minify: true,
    // cssCodeSplit: false,
  },
});
