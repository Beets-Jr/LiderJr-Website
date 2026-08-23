import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Cultura, Filiacoes, Historia } from "@/components/sections/quem-somos-secoes";
import { quemSomos } from "@/content/quem-somos";

export const metadata: Metadata = {
  title: quemSomos.metadados.titulo,
  description: quemSomos.metadados.descricao,
  openGraph: {
    title: quemSomos.metadados.titulo,
    description: quemSomos.metadados.descricao,
  },
};

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
