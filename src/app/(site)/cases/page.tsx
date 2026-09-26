import type { Metadata } from "next";
import { ListagemDeCases } from "@/components/sections/listagens-filtraveis";
import { PageHero } from "@/components/sections/page-hero";
import { getTodosCases } from "@/content/cases";
import { paginaDeCases } from "@/content/cases/pagina";
import { montarMetadata } from "@/lib/metadados";

export const metadata: Metadata = montarMetadata(paginaDeCases.metadados);

export default async function PaginaDeCases() {
  const cases = await getTodosCases();

  return (
    <>
      <PageHero conteudo={paginaDeCases.hero} />
      <ListagemDeCases cases={cases} conteudo={paginaDeCases} />
    </>
  );
}
