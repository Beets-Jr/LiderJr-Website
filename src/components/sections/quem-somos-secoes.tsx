import { Card, Container, Foto, Heading, Section, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import { getIcone } from "@/lib/icones";
import type { ConteudoQuemSomos } from "@/types/paginas";
import { SectionHeader } from "./section-header";

/* -------------------------------------------------------------------------- */
/* História — texto de um lado, imagem do outro                                */
/* -------------------------------------------------------------------------- */

export function Historia({ conteudo }: { conteudo: ConteudoQuemSomos["historia"] }) {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeader
            conteudo={{ eyebrow: conteudo.eyebrow, titulo: conteudo.titulo }}
          />
          {conteudo.paragrafos.map((paragrafo) => (
            <Text key={paragrafo} tone="muted" className="mt-6">
              {paragrafo}
            </Text>
          ))}
        </div>

        <div className="relative aspect-[7/5] overflow-hidden rounded-lg">
          <Foto imagem={conteudo.imagem} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Cultura — cards com estética de desenho técnico                             */
/* -------------------------------------------------------------------------- */

export function Cultura({ conteudo }: { conteudo: ConteudoQuemSomos["cultura"] }) {
  return (
    <Section tone="muted" className="overflow-hidden">
      {/* Malha quadriculada de fundo, referência a papel milimetrado. */}
      <div
        aria-hidden="true"
        className="text-brand pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <SectionHeader
          conteudo={{ eyebrow: conteudo.eyebrow, titulo: conteudo.titulo }}
          alinhamento="centro"
        />

        {/* Três colunas lado a lado; a linha da grade estica e o `flex` no
            <li> faz os três cards terem a mesma altura do mais longo. */}
        <ul className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {conteudo.pilares.map((pilar) => {
            const Icone = getIcone(pilar.icone);
            return (
              <li key={pilar.codigo} className="flex">
                <Card className="group hover:border-brand relative flex w-full flex-col transition-colors">
                  <MarcasDeCanto />

                  <div className="mb-6 flex items-start justify-between">
                    <Icone
                      size={28}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="text-brand"
                    />
                    <span className="text-fg-muted font-mono text-[11px] tracking-widest">
                      {pilar.codigo}
                    </span>
                  </div>

                  <Heading as="h3" level="card" className="text-center">
                    {pilar.titulo}
                  </Heading>

                  {/* Título fixo no topo; o texto fica centralizado no espaço
                      que sobra, porque os cards têm a altura do de Valores e o
                      texto curto de Missão e Visão deixaria um vão embaixo. */}
                  <div className="mt-3 flex flex-1 flex-col items-center justify-center text-center">
                    {pilar.descricao ? (
                      <Text size="sm" tone="muted">
                        {pilar.descricao}
                      </Text>
                    ) : null}

                    {pilar.itens ? (
                      <ul className="flex flex-col items-center gap-1.5">
                        {pilar.itens.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span
                              aria-hidden="true"
                              className="bg-brand h-1.5 w-1.5 shrink-0 rounded-full"
                            />
                            <Text as="span" size="sm" tone="muted">
                              {item}
                            </Text>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

/** Os quatro cantos marcados, como numa vista de desenho técnico. */
function MarcasDeCanto() {
  const base =
    "border-brand/30 group-hover:border-brand/60 absolute h-3 w-3 transition-colors";
  return (
    <span aria-hidden="true">
      <span className={cn(base, "top-3 left-3 border-t border-l")} />
      <span className={cn(base, "top-3 right-3 border-t border-r")} />
      <span className={cn(base, "bottom-3 left-3 border-b border-l")} />
      <span className={cn(base, "right-3 bottom-3 border-r border-b")} />
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Filiações — zigue-zague de logo e texto                                     */
/* -------------------------------------------------------------------------- */

export function Filiacoes({ conteudo }: { conteudo: ConteudoQuemSomos["filiacoes"] }) {
  return (
    <Section tone="muted">
      <Container width="narrow">
        <SectionHeader
          conteudo={{ eyebrow: conteudo.eyebrow, titulo: conteudo.titulo }}
          alinhamento="centro"
        />

        <ul className="border-border mt-16 border-t">
          {conteudo.itens.map((filiacao, indice) => (
            <li key={filiacao.nome} className="border-border border-b">
              <div
                className={cn(
                  "flex flex-col items-center gap-8 py-12 md:flex-row md:gap-14",
                  indice % 2 === 1 && "md:flex-row-reverse",
                )}
              >
                <div className="flex h-36 w-full shrink-0 items-center justify-center md:w-52">
                  <Foto
                    imagem={filiacao.logo}
                    preencher={false}
                    sizes="208px"
                    className="max-h-full w-auto object-contain"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <Heading as="h3" level="card">
                    {filiacao.nome}
                  </Heading>
                  {filiacao.paragrafos.map((paragrafo, i) => (
                    <Text key={i} size="sm" tone="muted" className="mt-2">
                      {paragrafo}
                    </Text>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
