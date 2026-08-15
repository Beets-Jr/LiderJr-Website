import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * O protótipo era `noindex, nofollow`. O site de produção é indexável.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
