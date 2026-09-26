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
  /** Conteúdo extra abaixo do texto (ex.: a data de um post). */
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
    /* Altura fixa em todas as páginas: o hero não cresce nem encolhe conforme
       o título ocupa uma ou quatro linhas — o conteúdo fica centrado dentro da
       mesma caixa. 480px comporta o caso mais alto do site (o hero de post, com
       título de quatro linhas no celular mais o autor/data/tempo de leitura),
       que media 472px antes desta mudança. */
    <Section
      tone="dark"
      spacing="none"
      className="flex h-120 items-center overflow-hidden"
    >
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
