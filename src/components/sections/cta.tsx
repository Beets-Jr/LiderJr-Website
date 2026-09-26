import {
  Avatar,
  ButtonLink,
  Card,
  Container,
  Divider,
  Estrelas,
  Eyebrow,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { cn } from "@/lib/cn";
import type { ChamadaParaAcao, Depoimento } from "@/types/comum";

/* -------------------------------------------------------------------------- */
/* Peças compartilhadas                                                        */
/* -------------------------------------------------------------------------- */

function Botoes({
  chamada,
  centralizado = false,
}: {
  chamada: ChamadaParaAcao;
  centralizado?: boolean;
}) {
  return (
    <div
      className={cn(
        "mt-10 flex flex-col gap-4 sm:flex-row sm:items-center",
        centralizado && "sm:justify-center",
      )}
    >
      <ButtonLink href={chamada.botaoPrimario.href} variant="primary">
        {chamada.botaoPrimario.label}
      </ButtonLink>
      {chamada.botaoSecundario ? (
        <ButtonLink href={chamada.botaoSecundario.href} variant="outlineOnDark">
          {chamada.botaoSecundario.label}
        </ButtonLink>
      ) : null}
    </div>
  );
}

/**
 * O texto da chamada, sem a caixa. Reaproveitado pelos dois formatos de CTA e
 * pelo painel escuro das páginas de detalhe.
 */
export function TextoDaChamada({
  chamada,
  centralizado = false,
}: {
  chamada: ChamadaParaAcao;
  centralizado?: boolean;
}) {
  return (
    <div className={cn(centralizado && "text-center")}>
      {chamada.eyebrow ? <Eyebrow className="mb-4">{chamada.eyebrow}</Eyebrow> : null}

      <Heading as="h2" level="section" tone="onDark">
        {chamada.titulo}
      </Heading>

      <Text
        size="lg"
        tone="onDarkMuted"
        className={cn("mt-6 max-w-2xl", centralizado && "mx-auto")}
      >
        {chamada.descricao}
      </Text>

      <Botoes chamada={chamada} centralizado={centralizado} />

      {chamada.observacao ? (
        <Text size="sm" tone="onDarkFaint" className="mt-8">
          {chamada.observacao}
        </Text>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Formato alternativo, sem uso: depoimento acima, chamada abaixo              */
/* -------------------------------------------------------------------------- */

export interface CTATestimonialProps {
  depoimento: Depoimento;
  chamada: ChamadaParaAcao;
}

export function CTATestimonial({ depoimento, chamada }: CTATestimonialProps) {
  return (
    <Section tone="dark" glow>
      <Container width="narrow">
        <figure className="text-center">
          <div className="flex justify-center">
            <Estrelas />
          </div>

          <blockquote className="mt-6">
            <Text
              size="lg"
              tone="onDark"
              family="serif"
              className="mx-auto max-w-3xl text-2xl lg:text-3xl"
            >
              {`“${depoimento.texto}”`}
            </Text>
          </blockquote>

          <figcaption className="mt-6">
            <Text weight="semibold" tone="onDark">
              {depoimento.autor}
            </Text>
            <Text size="sm" tone="onDarkFaint">
              {depoimento.cargo}
            </Text>
          </figcaption>
        </figure>

        <Divider tone="onDark" className="mx-auto my-14 w-16" />

        <TextoDaChamada chamada={chamada} centralizado />
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Formato em uso na Home: depoimento à esquerda, chamada à direita            */
/* -------------------------------------------------------------------------- */

/**
 * Variante em duas colunas, escolhida pelo cliente. Ver PENDENCIAS.md 2.1.
 */
export function CTATestimonialColumns({ depoimento, chamada }: CTATestimonialProps) {
  return (
    <Section tone="dark" glow>
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Card tone="onDark" padding="lg" as="figure">
          <Estrelas />

          <blockquote className="mt-6">
            <Text size="lg" tone="onDark" family="serif" className="lg:text-2xl">
              {`“${depoimento.texto}”`}
            </Text>
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-3">
            <Avatar iniciais={depoimento.iniciais} />
            <div>
              <Text size="sm" weight="semibold" tone="onDark">
                {depoimento.autor}
              </Text>
              <Text size="xs" tone="onDarkFaint">
                {depoimento.cargo}
              </Text>
            </div>
          </figcaption>
        </Card>

        <TextoDaChamada chamada={chamada} />
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Painel escuro dentro de seção clara — páginas de case e de post             */
/* -------------------------------------------------------------------------- */

export function CTAPanel({ chamada }: { chamada: ChamadaParaAcao }) {
  return (
    <Section spacing="tight">
      <Container>
        <Card tone="invertido" padding="xl">
          <TextoDaChamada chamada={chamada} centralizado />
        </Card>
      </Container>
    </Section>
  );
}
