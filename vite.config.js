import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({ plugins: [react(), tailwindcss()]   ,
    json: {
    stringify: true, // دعم استيراد JSON
  },});
