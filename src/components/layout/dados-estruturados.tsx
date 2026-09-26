import type { NoDeDados } from "@/lib/dados-estruturados";

/**
 * Publica os dados estruturados da página num <script type="application/ld+json">,
 * como recomenda a documentação do Next. Os nós vão juntos num `@graph`, para
 * poderem se referir uns aos outros pelo `@id`. Ver lib/dados-estruturados.ts.
 *
 * O `<` é escapado para que um texto de conteúdo nunca feche a tag <script>.
 */
export function DadosEstruturados({ nos }: { nos: NoDeDados[] }) {
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": nos });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json.replace(/</g, "\\u003c") }}
    />
  );
}
