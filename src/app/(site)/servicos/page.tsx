import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { SectionHeader } from "@/components/sections/section-header";
import { ServiceCardCompleto } from "@/components/sections/service-card";
import { Card, Container, Section } from "@/components/ui";
import { getTodosServicos } from "@/content/servicos";
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
  const servicos = getTodosServicos();

  return (
    <>
      <PageHero conteudo={paginaDeServicos.hero} />

      <Section>
        <Container>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <li key={servico.slug} className="flex">
                <ServiceCardCompleto
                  servico={servico}
                  rotuloDoLink={paginaDeServicos.rotuloDoCard}
                  botaoSemPagina={paginaDeServicos.botaoSemPagina}
                />
              </li>
            ))}
          </ul>

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
