import { ButtonLink, Container, Heading, Section, Text } from "@/components/ui";

/**
 * PLACEHOLDER DA FASE 1.
 * A Home de verdade é construída na Fase 3, a partir de src/content/home.ts.
 * Este arquivo existe só para o `/` responder enquanto a fundação é revisada.
 */
export default function PaginaInicial() {
  return (
    <Section spacing="hero">
      <Container width="prose" className="text-center">
        <Heading as="h1" level="display">
          Fundação da Fase 1
        </Heading>
        <Text size="lg" tone="muted" className="mt-6">
          Tokens, primitivos de UI, header e rodapé estão prontos. A Home real entra na
          Fase 3.
        </Text>
        <ButtonLink href="/dev/ui" className="mt-10">
          Ver o showcase do design system
        </ButtonLink>
      </Container>
    </Section>
  );
}
