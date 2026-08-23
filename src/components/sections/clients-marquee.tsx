import { Container, Foto, Section } from "@/components/ui";
import type { Cliente, ConteudoDaHome } from "@/types/paginas";
import { SectionHeader } from "./section-header";

/**
 * As duas fileiras de clientes que deslizam em sentidos opostos.
 *
 * Cada item mostra o logo quando o conteúdo traz um (PNG ou SVG) e o nome
 * escrito enquanto não trouxer — ver o comentário em src/content/home.ts.
 *
 * A animação é CSS puro (ver globals.css) e não para no hover, por decisão de
 * projeto. Quem pede menos movimento (`prefers-reduced-motion`) continua vendo
 * a fileira parada: a regra global zera a duração e o número de repetições.
 *
 * A lista é duplicada para o loop ficar contínuo; a cópia é escondida dos
 * leitores de tela para os clientes não serem anunciados duas vezes.
 */
export function ClientsMarquee({ conteudo }: { conteudo: ConteudoDaHome["clientes"] }) {
  return (
    <Section tone="muted" className="overflow-hidden">
      <Container>
        <SectionHeader
          conteudo={{ eyebrow: conteudo.eyebrow, titulo: conteudo.titulo }}
          alinhamento="centro"
        />
      </Container>

      <div
        role="group"
        aria-label={conteudo.rotulo}
        className="mt-14 flex flex-col gap-6"
      >
        <Fileira clientes={conteudo.linhaSuperior} sentido="esquerda" />
        <Fileira clientes={conteudo.linhaInferior} sentido="direita" />
      </div>
    </Section>
  );
}

function Fileira({
  clientes,
  sentido,
}: {
  clientes: Cliente[];
  sentido: "esquerda" | "direita";
}) {
  return (
    <div className="flex overflow-hidden">
      <ul
        className={
          sentido === "esquerda"
            ? "animate-marquee-left flex shrink-0"
            : "animate-marquee-right flex shrink-0"
        }
      >
        {[...clientes, ...clientes].map((cliente, indice) => (
          <li
            key={`${cliente.nome}-${indice}`}
            aria-hidden={indice >= clientes.length ? "true" : undefined}
            className="flex h-16 min-w-50 shrink-0 items-center justify-center px-8"
          >
            {cliente.logo ? (
              <Foto
                imagem={cliente.logo}
                preencher={false}
                sizes="200px"
                className="max-h-full w-auto object-contain"
              />
            ) : (
              <span className="font-heading text-fg-muted text-center text-lg font-bold whitespace-nowrap">
                {cliente.nome}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
