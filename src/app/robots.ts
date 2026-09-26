import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * O site público é todo indexável. Ficam de fora só a interface do CMS
 * (/keystatic) e as rotas da API dele — não há nada para buscador ali.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/keystatic", "/api/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
