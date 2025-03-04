import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/twcommunity/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server: {
    proxy: {
      '/search': {
        target: 'https://172.31.34.158:3000',
        changeOrigin: true,
        secure: false,
      },
    },
  }
});