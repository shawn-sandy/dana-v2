import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: "Astro Kit | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubData: post.data.pubDate,
      description: post.data.description,
      link: `post/{post.slug}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
