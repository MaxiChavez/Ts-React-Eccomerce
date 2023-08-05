import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { minifyHtml } from "vite-plugin-html";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react(), tailwindcss, autoprefixer],
  resolve: {
    alias: {
      // Añade cualquier alias que necesites aquí, por ejemplo para importar módulos desde 'src'
      "@": path.resolve(__dirname, "src"),
    },
  },
});
