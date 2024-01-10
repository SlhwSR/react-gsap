import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@components": resolve(__dirname, "./src/components"),
      "@assets": resolve(__dirname, "./src/assets"),
      "@service": resolve(__dirname, "./src/service"),
    },
  },
  plugins: [react()],
});
