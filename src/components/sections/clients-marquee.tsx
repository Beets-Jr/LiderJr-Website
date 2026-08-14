import { Section } from "@/components/ui";
import type { ConteudoDaHome } from "@/types/paginas";

/**
 * As duas fileiras de nomes de clientes que deslizam em sentidos opostos.
 *
 * A animação é CSS puro (ver globals.css) e pausa quando o mouse está em cima.
 * A lista é duplicada para o loop ficar contínuo; a cópia é escondida dos
 * leitores de tela para os nomes não serem lidos duas vezes.
 */
export function ClientsMarquee({ conteudo }: { conteudo: ConteudoDaHome["clientes"] }) {
  return (
    <Section tone="muted" spacing="tight" className="overflow-hidden">
      <h2 className="sr-only">{conteudo.rotulo}</h2>

      <div className="flex flex-col gap-6">
        <Fileira nomes={conteudo.linhaSuperior} sentido="esquerda" />
        <Fileira nomes={conteudo.linhaInferior} sentido="direita" />
      </div>
    </Section>
  );
}

function Fileira({
  nomes,
  sentido,
}: {
  nomes: string[];
  sentido: "esquerda" | "direita";
}) {
  return (
    <div className="group flex overflow-hidden">
      <ul
        className={
          sentido === "esquerda"
            ? "animate-marquee-left flex shrink-0 group-hover:[animation-play-state:paused]"
            : "animate-marquee-right flex shrink-0 group-hover:[animation-play-state:paused]"
        }
      >
        {[...nomes, ...nomes].map((nome, indice) => (
          <li
            key={`${nome}-${indice}`}
            aria-hidden={indice >= nomes.length ? "true" : undefined}
            className="font-heading text-fg-muted min-w-50 shrink-0 px-8 text-center text-lg font-bold whitespace-nowrap"
          >
            {nome}
          </li>
        ))}
      </ul>
    </div>
  );
}
