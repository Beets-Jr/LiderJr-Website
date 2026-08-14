import { Heading, IconTile, StepMarker, Text } from "@/components/ui";
import { getIcone } from "@/lib/icones";
import { cn } from "@/lib/cn";
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

  return (
    <div className="relative">
      {/* Linha conectora, só no desktop, atrás dos marcadores. */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute top-7 right-[12.5%] left-[12.5%] hidden h-px lg:block",
          escuro ? "bg-border-on-dark" : "bg-border",
        )}
      />

      <ol className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {etapas.map((etapa) => (
          <li
            key={etapa.numero}
            className={cn(
              "group flex flex-col",
              comIcones ? "items-start" : "items-center text-center",
            )}
          >
            {etapa.icone ? (
              <IconTile
                icon={getIcone(etapa.icone)}
                tone="brandSolid"
                size="md"
                className="rounded-full"
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
        ))}
      </ol>
    </div>
  );
}
