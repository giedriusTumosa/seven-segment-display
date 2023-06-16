import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["scripts/main.ts"],
  target: "es2020",
  splitting: false,
  sourcemap: true,
  clean: true,
  format: "esm",
  outDir: "./.dist",
});
