import type { MetadataRoute } from "next";
import { baseUrl, routes } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path === "/" ? "" : route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
