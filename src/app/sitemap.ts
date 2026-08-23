import type { MetadataRoute } from "next";
import { getPostsComPagina } from "@/content/blog";
import { getCasesComPagina } from "@/content/cases";
import { getServicosComPagina } from "@/content/servicos";
import { site } from "@/content/site";

/**
 * Mapa do site para buscadores.
 *
 * As páginas fixas estão listadas abaixo; as de serviço, case e post saem dos
 * registries. Publicar um conteúdo novo já o coloca no sitemap — não há lista
 * para manter em dia.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = site.url;
  const agora = new Date();

  const fixas: MetadataRoute.Sitemap = (
    [
      { caminho: "/", priority: 1, changeFrequency: "monthly" },
      { caminho: "/quem-somos", priority: 0.8, changeFrequency: "yearly" },
      { caminho: "/servicos", priority: 0.9, changeFrequency: "monthly" },
      { caminho: "/cases", priority: 0.8, changeFrequency: "monthly" },
      { caminho: "/materiais", priority: 0.7, changeFrequency: "monthly" },
      { caminho: "/blog", priority: 0.8, changeFrequency: "weekly" },
      { caminho: "/fale-conosco", priority: 0.9, changeFrequency: "yearly" },
    ] as const
  ).map(({ caminho, ...resto }) => ({
    ...resto,
    url: `${base}${caminho}`,
    lastModified: agora,
  }));

  const servicos: MetadataRoute.Sitemap = getServicosComPagina().map((servico) => ({
    url: `${base}/servicos/${servico.slug}`,
    lastModified: agora,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cases: MetadataRoute.Sitemap = (await getCasesComPagina()).map((item) => ({
    url: `${base}/cases/${item.slug}`,
    lastModified: agora,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const posts: MetadataRoute.Sitemap = (await getPostsComPagina()).map((post) => ({
    url: `${base}/blog/${post.slug}`,
    // A data de publicação do post é o que importa para o buscador.
    lastModified: new Date(`${post.data}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...fixas, ...servicos, ...cases, ...posts];
}
