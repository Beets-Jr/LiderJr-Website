import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { ContactInfo } from "@/components/sections/contact-info";
import { PageHero } from "@/components/sections/page-hero";
import { Container, Section } from "@/components/ui";
import { faleConosco } from "@/content/fale-conosco";
import { site } from "@/content/site";
import { montarMetadata } from "@/lib/metadados";

export const metadata: Metadata = montarMetadata(
  faleConosco.metadados,
  "/fale-conosco",
);

export default function PaginaFaleConosco() {
  return (
    <>
      <PageHero conteudo={faleConosco.hero} />

      <Section>
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ContactInfo conteudo={faleConosco.informacoes} contato={site.contato} />
          </div>

          <div className="lg:col-span-2">
            <ContactForm conteudo={faleConosco.formulario} />
          </div>
        </Container>
      </Section>
    </>
  );
}
