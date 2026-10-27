"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container, Foto, Section } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { ConteudoQuemSomos } from "@/types/paginas";
import { BotaoDoCarrossel } from "./cases-carousel";
import { SectionHeader } from "./section-header";

/** Intervalo da troca automática. */
const INTERVALO_MS = 10_000;
/** Depois de um clique nas setas, quanto tempo a troca automática espera. */
const ESPERA_APOS_CLIQUE_MS = 30_000;
/** Quantos logos aparecem lado a lado a partir de `md`. No mobile, um. */
const VISIVEIS = 3;
/** Duração do deslize — precisa bater com o `duration-700` da faixa. */
const DESLIZE_MS = 700;

/**
 * O carrossel de parceiros do Quem Somos: uma faixa com três logos lado a lado
 * (um no mobile) e setas dos dois lados. Cada passo desliza um logo só, e a
 * faixa dá a volta nos dois sentidos.
 *
 * Para a volta não "rebobinar" a faixa inteira, ela tem cópias dos últimos
 * logos antes do primeiro e dos primeiros depois do último. Quando o deslize
 * para numa cópia, a faixa salta sem animação para o logo real equivalente —
 * a imagem é a mesma, então ninguém vê o salto.
 *
 * Avança sozinho para a direita a cada 10s. Quem clica numa seta assume o
 * controle: a troca automática só volta 30s depois do último clique.
 *
 * Também para enquanto o ponteiro ou o foco do teclado estão sobre ele (dá
 * tempo de ler) e não anima para quem pede menos movimento.
 *
 * Parceiro sem logo aparece com o nome escrito, em tamanho de título.
 */
export function ParceirosCarousel({
  conteudo,
}: {
  conteudo: ConteudoQuemSomos["parceiros"];
}) {
  const empresas = conteudo.empresas;
  const total = empresas.length;
  // Com três ou menos, todos cabem na tela: nada gira e não há cópias.
  const gira = total > VISIVEIS;
  const copias = gira ? VISIVEIS : 0;
  const faixa = gira
    ? [...empresas.slice(-copias), ...empresas, ...empresas.slice(0, copias)]
    : empresas;

  /** Posição na faixa (com as cópias) do logo mais à esquerda. */
  const [posicao, setPosicao] = useState(copias);
  const [animar, setAnimar] = useState(true);
  const [pausado, setPausado] = useState(false);
  /**
   * Só depois do primeiro clique a região passa a anunciar a troca. Anunciar a
   * troca automática a cada 10s seria um leitor de tela falando sem parar.
   */
  const [interagiu, setInteragiu] = useState(false);
  const ultimoClique = useRef<number | null>(null);

  const naCopia = posicao < copias || posicao >= copias + total;

  // Um timer por troca: cada mudança de `posicao` (automática ou por clique)
  // reagenda a próxima. Depois de um clique a espera é o que falta para fechar
  // os 30s; fora isso, os 10s normais.
  useEffect(() => {
    if (!gira || pausado) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const desdeOClique =
      ultimoClique.current === null ? Infinity : Date.now() - ultimoClique.current;
    const espera = Math.max(INTERVALO_MS, ESPERA_APOS_CLIQUE_MS - desdeOClique);

    const timer = window.setTimeout(() => setPosicao((p) => p + 1), espera);
    return () => window.clearTimeout(timer);
  }, [posicao, pausado, gira]);

  // Terminado o deslize sobre uma cópia, salta sem animação para o real.
  useEffect(() => {
    if (!naCopia) return;
    const timer = window.setTimeout(() => {
      setAnimar(false);
      setPosicao((p) => copias + ((((p - copias) % total) + total) % total));
    }, DESLIZE_MS);
    return () => window.clearTimeout(timer);
  }, [naCopia, copias, total]);

  // Depois do salto, religa a animação. Dois quadros: o primeiro pinta a faixa
  // na posição nova sem transição; só então a transição volta.
  useEffect(() => {
    if (animar) return;
    let quadro = requestAnimationFrame(() => {
      quadro = requestAnimationFrame(() => setAnimar(true));
    });
    return () => cancelAnimationFrame(quadro);
  }, [animar]);

  if (total === 0) return null;

  function irPara(passo: 1 | -1) {
    // Durante o salto de volta, ignora o clique: avançar mais sairia da faixa.
    if (naCopia) return;
    ultimoClique.current = Date.now();
    setInteragiu(true);
    setPosicao((p) => p + passo);
  }

  return (
    <Section>
      <Container>
        <SectionHeader
          conteudo={{ eyebrow: conteudo.eyebrow, titulo: conteudo.titulo }}
          alinhamento="centro"
        />

        <div
          className="mx-auto mt-14 flex max-w-5xl items-center justify-between gap-4"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocus={() => setPausado(true)}
          onBlur={(evento) => {
            if (!evento.currentTarget.contains(evento.relatedTarget)) setPausado(false);
          }}
        >
          {gira ? (
            <BotaoDoCarrossel
              rotulo={conteudo.anterior}
              onClick={() => irPara(-1)}
              className="shrink-0"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </BotaoDoCarrossel>
          ) : null}

          <div
            role="region"
            aria-roledescription="carrossel"
            aria-label={conteudo.rotulo}
            aria-live={interagiu ? "polite" : "off"}
            className="w-full overflow-hidden"
          >
            {/* `--visiveis` dá a largura de cada logo e o tamanho do passo. */}
            <ul
              className={cn(
                "flex [--visiveis:1] md:[--visiveis:3]",
                !gira && "justify-center",
                animar &&
                  "transition-transform duration-700 ease-in-out motion-reduce:transition-none",
              )}
              style={{
                transform: `translateX(calc(-${posicao} * 100% / var(--visiveis)))`,
              }}
            >
              {faixa.map((empresa, indice) => {
                // No mobile só o primeiro dos três aparece; os outros dois
                // ficam fora da caixa, mas o leitor de tela ainda os lê.
                const visivel = indice >= posicao && indice < posicao + VISIVEIS;
                return (
                  <li
                    key={`${indice}-${empresa.nome}`}
                    aria-hidden={visivel ? undefined : "true"}
                    className="flex h-28 shrink-0 basis-[calc(100%/var(--visiveis))] items-center justify-center px-6 md:h-36"
                  >
                    {empresa.logo ? (
                      <Foto
                        imagem={empresa.logo}
                        preencher={false}
                        sizes="(min-width: 768px) 320px, 80vw"
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <span className="font-heading text-fg text-center text-3xl font-bold md:text-4xl">
                        {empresa.nome}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {gira ? (
            <BotaoDoCarrossel
              rotulo={conteudo.proximo}
              onClick={() => irPara(1)}
              className="shrink-0"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </BotaoDoCarrossel>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
