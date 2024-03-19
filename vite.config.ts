// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            NAVER_MAP_KEY: env.VITE_NAVER_MAP_CLIENT_ID,
          },
        },
      }),
    ],
    server: {
      port: 3000
    }
  };
});