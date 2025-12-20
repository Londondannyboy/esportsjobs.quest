import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://esportsjobs.quest";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Job category pages (future expansion)
  const categoryPages: MetadataRoute.Sitemap = [
    "pro-player-jobs",
    "esports-coach-jobs",
    "content-creator-jobs",
    "broadcast-jobs",
    "event-jobs",
    "marketing-jobs",
  ].map((slug) => ({
    url: `${baseUrl}/jobs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  // Resource pages (future expansion)
  const resourcePages: MetadataRoute.Sitemap = [
    "career-guide",
    "salary-guide",
    "interview-tips",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...resourcePages];
}
