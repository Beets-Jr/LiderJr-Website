import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionHeader } from "@/components/sections/section-header";
import { ServiceCardCompleto } from "@/components/sections/service-card";
import { Card, Container, Section } from "@/components/ui";
import { getServicosAgrupados } from "@/content/servicos";
import { paginaDeServicos } from "@/content/servicos/pagina";

export const metadata: Metadata = {
  title: paginaDeServicos.metadados.titulo,
  description: paginaDeServicos.metadados.descricao,
  openGraph: {
    title: paginaDeServicos.metadados.titulo,
    description: paginaDeServicos.metadados.descricao,
  },
};

export default function PaginaDeServicos() {
  const grupos = getServicosAgrupados();

  return (
    <>
      <PageHero conteudo={paginaDeServicos.hero} />

      <Section>
        <Container>
          {grupos.map(({ grupo, servicos }) => (
            <div key={grupo.id} className="mb-16 last:mb-0">
              <SectionHeader conteudo={grupo} as="h2" />
              <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {servicos.map((servico) => (
                  <li key={servico.slug} className="flex">
                    <ServiceCardCompleto
                      servico={servico}
                      rotuloDoLink={paginaDeServicos.rotuloDoCard}
                      botaoSemPagina={paginaDeServicos.botaoSemPagina}
                      nivelDeTitulo="h3"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* O processo fica num painel escuro dentro da seção clara. */}
          <Card tone="invertido" padding="xl" className="mt-20 text-left">
            <SectionHeader conteudo={paginaDeServicos.processo} tone="onDark" />
            <div className="mt-14">
              <ProcessSteps etapas={paginaDeServicos.processo.etapas} tone="onDark" />
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
