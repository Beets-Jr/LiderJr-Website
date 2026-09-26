import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Cultura, Filiacoes, Historia } from "@/components/sections/quem-somos-secoes";
import { quemSomos } from "@/content/quem-somos";
import { montarMetadata } from "@/lib/metadados";

export const metadata: Metadata = montarMetadata(quemSomos.metadados, "/quem-somos");

export default function PaginaQuemSomos() {
  return (
    <>
      <PageHero conteudo={quemSomos.hero} />
      <Historia conteudo={quemSomos.historia} />
      <Cultura conteudo={quemSomos.cultura} />
      <Filiacoes conteudo={quemSomos.filiacoes} />
    </>
  );
}
