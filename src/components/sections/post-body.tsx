import type { RenderableTreeNodes } from "@markdoc/markdoc";
import { Container, Section, Text } from "@/components/ui";
import { CorpoDeTexto } from "./corpo-de-texto";

/**
 * O artigo do post: o resumo como parágrafo de abertura e o texto do CMS.
 *
 * O texto roda em `width="prose"` (max-w-3xl). No protótipo o corpo do artigo
 * ia até 1280px de largura, sem medida de leitura.
 */
export function PostBody({
  corpo,
  resumo,
}: {
  corpo: RenderableTreeNodes;
  /** Parágrafo de abertura, exibido maior antes do texto. */
  resumo: string;
}) {
  return (
    <Section spacing="none" className="pt-16 pb-24">
      <Container width="prose">
        <Text size="lg" className="mb-8">
          {resumo}
        </Text>

        <CorpoDeTexto corpo={corpo} />
      </Container>
    </Section>
  );
}
