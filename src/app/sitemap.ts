import type { MetadataRoute } from "next";
import { siteConfig, services } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";
import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${siteConfig.url}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/servicos`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...services.map((service) => ({
      url: `${siteConfig.url}/servicos/${service.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...cities.map((city) => ({
      url: `${siteConfig.url}/agencia-de-marketing-em-${city.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${siteConfig.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    { url: `${siteConfig.url}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/termos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
