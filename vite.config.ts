import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  // Local dev serves from /; production is published beneath the repository path.
  base: process.env.NODE_ENV === "production" ? "/devops-field-notes/" : "/",
  plugins: [vue()],
});
