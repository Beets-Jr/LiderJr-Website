import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ParceirosCarousel } from "@/components/sections/parceiros-carousel";
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
      <ParceirosCarousel conteudo={quemSomos.parceiros} />
      <Filiacoes conteudo={quemSomos.filiacoes} />
    </>
  );
}
