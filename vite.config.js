import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          drei: ["@react-three/drei"],
          fiber: ["@react-three/fiber"],
          postprocessing: ["postprocessing", "@react-three/postprocessing"],
        },
      },
    },
  },
});
