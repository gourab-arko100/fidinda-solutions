import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/divisions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/mission-vision`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({ url: `${site.url}/articles/${a.slug}`, lastModified: new Date(a.date), changeFrequency: "yearly" as const, priority: 0.6 })),
    { url: `${site.url}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
