import { CheckCircle2, Star } from "lucide-react";
import {
  Avatar,
  Badge,
  Card,
  Container,
  Foto,
  Heading,
  IconTile,
  Section,
  Text,
} from "@/components/ui";
import { getIcone } from "@/lib/icones";
import type { Depoimento } from "@/types/comum";
import type { DetalheDeServico } from "@/types/servico";
import { TextoDaChamada } from "./cta";
import { ProcessSteps } from "./process-steps";
import { SectionHeader } from "./section-header";

/* -------------------------------------------------------------------------- */
/* "Como funciona" — texto de um lado, imagem do outro                         */
/* -------------------------------------------------------------------------- */

export function SobreOServico({
  conteudo,
  tags,
}: {
  conteudo: DetalheDeServico["sobre"];
  tags: string[];
}) {
  return (
    <Section>
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            conteudo={{ eyebrow: conteudo.eyebrow, titulo: conteudo.titulo }}
          />

          {conteudo.paragrafos.map((paragrafo) => (
            <Text key={paragrafo} size="lg" tone="muted" className="mt-6">
              {paragrafo}
            </Text>
          ))}

          <ul className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge size="md">{tag}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
          <Foto imagem={conteudo.imagem} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Metodologia                                                                 */
/* -------------------------------------------------------------------------- */

export function MetodologiaDoServico({
  conteudo,
}: {
  conteudo: DetalheDeServico["metodologia"];
}) {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          conteudo={{ eyebrow: conteudo.eyebrow, titulo: conteudo.titulo }}
          alinhamento="centro"
        />
        <div className="mt-20">
          <ProcessSteps etapas={conteudo.etapas} />
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Resultados esperados — cards com barra laranja no topo                      */
/* -------------------------------------------------------------------------- */

export function ResultadosDoServico({
  conteudo,
}: {
  conteudo: DetalheDeServico["resultados"];
}) {
  return (
    <Section>
      <Container>
        <SectionHeader
          conteudo={{ titulo: conteudo.titulo, descricao: conteudo.descricao }}
        />

        <ul className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {conteudo.itens.map((item) => {
            const Icone = getIcone(item.icone);
            return (
              <li key={item.titulo} className="flex">
                <Card interactive className="border-t-brand w-full border-t-4">
                  <IconTile icon={Icone} />

                  <Heading as="h3" level="card" className="mt-6">
                    {item.titulo}
                  </Heading>

                  <Text size="sm" tone="muted" className="mt-3">
                    {item.descricao}
                  </Text>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Depoimento centrado                                                         */
/* -------------------------------------------------------------------------- */

export function DepoimentoCentrado({ depoimento }: { depoimento: Depoimento }) {
  return (
    <Section tone="muted">
      <Container width="prose">
        <figure className="text-center">
          <div
            className="flex justify-center gap-1"
            aria-label="Avaliação: 5 de 5 estrelas"
          >
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={18}
                aria-hidden="true"
                className="text-brand fill-brand"
              />
            ))}
          </div>

          <blockquote className="mt-6">
            <Text size="lg" family="serif" className="text-2xl lg:text-3xl">
              {`“${depoimento.texto}”`}
            </Text>
          </blockquote>

          <figcaption className="mt-8 flex items-center justify-center gap-3">
            <Avatar iniciais={depoimento.iniciais} />
            <div className="text-left">
              <Text size="sm" weight="semibold">
                {depoimento.autor}
              </Text>
              <Text size="xs" tone="muted">
                {depoimento.cargo}
              </Text>
            </div>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* CTA com a lista "O que você recebe" ao lado                                 */
/* -------------------------------------------------------------------------- */

export function CTAComChecklist({ conteudo }: { conteudo: DetalheDeServico["cta"] }) {
  const { checklist, ...chamada } = conteudo;

  return (
    <Section tone="dark" glow>
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <TextoDaChamada chamada={chamada} />

        <Card tone="onDark" padding="lg">
          <Heading as="h3" level="card" tone="onDark">
            {checklist.titulo}
          </Heading>

          <ul className="mt-6 flex flex-col gap-5">
            {checklist.itens.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  aria-hidden="true"
                  className="text-brand mt-0.5 shrink-0"
                />
                <Text as="span" size="sm" tone="onDarkMuted">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </Section>
  );
}
