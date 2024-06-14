import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        ...generateDynamicRemotes(),
        // sharedComp1: "http://localhost:5173/dist/assets/remote1.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});

function generateDynamicRemotes() {
  const numberOfRemotes = 4; // Adjust this number based on your requirement
  const remotes: any = {};

  for (let i = 1; i <= numberOfRemotes; i++) {
    remotes[
      `sharedComp${i}`
    ] = `http://localhost:5173/dist/assets/remote${i}.js`;
  }

  return remotes;
}
