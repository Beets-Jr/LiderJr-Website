import type { Metadata } from "next";
import { DadosEstruturados } from "@/components/layout/dados-estruturados";
import { AboutStrip } from "@/components/sections/about-strip";
import { CasesCarousel } from "@/components/sections/cases-carousel";
import { ClientsMarquee } from "@/components/sections/clients-marquee";
import { CTATestimonialColumns } from "@/components/sections/cta";
import { HomeHero } from "@/components/sections/home-hero";
import { PostCard } from "@/components/sections/post-card";
import { SectionHeader } from "@/components/sections/section-header";
import { ServiceCardCompacto } from "@/components/sections/service-card";
import { StatsBand } from "@/components/sections/stats-band";
import { Container, Section } from "@/components/ui";
import { getUltimosPosts } from "@/content/blog";
import { getCasesEmDestaque } from "@/content/cases";
import { home } from "@/content/home";
import { getServicoPorSlug } from "@/content/servicos";
import { paginaDeServicos } from "@/content/servicos/pagina";
import { dadosDaOrganizacao, dadosDoSite } from "@/lib/dados-estruturados";
import { montarMetadata } from "@/lib/metadados";

export const metadata: Metadata = montarMetadata(home.metadados, "/", {
  tituloCompleto: true,
});

export default async function PaginaInicial() {
  // Curadoria manual: serviços escolhidos pelo cliente para representar
  // "Nossas áreas de atuação" — não é mais automático. Ver PENDENCIAS.md 2.3.
  const slugsEmDestaque = [
    "mapeamento-de-processos",
    "plano-de-negocios",
    "cronoanalise",
  ] as const;
  const servicos = slugsEmDestaque
    .map((slug) => getServicoPorSlug(slug))
    .filter((s) => s !== undefined);
  // Duas regras opostas, de propósito: o carrossel mostra os cases ESCOLHIDOS
  // em /keystatic e não muda quando um case novo é publicado; o blog mostra
  // sempre os três posts mais recentes, sem ninguém precisar mexer na Home.
  // Os três cases ficam todos na tela ao mesmo tempo — girar só troca qual
  // deles fica no centro.
  const cases = await getCasesEmDestaque();
  const posts = await getUltimosPosts(3);
  // Sem cases ou posts publicados, a seção some em vez de mostrar só o título.
  // Pelo mesmo motivo, o botão "Conheça outros cases" só aparece se houver cases.
  const { botaoSecundario: _semCases, ...chamadaSemBotao } = home.ctaFinal.chamada;
  const chamada = cases.length > 0 ? home.ctaFinal.chamada : chamadaSemBotao;

  return (
    <>
      <DadosEstruturados nos={[dadosDaOrganizacao(), dadosDoSite()]} />
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
          <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
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

      {cases.length > 0 ? (
        <Section>
          <Container>
            <SectionHeader conteudo={home.cases} largo />
            <div className="mt-14">
              <CasesCarousel cases={cases} textos={home.cases.carrossel} />
            </div>
          </Container>
        </Section>
      ) : null}

      {posts.length > 0 ? (
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
      ) : null}

      <CTATestimonialColumns depoimento={home.ctaFinal.depoimento} chamada={chamada} />
    </>
  );
}
