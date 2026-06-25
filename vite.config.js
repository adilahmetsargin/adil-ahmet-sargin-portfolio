import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        saas: resolve(__dirname, "saas/index.html"),
        automotive: resolve(__dirname, "automotive/index.html"),
        fintech: resolve(__dirname, "fintech/index.html"),
      },
    },
  },
});
