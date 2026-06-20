import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/articles";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.supermedia.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/superscan`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/thinking`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/results`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/clients`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    // Resources hub
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // Resource pages
    { url: `${BASE_URL}/resources/nz-radio-ratings`, lastModified: new Date(), changeFrequency: "quarterly", priority: 0.8 },
    { url: `${BASE_URL}/resources/nz-tv-ratings`, lastModified: new Date(), changeFrequency: "quarterly", priority: 0.8 },
    { url: `${BASE_URL}/resources/nz-press-readership`, lastModified: new Date(), changeFrequency: "quarterly", priority: 0.8 },
    { url: `${BASE_URL}/resources/nz-digital-audiences`, lastModified: new Date(), changeFrequency: "quarterly", priority: 0.8 },
    { url: `${BASE_URL}/resources/nz-outdoor-media`, lastModified: new Date(), changeFrequency: "quarterly", priority: 0.8 },
    { url: `${BASE_URL}/resources/nz-cinema-advertising`, lastModified: new Date(), changeFrequency: "quarterly", priority: 0.7 },
    { url: `${BASE_URL}/resources/nz-influencer-marketing`, lastModified: new Date(), changeFrequency: "quarterly", priority: 0.7 },
    { url: `${BASE_URL}/resources/nz-media-rates`, lastModified: new Date(), changeFrequency: "quarterly", priority: 0.8 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/thinking/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
