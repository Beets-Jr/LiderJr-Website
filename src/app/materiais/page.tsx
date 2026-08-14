import type { Metadata } from "next";
import { ListagemDeMateriais } from "@/components/sections/listagens-filtraveis";
import { PageHero } from "@/components/sections/page-hero";
import { getTodosMateriais, paginaDeMateriais } from "@/content/materiais";

export const metadata: Metadata = {
  title: paginaDeMateriais.metadados.titulo,
  description: paginaDeMateriais.metadados.descricao,
  openGraph: {
    title: paginaDeMateriais.metadados.titulo,
    description: paginaDeMateriais.metadados.descricao,
  },
};

export default function PaginaDeMateriais() {
  return (
    <>
      <PageHero conteudo={paginaDeMateriais.hero} />
      <ListagemDeMateriais
        materiais={getTodosMateriais()}
        conteudo={paginaDeMateriais}
      />
    </>
  );
}
