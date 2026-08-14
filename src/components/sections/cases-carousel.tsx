"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Badge, Card, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { Case } from "@/types/case";

/**
 * O carrossel de cases da Home: três cards visíveis no desktop, o do meio em
 * destaque. No mobile mostra um por vez.
 *
 * O do protótipo não tinha rótulo nos botões nem anúncio de mudança — quem usa
 * leitor de tela não sabia que algo tinha mudado. Aqui os botões têm
 * `aria-label` e a região é `aria-live`.
 */
export function CasesCarousel({
  cases,
  textos,
}: {
  cases: Case[];
  textos: { anterior: string; proximo: string; regiao: string };
}) {
  const total = cases.length;
  const [indice, setIndice] = useState(0);

  if (total === 0) return null;

  const irPara = (novo: number) => setIndice(((novo % total) + total) % total);
  const noOffset = (offset: number) => cases[(indice + offset + total) % total];

  const visiveis = [
    { posicao: -1, item: noOffset(-1) },
    { posicao: 0, item: noOffset(0) },
    { posicao: 1, item: noOffset(1) },
  ];

  return (
    <div>
      <div
        className="relative"
        aria-live="polite"
        aria-atomic="false"
        role="region"
        aria-label={textos.regiao}
      >
        {/* Desktop: três cards, o central destacado. */}
        <ul className="hidden items-stretch gap-6 md:flex">
          {visiveis.map(({ posicao, item }) =>
            item ? (
              <li
                key={`${item.slug}-${posicao}`}
                className={cn(
                  "flex-1 transition-[transform,opacity] duration-500",
                  posicao === 0 ? "scale-100 opacity-100" : "scale-95 opacity-60",
                )}
              >
                <CaseSlide item={item} destaque={posicao === 0} />
              </li>
            ) : null,
          )}
        </ul>

        {/* Mobile: um card por vez. */}
        <div className="md:hidden">
          {noOffset(0) ? <CaseSlide item={noOffset(0)!} destaque /> : null}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <BotaoDoCarrossel rotulo={textos.anterior} onClick={() => irPara(indice - 1)}>
          <ChevronLeft size={18} aria-hidden="true" />
        </BotaoDoCarrossel>

        <p className="font-body text-fg-muted text-sm" aria-hidden="true">
          {indice + 1} / {total}
        </p>

        <BotaoDoCarrossel rotulo={textos.proximo} onClick={() => irPara(indice + 1)}>
          <ChevronRight size={18} aria-hidden="true" />
        </BotaoDoCarrossel>
      </div>
    </div>
  );
}

function BotaoDoCarrossel({
  rotulo,
  onClick,
  children,
}: {
  rotulo: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={rotulo}
      className="border-border bg-surface text-fg hover:bg-brand hover:border-brand hover:text-brand-fg flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
    >
      {children}
    </button>
  );
}

function CaseSlide({ item, destaque }: { item: Case; destaque: boolean }) {
  const href = item.detalhe ? `/cases/${item.slug}` : undefined;

  return (
    <Card
      as="article"
      className={cn(
        "relative flex h-full flex-col",
        destaque && "border-brand shadow-lg",
      )}
    >
      <p className="font-heading text-brand text-4xl font-bold">{item.resultado}</p>
      <Text size="sm" tone="muted" className="mt-1">
        {item.metrica}
      </Text>

      <Heading as="h3" level="card" className="mt-6">
        {href ? (
          <Link href={href} className="rounded-sm after:absolute after:inset-0">
            {item.empresa}
          </Link>
        ) : (
          item.empresa
        )}
      </Heading>

      <Text size="sm" tone="muted" className="mt-3 flex-1">
        {item.descricao}
      </Text>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  );
}
