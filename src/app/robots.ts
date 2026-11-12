import type { MetadataRoute } from "next";
import { business } from "@/config/business.1";

export default function robots(): MetadataRoute.Robots {
  const base = business.website.replace(/\/$/, "");
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
