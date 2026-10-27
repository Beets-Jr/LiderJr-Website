import { Container, Section } from "@/components/ui";
import type { DetalheDeCase } from "@/types/case";
import { CorpoDeTexto } from "./corpo-de-texto";

/**
 * O miolo da página de case: o texto escrito no CMS, na largura inteira do
 * container — a mesma do link "Voltar" e do CTA.
 */
export function CorpoDoCase({ detalhe }: { detalhe: DetalheDeCase }) {
  return (
    <Section spacing="tight">
      <Container>
        {/* O texto costuma abrir com um subtítulo ("O Desafio"): sem a margem de
            cima dele, que aqui sobraria logo abaixo do "Voltar". */}
        <div className="[&>h2:first-child]:mt-0">
          <CorpoDeTexto corpo={detalhe.corpo} />
        </div>
      </Container>
    </Section>
  );
}
