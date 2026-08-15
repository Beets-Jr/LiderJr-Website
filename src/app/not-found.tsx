import type { Metadata } from "next";
import { ButtonLink, Container, Heading, Section, Text } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.naoEncontrado.titulo,
  robots: { index: false, follow: true },
};

export default function PaginaNaoEncontrada() {
  const { naoEncontrado } = site;

  return (
    <Section spacing="hero">
      <Container width="prose" className="text-center">
        <p className="font-heading text-brand text-6xl font-bold" aria-hidden="true">
          {naoEncontrado.codigo}
        </p>

        <Heading as="h1" level="section" className="mt-4">
          {naoEncontrado.titulo}
        </Heading>

        <Text size="lg" tone="muted" className="mt-6">
          {naoEncontrado.descricao}
        </Text>

        <ButtonLink href={naoEncontrado.botao.href} className="mt-10">
          {naoEncontrado.botao.label}
        </ButtonLink>
      </Container>
    </Section>
  );
}
