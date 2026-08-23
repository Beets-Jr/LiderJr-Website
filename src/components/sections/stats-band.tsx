"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import type { Estatistica } from "@/types/comum";

const DURACAO_MS = 2200;

/** Separa "+100" em prefixo "+", número 100 e sufixo "". "97%" → "", 97, "%". */
function separar(valor: string): { prefixo: string; numero: number; sufixo: string } {
  const partes = /^(\D*)(\d+)(\D*)$/.exec(valor);
  if (!partes) return { prefixo: "", numero: 0, sufixo: valor };
  return {
    prefixo: partes[1] ?? "",
    numero: Number(partes[2] ?? 0),
    sufixo: partes[3] ?? "",
  };
}

/**
 * Número que conta até o valor final.
 *
 * Só começa a contar quando entra na tela. No protótipo a animação disparava na
 * montagem do componente, então os contadores abaixo da dobra terminavam antes
 * de alguém vê-los. Quem prefere menos movimento (prefers-reduced-motion) vê o
 * número final direto.
 */
function NumeroAnimado({ valor }: { valor: string }) {
  const { prefixo, numero, sufixo } = separar(valor);
  const [atual, setAtual] = useState(0);
  const referencia = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento) return;

    let quadro = 0;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada?.isIntersecting) return;
        observador.disconnect();

        // Quem pediu menos movimento vê o número final direto.
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setAtual(numero);
          return;
        }

        const inicio = performance.now();
        const animar = (agora: number) => {
          const progresso = Math.min((agora - inicio) / DURACAO_MS, 1);
          const suavizado = 1 - Math.pow(2, -10 * progresso);
          setAtual(Math.round(numero * suavizado));
          if (progresso < 1) quadro = requestAnimationFrame(animar);
        };
        quadro = requestAnimationFrame(animar);
      },
      { threshold: 0.4 },
    );

    observador.observe(elemento);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(quadro);
    };
  }, [numero]);

  return (
    <span ref={referencia}>
      {/* O valor final fica disponível para leitores de tela desde o início. */}
      <span aria-hidden="true">{`${prefixo}${atual}${sufixo}`}</span>
      <span className="sr-only">{valor}</span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * A grade de números. `tone="onDark"` é a versão do hero; `light` é a faixa que
 * aparece no mobile, onde o hero não tem espaço para ela.
 */
export function StatsBand({
  estatisticas,
  tone = "onDark",
  className,
}: {
  estatisticas: Estatistica[];
  tone?: "onDark" | "light";
  className?: string;
}) {
  const escuro = tone === "onDark";

  return (
    <ul className={cn("grid grid-cols-2 gap-4", className)}>
      {estatisticas.map((estatistica, indice) => {
        // O primeiro card é sólido laranja; os demais seguem a superfície.
        const destaque = indice === 0;

        return (
          <li
            key={estatistica.rotulo}
            className={cn(
              "rounded-lg p-6",
              destaque && "bg-brand",
              // Sobre o escuro os cards são um véu, não uma placa: deixam
              // passar a foto e o brilho do hero. O borrão é de 2px — o mínimo
              // que ainda tira o detalhe fino da foto de trás do número, sem
              // que o vidro pareça fosco.
              !destaque &&
                escuro &&
                "bg-surface-veil border-border-on-dark border backdrop-blur-[2px]",
              !destaque && !escuro && "bg-surface border-border border shadow-sm",
            )}
          >
            <p
              className={cn(
                "font-heading mb-1 text-4xl font-bold",
                destaque ? "text-brand-fg" : escuro ? "text-on-dark" : "text-fg",
              )}
            >
              <NumeroAnimado valor={estatistica.valor} />
            </p>
            <p
              className={cn(
                "font-body text-sm",
                destaque
                  ? "text-brand-fg"
                  : escuro
                    ? "text-on-dark-muted"
                    : "text-fg-muted",
              )}
            >
              {estatistica.rotulo}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
