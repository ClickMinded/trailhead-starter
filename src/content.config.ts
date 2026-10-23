import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Products and journal posts are plain Markdown files. Add a file, and a new page appears.
const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      price: z.number(),
      tagline: z.string(),
      image: image(),
      imageAlt: z.string(),
      category: z.enum(["Footwear", "Packs", "Layers", "Camp", "Light"]),
      specs: z.array(z.object({ label: z.string(), value: z.string() })),
      order: z.number(),
    }),
});

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      readingTime: z.string(),
      cover: image(),
      coverAlt: z.string(),
    }),
});

export const collections = { products, journal };
