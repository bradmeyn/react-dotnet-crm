import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/lib/components"),
      "@services": path.resolve(__dirname, "./src/lib/services"),
    },
  },
});
