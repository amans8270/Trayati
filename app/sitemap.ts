import type { MetadataRoute } from "next";

import { experiences, properties } from "@/lib/mock-data";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/properties", "/reviews", "/about", "/contact", "/faq", "/blog", "/cancellation-policy", "/privacy-policy", "/terms-of-service"];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
    })),
    ...properties.map((property) => ({
      url: `${siteConfig.url}/properties/${property.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
    })),
    ...experiences.map((experience) => ({
      url: `${siteConfig.url}/reviews/experiences/${experience.slug}`,
      lastModified: new Date(experience.createdAt),
      changeFrequency: "daily" as const,
    })),
  ];
}
