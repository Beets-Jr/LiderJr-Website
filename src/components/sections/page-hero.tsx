import type { ReactNode } from "react";
import { Container, Eyebrow, Foto, Heading, Section, Text } from "@/components/ui";
import type { HeroDePagina } from "@/types/comum";

/**
 * O topo escuro de toda página interna: imagem de fundo, véu, rótulo, título
 * e texto. No protótipo este bloco estava copiado e colado em 8 páginas.
 *
 * A imagem de fundo é decorativa (o texto por cima já informa), por isso o
 * conteúdo a declara com `comoFundo()`, que zera o `alt`.
 */
export interface PageHeroProps {
  conteudo: HeroDePagina;
  /** Sobrescreve o título vindo do conteúdo. Usado pelas páginas de detalhe. */
  titulo?: string;
  /** Conteúdo extra abaixo do texto: autor, data, tempo de leitura. */
  children?: ReactNode;
  priority?: boolean;
}

export function PageHero({
  conteudo,
  titulo,
  children,
  priority = true,
}: PageHeroProps) {
  return (
    <Section tone="dark" spacing="hero" className="overflow-hidden">
      <div className="absolute inset-0">
        <Foto imagem={conteudo.imagemDeFundo} sizes="100vw" priority={priority} />
        {/* Véu que garante contraste do texto sobre qualquer imagem. */}
        <div className="bg-surface-dark/80 absolute inset-0" />
      </div>

      <Container className="relative text-center">
        <Eyebrow className="mb-4">{conteudo.eyebrow}</Eyebrow>

        <Heading as="h1" level="display" tone="onDark">
          {titulo ?? conteudo.titulo}
        </Heading>

        {conteudo.descricao ? (
          <Text size="lg" tone="onDarkMuted" className="mx-auto mt-6 max-w-2xl">
            {conteudo.descricao}
          </Text>
        ) : null}

        {children}
      </Container>
    </Section>
  );
}
