import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "/", // ✅ keep this

  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"]
    })
  ],

  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false
      }
    }
  }
});