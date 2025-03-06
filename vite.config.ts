import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/twcommunity/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173, 
    strictPort: true,
    proxy: {
      "/search": {
        target: "http://twc-community-elastic-env.eba-nquntjkk.ap-northeast-2.elasticbeanstalk.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
