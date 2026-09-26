import type { Metadata } from "next";
import { ListagemDoBlog } from "@/components/sections/listagens-filtraveis";
import { PageHero } from "@/components/sections/page-hero";
import { getTodosPosts } from "@/content/blog";
import { paginaDoBlog } from "@/content/blog/pagina";
import { montarMetadata } from "@/lib/metadados";

export const metadata: Metadata = montarMetadata(paginaDoBlog.metadados);

export default async function PaginaDoBlog() {
  const posts = await getTodosPosts();

  return (
    <>
      <PageHero conteudo={paginaDoBlog.hero} />
      <ListagemDoBlog posts={posts} conteudo={paginaDoBlog} />
    </>
  );
}
