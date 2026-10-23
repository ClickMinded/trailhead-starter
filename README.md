# Trailhead Gear Co. starter site

The starter website for **AI Agents for Marketers**, a free course by [ClickMinded](https://www.clickminded.com). You'll make it yours, change it with an AI agent, and put it live, without a CMS and without waiting on a developer.

It's a small, fast, static site built with [Astro](https://astro.build): every page, product and blog post is a plain file in this folder, so an agent like Codex or Claude Code can read and change all of it.

## Get your own copy

1. Click **Use this template** → **Create a new repository** on GitHub.
2. Open the new repository's folder in Codex (or Claude Code) and ask it to run `npm install` and `npm run build`.
3. Ask it to start the site with `npm run dev`, then open the address it shows you.

## Put it live on Cloudflare

1. In Cloudflare, go to **Workers & Pages** → **Create application** → **Continue with GitHub**, and pick your repository.
2. Keep the settings Cloudflare suggests. `wrangler.jsonc` already tells it to build the site before every deploy, and where the built site is.
3. Save and deploy. Your site gets a `workers.dev` address, and from now on every change merged into `main` goes live on its own.

## What's where

| Folder | What it holds |
| --- | --- |
| `src/pages/` | One file per page: home, shop, journal, about |
| `src/content/products/` | One Markdown file per product |
| `src/content/journal/` | One Markdown file per blog post |
| `src/assets/images/` | Photos (turned into optimized WebP at build time) |
| `src/styles/global.css` | Colors, fonts and shared styles |
| `AGENTS.md` | Instructions your agent reads before every task |

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Installs what the site needs (once) |
| `npm run dev` | Runs the site on your computer while you work |
| `npm run build` | Builds the finished site into `dist/` and checks for errors |

Photos in this template were generated for the course. Replace them with your own.
