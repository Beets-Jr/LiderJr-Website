import { Quote } from "lucide-react";
import {
  Avatar,
  Card,
  Container,
  Eyebrow,
  Heading,
  IconTile,
  Section,
  Text,
} from "@/components/ui";
import { getIcone } from "@/lib/icones";
import type { DetalheDeCase } from "@/types/case";

/**
 * O miolo da página de case: prosa em duas colunas à esquerda, depoimento e
 * números de impacto na barra lateral.
 */
export function CorpoDoCase({ detalhe }: { detalhe: DetalheDeCase }) {
  return (
    <Section spacing="tight">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {detalhe.secoes.map((secao) => (
              <section key={secao.titulo} className="mb-12 last:mb-0">
                <Heading as="h2" level="subsection">
                  {secao.titulo}
                </Heading>

                {secao.paragrafos.map((paragrafo) => (
                  <Text key={paragrafo} tone="muted" className="mt-4">
                    {paragrafo}
                  </Text>
                ))}
              </section>
            ))}
          </div>

          <aside className="lg:col-span-1">
            {detalhe.depoimento ? (
              <Card
                as="figure"
                padding="md"
                className="bg-surface-muted relative overflow-hidden"
              >
                <Quote
                  size={80}
                  aria-hidden="true"
                  className="text-brand/5 pointer-events-none absolute -top-4 -right-4 rotate-12"
                />

                <blockquote className="relative">
                  <Text size="sm" className="italic">
                    {`“${detalhe.depoimento.texto}”`}
                  </Text>
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3">
                  <Avatar
                    iniciais={detalhe.depoimento.iniciais}
                    tone="brandSolid"
                    size="sm"
                  />
                  <div>
                    <Text size="xs" weight="bold">
                      {detalhe.depoimento.autor}
                    </Text>
                    <Text size="xs" tone="muted">
                      {detalhe.depoimento.cargo}
                    </Text>
                  </div>
                </figcaption>
              </Card>
            ) : null}

            {detalhe.impacto ? (
              <div className="mt-12 text-center">
                <Eyebrow className="mb-2">{detalhe.impacto.eyebrow}</Eyebrow>

                <Heading as="h2" level="subsection">
                  {detalhe.impacto.titulo}
                </Heading>

                <ul className="mt-8 grid grid-cols-1 gap-4">
                  {detalhe.impacto.numeros.map((numero) => {
                    const Icone = getIcone(numero.icone);
                    return (
                      <li key={numero.rotulo}>
                        <Card
                          padding="md"
                          className="flex flex-col items-center justify-center"
                        >
                          <IconTile icon={Icone} size="sm" />
                          <p className="font-heading text-brand mt-2 text-3xl font-bold">
                            {numero.valor}
                          </p>
                          <Text size="xs" weight="semibold" className="mt-1">
                            {numero.rotulo}
                          </Text>
                        </Card>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </Container>
    </Section>
  );
}
