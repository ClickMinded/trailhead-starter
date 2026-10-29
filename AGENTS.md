# Trailhead Gear Co. website

This folder is our marketing website. Read this before every task.

## How the site works
- It's an Astro site. Pages live in `src/pages/`, shared pieces in `src/components/`, and the look in `src/styles/global.css`.
- Products are Markdown files in `src/content/products/`. Journal posts are Markdown files in `src/content/journal/`. Add a file and a new page appears. New posts also show up in the blog's RSS feed at `/rss.xml` (`src/pages/rss.xml.js`).
- Photos live in `src/assets/images/`. Astro turns them into fast, resized WebP images when the site builds.

## Audience
Weekend hikers and first-time campers. Most of them are buying their first real piece of gear.

## Brand voice
- Friendly and practical, like a staff member at the trailhead.
- Short sentences. Specific details over adjectives.
- Talk about the trip, not the specs.

## Words we never use
- "Epic", "game-changer", "unleash"
- "Best in class"
- Exclamation marks in headlines

## Don't touch
- Prices on product pages unless I ask for a price change.
- The design tokens at the top of `src/styles/global.css` (colors and fonts) unless I ask for a design change.

## How to check your work
Run `npm run build` after every change. It must finish without errors before you're done.
