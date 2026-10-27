import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Container, Eyebrow, Foto, Heading, Section, Text } from "@/components/ui";
import type { ConteudoDaHome } from "@/types/paginas";

/**
 * A faixa "Sobre nós": imagem com o selo de projetos flutuando na quina,
 * texto e lista de diferenciais ao lado.
 */
export function AboutStrip({ conteudo }: { conteudo: ConteudoDaHome["sobre"] }) {
  return (
    <Section tone="muted">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[7/5] overflow-hidden rounded-lg">
            <Foto imagem={conteudo.imagem} sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>

          <p className="bg-brand absolute -right-6 -bottom-6 hidden rounded-lg px-6 py-4 lg:block">
            <span className="font-heading text-brand-fg block text-2xl font-bold">
              {conteudo.selo.valor}
            </span>
            <span className="font-body text-brand-fg block text-xs">
              {conteudo.selo.rotulo}
            </span>
          </p>
        </div>

        <div>
          {conteudo.eyebrow ? (
            <Eyebrow className="mb-3">{conteudo.eyebrow}</Eyebrow>
          ) : null}

          <Heading as="h2" level="section">
            {conteudo.titulo}
          </Heading>

          {conteudo.paragrafos.map((paragrafo, indice) => (
            <Text key={indice} className={indice === 0 ? "mt-6" : "mt-4"} tone="muted">
              {paragrafo}
            </Text>
          ))}

          <ul className="mt-8 flex flex-col gap-3">
            {conteudo.checklist.itens.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2
                  size={16}
                  aria-hidden="true"
                  className="text-brand mt-1 shrink-0"
                />
                <Text as="span" size="sm">
                  {item}
                </Text>
              </li>
            ))}
          </ul>

          <Link
            href={conteudo.link.href}
            className="text-brand hover:text-brand-hover font-body group mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-semibold transition-colors"
          >
            {conteudo.link.label}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
