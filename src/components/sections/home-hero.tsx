import { ArrowRight } from "lucide-react";
import { ButtonLink, Container, Foto, Heading, Section, Text } from "@/components/ui";
import type { ConteudoDaHome } from "@/types/paginas";
import { StatsBand } from "./stats-band";

/**
 * O hero da Home — o único do site com layout próprio: título à esquerda,
 * números à direita e a imagem esmaecendo da direita para o centro.
 */
export function HomeHero({
  conteudo,
  estatisticas,
}: {
  conteudo: ConteudoDaHome["hero"];
  estatisticas: ConteudoDaHome["estatisticas"];
}) {
  return (
    <Section tone="dark" spacing="none" className="flex min-h-[85vh] items-center">
      {/* Brilho laranja atrás do conteúdo. */}
      <div className="glow-brand pointer-events-none absolute inset-0 opacity-10" />

      {/* Imagem na metade direita, dissolvendo em direção ao texto. */}
      <div
        className="absolute top-0 right-0 hidden h-full w-1/2 opacity-50 lg:block"
        style={{
          maskImage: "linear-gradient(to left, #000, rgba(0,0,0,0.3), transparent)",
          WebkitMaskImage:
            "linear-gradient(to left, #000, rgba(0,0,0,0.3), transparent)",
        }}
      >
        <Foto imagem={conteudo.imagem} sizes="50vw" priority />
      </div>

      <Container className="relative grid grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2">
        <div>
          <Heading as="h1" level="display" tone="onDark">
            <span className="text-brand">{conteudo.tituloDestaque}</span>{" "}
            {conteudo.titulo}
          </Heading>

          <Text size="lg" tone="onDarkMuted" className="mt-6 max-w-lg">
            {conteudo.descricao}
          </Text>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={conteudo.botaoPrimario.href} className="group">
              {conteudo.botaoPrimario.label}
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </ButtonLink>
            <ButtonLink href={conteudo.botaoSecundario.href} variant="outlineOnDark">
              {conteudo.botaoSecundario.label}
            </ButtonLink>
          </div>
        </div>

        <StatsBand estatisticas={estatisticas} className="hidden lg:grid" />
      </Container>
    </Section>
  );
}
