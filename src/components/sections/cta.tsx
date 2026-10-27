import {
  Avatar,
  ButtonLink,
  Card,
  Container,
  Estrelas,
  Eyebrow,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { faleConosco } from "@/content/fale-conosco";
import { cn } from "@/lib/cn";
import type { ChamadaParaAcao, ConviteDoFormulario, Depoimento } from "@/types/comum";
import { FormularioDeContato, type OrigemDoFormulario } from "./contact-form";

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
 * O texto da chamada, sem a caixa. Reaproveitado pelo CTA da Home e pelo CTA
 * das páginas de serviço.
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
/* CTA final da Home: depoimento à esquerda, chamada à direita                 */
/* -------------------------------------------------------------------------- */

export interface CTATestimonialProps {
  depoimento: Depoimento;
  chamada: ChamadaParaAcao;
}

/** Formato em duas colunas, escolhido pelo cliente. Ver PENDENCIAS.md 2.1. */
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
              {depoimento.cargo ? (
                <Text size="xs" tone="onDarkFaint">
                  {depoimento.cargo}
                </Text>
              ) : null}
            </div>
          </figcaption>
        </Card>

        <TextoDaChamada chamada={chamada} />
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/* Cartão com formulário — fim das páginas de case e de post                  */
/* -------------------------------------------------------------------------- */

/**
 * O convite (título e texto, escritos no CMS por case ou post) e, embaixo, o
 * formulário do Fale Conosco em formato horizontal. Os campos e mensagens são
 * os mesmos de src/content/fale-conosco.ts; o que muda é a origem: aqui vai a
 * própria página, não a anterior.
 */
export function CTAComFormulario({
  convite,
  origem,
}: {
  convite: ConviteDoFormulario;
  origem: OrigemDoFormulario;
}) {
  return (
    <Section spacing="tight">
      <Container>
        <Card tone="raised" padding="xl">
          <Heading as="h2" level="section">
            {convite.titulo}
          </Heading>
          <Text size="lg" tone="muted" className="mt-6 max-w-2xl">
            {convite.descricao}
          </Text>

          <FormularioDeContato
            conteudo={faleConosco.formulario}
            formato="horizontal"
            origem={origem}
            className="mt-10"
          />
        </Card>
      </Container>
    </Section>
  );
}
