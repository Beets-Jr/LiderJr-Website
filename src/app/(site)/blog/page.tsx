import type { Metadata } from "next";
import { ListagemDoBlog } from "@/components/sections/listagens-filtraveis";
import { PageHero } from "@/components/sections/page-hero";
import { getTodosPosts } from "@/content/blog";
import { paginaDoBlog } from "@/content/blog/pagina";

export const metadata: Metadata = {
  title: paginaDoBlog.metadados.titulo,
  description: paginaDoBlog.metadados.descricao,
  openGraph: {
    title: paginaDoBlog.metadados.titulo,
    description: paginaDoBlog.metadados.descricao,
  },
};

export default async function PaginaDoBlog() {
  const posts = await getTodosPosts();

  return (
    <>
      <PageHero conteudo={paginaDoBlog.hero} />
      <ListagemDoBlog posts={posts} conteudo={paginaDoBlog} />
    </>
  );
}
