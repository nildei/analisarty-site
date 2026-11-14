import type { MetadataRoute } from "next";
import { siteConfig, services } from "@/lib/site-config";

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
    { url: `${siteConfig.url}/privacidade`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/termos`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
