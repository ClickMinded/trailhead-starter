// @ts-check
import { defineConfig } from "astro/config";

// A static site: `npm run build` writes plain HTML, CSS and images to dist/, which Cloudflare serves as-is (see wrangler.jsonc).
// Once your site is live, change `site` to its address so canonical links point at it.
export default defineConfig({
  site: "https://trailhead-gear.workers.dev",
  output: "static",
});
