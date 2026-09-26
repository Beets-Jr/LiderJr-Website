import { Heading, IconTile, StepMarker, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import { getIcone } from "@/lib/icones";
import type { Etapa } from "@/types/comum";

/**
 * A linha do tempo de etapas de um processo.
 *
 * O protótipo tinha DUAS versões quase iguais desta linha do tempo, com
 * estilos divergentes: a de /servicos usava círculos laranja com ícone e uma
 * linha conectora dourada (uma cor que não existe em nenhum outro lugar do
 * site); a da página de serviço usava círculos numerados com borda e linha
 * cinza. Aqui existe uma só, que mostra ícone quando o conteúdo informa um e
 * o número quando não informa.
 *
 * As etapas de serviço variam de 4 a 9 (ver documento "Descrição dos
 * Serviços"), então a grade não pode assumir uma linha só de 4 colunas: os
 * múltiplos de 3 (6, 9) usam 3 colunas por linha, o resto usa 4. A linha
 * conectora da versão numerada é desenhada etapa a etapa (não uma tarja única
 * atrás de tudo) para saber parar no fim de cada linha, sem atravessar a
 * quebra para a etapa de baixo.
 */
export function ProcessSteps({
  etapas,
  tone = "light",
}: {
  etapas: Etapa[];
  tone?: "light" | "onDark";
}) {
  const escuro = tone === "onDark";
  const comIcones = etapas.some((etapa) => etapa.icone);
  const colunas = etapas.length % 3 === 0 ? 3 : 4;

  return (
    <ol
      className={cn(
        "grid grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-x-6 lg:gap-y-16",
        colunas === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4",
      )}
    >
      {etapas.map((etapa, indice) => {
        const finalDaLinha =
          (indice + 1) % colunas === 0 || indice === etapas.length - 1;

        return (
          <li
            key={etapa.numero}
            className={cn(
              "group relative flex flex-col",
              comIcones ? "items-start" : "items-center text-center",
              // O traço laranja sai da borda direita do ícone (left-12), na
              // altura do centro dele (top-6). Nas etapas do meio ele atravessa
              // o gap e encosta no ícone seguinte (-right-6); na última, em vez
              // de parar seco, segue até o fim da coluna se desfazendo.
              comIcones &&
                "lg:after:absolute lg:after:top-6 lg:after:left-12 lg:after:h-px lg:after:content-['']",
              comIcones &&
                (indice === etapas.length - 1
                  ? "lg:after:from-brand lg:after:right-0 lg:after:bg-linear-to-r lg:after:to-transparent"
                  : "lg:after:bg-brand lg:after:-right-6"),
            )}
          >
            {/* Versão numerada: um traço por etapa, do centro do marcador ao
                centro do próximo — não desenha no fim de cada linha da grade. */}
            {!comIcones && !finalDaLinha && (
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-7 left-1/2 hidden h-px w-[calc(100%+1.5rem)] lg:block",
                  escuro ? "bg-border-on-dark" : "bg-border",
                )}
              />
            )}

            {etapa.icone ? (
              <IconTile
                icon={getIcone(etapa.icone)}
                tone="brandSolid"
                size="md"
                /* Traço preto dentro do círculo laranja. */
                className="rounded-full text-black"
              />
            ) : (
              <StepMarker numero={etapa.numero} />
            )}

            {etapa.icone ? (
              <span className="font-body text-brand mt-6 block text-xs font-semibold tracking-widest">
                {etapa.numero}
              </span>
            ) : null}

            <Heading
              as="h3"
              level="card"
              tone={escuro ? "onDark" : "default"}
              className={etapa.icone ? "mt-2" : "mt-6"}
            >
              {etapa.titulo}
            </Heading>

            <Text
              size="sm"
              tone={escuro ? "onDarkMuted" : "muted"}
              className={cn("mt-3", !comIcones && "max-w-65")}
            >
              {etapa.descricao}
            </Text>
          </li>
        );
      })}
    </ol>
  );
}
