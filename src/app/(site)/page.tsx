import type { Metadata } from "next";
import { AboutStrip } from "@/components/sections/about-strip";
import { CasesCarousel } from "@/components/sections/cases-carousel";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { CTATestimonial } from "@/components/sections/cta";
import { HomeHero } from "@/components/sections/home-hero";
import { PostCard } from "@/components/sections/post-card";
import { SectionHeader } from "@/components/sections/section-header";
import { ServiceCardCompacto } from "@/components/sections/service-card";
import { StatsBand } from "@/components/sections/stats-band";
import { Container, Section } from "@/components/ui";
import { getUltimosPosts } from "@/content/blog";
import { getCasesEmDestaque } from "@/content/cases";
import { home } from "@/content/home";
import { paginaDeServicos } from "@/content/servicos/pagina";
import { getTodosServicos } from "@/content/servicos";

export const metadata: Metadata = {
  title: home.metadados.titulo,
  description: home.metadados.descricao,
  openGraph: {
    title: home.metadados.titulo,
    description: home.metadados.descricao,
  },
};

export default async function PaginaInicial() {
  const servicos = getTodosServicos().slice(0, 3);
  // Duas regras opostas, de propósito: o carrossel mostra os cases ESCOLHIDOS
  // em /keystatic e não muda quando um case novo é publicado; o blog mostra
  // sempre os três posts mais recentes, sem ninguém precisar mexer na Home.
  // Os três cases ficam todos na tela ao mesmo tempo — girar só troca qual
  // deles fica no centro.
  const cases = await getCasesEmDestaque();
  const posts = await getUltimosPosts(3);

  return (
    <>
      <HomeHero conteudo={home.hero} estatisticas={home.estatisticas} />

      {/* No desktop os números ficam dentro do hero; aqui aparecem no mobile. */}
      <Section tone="muted" spacing="tight" className="lg:hidden">
        <Container>
          <StatsBand estatisticas={home.estatisticas} tone="light" />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader conteudo={home.servicos} />
          <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <li key={servico.slug} className="flex">
                <ServiceCardCompacto
                  servico={servico}
                  rotuloDoLink={paginaDeServicos.rotuloDoCard}
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <AboutStrip conteudo={home.sobre} />

      <ClientsMarquee conteudo={home.clientes} />

      <Section>
        <Container>
          <SectionHeader conteudo={home.cases} />
          <div className="mt-14">
            <CasesCarousel cases={cases} textos={home.cases.carrossel} />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeader conteudo={home.blog} />
          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {posts.map((post) => (
              <li key={post.slug} className="flex">
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/*
        Existe uma segunda versão deste CTA (depoimento ao lado, em duas
        colunas) pronta em CTATestimonialColumns, com o conteúdo em
        `ctaFinalEmColunas` de src/content/home.ts. O cliente ainda não escolheu
        entre as duas. Ver PENDENCIAS.md.
      */}
      <CTATestimonial
        depoimento={home.ctaFinal.depoimento}
        chamada={home.ctaFinal.chamada}
      />
    </>
  );
}
