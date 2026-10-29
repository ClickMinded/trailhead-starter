import rss from "@astrojs/rss";
import { getImage } from "astro:assets";
import { getCollection } from "astro:content";

// The blog's RSS feed at /rss.xml: newest post first. Newsletter tools and feed readers find new posts here.
export async function GET(context) {
  const posts = (await getCollection("journal")).sort((a, b) => b.data.publishedAt - a.data.publishedAt);
  const items = await Promise.all(
    posts.map(async (post) => {
      const cover = await getImage({ src: post.data.cover, width: 1200, format: "jpg" });
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishedAt,
        link: `/journal/${post.id}/`,
        customData: `<media:content url="${new URL(cover.src, context.site).href}" medium="image" />`,
      };
    }),
  );
  return rss({
    title: "Trailhead Gear Co. Trail Journal",
    description: "Trail guides and gear advice for new hikers from Trailhead Gear Co.",
    site: context.site,
    items,
    xmlns: { media: "http://search.yahoo.com/mrss/" },
  });
}
