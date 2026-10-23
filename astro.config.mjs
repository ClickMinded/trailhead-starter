// @ts-check
import { defineConfig } from "astro/config";

// A static site: `npm run build` writes plain HTML, CSS and images to dist/, which Cloudflare Pages serves as-is.
export default defineConfig({
  site: "https://trailhead-gear.pages.dev",
  output: "static",
});
