import type { Metadata } from "next";
import { ListagemDeMateriais } from "@/components/sections/listagens-filtraveis";
import { PageHero } from "@/components/sections/page-hero";
import { getTodosMateriais, paginaDeMateriais } from "@/content/materiais";
import { montarMetadata } from "@/lib/metadados";

export const metadata: Metadata = montarMetadata(
  paginaDeMateriais.metadados,
  "/materiais",
);

export default async function PaginaDeMateriais() {
  const materiais = await getTodosMateriais();

  return (
    <>
      <PageHero conteudo={paginaDeMateriais.hero} />
      <ListagemDeMateriais materiais={materiais} conteudo={paginaDeMateriais} />
    </>
  );
}
