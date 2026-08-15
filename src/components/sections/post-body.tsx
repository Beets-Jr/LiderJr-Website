import { Container, Foto, Heading, Section, Text } from "@/components/ui";
import type { BlocoDePost } from "@/types/post";

/**
 * Renderiza o corpo do artigo a partir dos blocos tipados do conteúdo.
 *
 * O `switch` é exaustivo: se um tipo novo de bloco for criado em
 * src/types/post.ts e esquecido aqui, o TypeScript acusa no build (o `never`
 * no final não compila).
 *
 * O texto roda em `width="prose"` (max-w-3xl). No protótipo o corpo do artigo
 * ia até 1280px de largura, sem medida de leitura.
 */
export function PostBody({
  blocos,
  resumo,
}: {
  blocos: BlocoDePost[];
  /** Parágrafo de abertura, exibido maior antes dos blocos. */
  resumo: string;
}) {
  return (
    <Section spacing="none" className="pt-16 pb-24">
      <Container width="prose">
        <Text size="lg" className="mb-8">
          {resumo}
        </Text>

        {blocos.map((bloco, indice) => (
          <Bloco key={indice} bloco={bloco} />
        ))}
      </Container>
    </Section>
  );
}

function Bloco({ bloco }: { bloco: BlocoDePost }) {
  switch (bloco.tipo) {
    case "subtitulo":
      return (
        <Heading as="h2" level="subsection" className="mt-10 mb-4">
          {bloco.texto}
        </Heading>
      );

    case "paragrafo":
      return <Text className="mb-6">{bloco.texto}</Text>;

    case "citacao":
      return (
        <figure className="border-brand mb-10 border-l-4 pl-6">
          <blockquote>
            <Text size="lg" family="serif" className="text-xl">
              {`“${bloco.texto}”`}
            </Text>
          </blockquote>
          {bloco.autor ? (
            <figcaption>
              <Text size="sm" tone="muted" className="mt-3">
                {bloco.autor}
              </Text>
            </figcaption>
          ) : null}
        </figure>
      );

    case "lista":
      return (
        <ul className="mb-10 flex flex-col gap-3">
          {bloco.itens.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="bg-brand mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
              />
              <Text as="span" size="sm">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      );

    case "listaNumerada":
      return (
        <ol className="mb-10 flex flex-col gap-4">
          {bloco.itens.map((item, indice) => (
            <li key={item.titulo} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="bg-brand/10 text-brand font-heading flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
              >
                {indice + 1}
              </span>
              <div>
                <Text weight="semibold" family="heading" className="mb-0.5">
                  {item.titulo}
                </Text>
                <Text size="sm" tone="muted">
                  {item.descricao}
                </Text>
              </div>
            </li>
          ))}
        </ol>
      );

    case "imagem":
      return (
        <figure className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
            <Foto imagem={bloco.imagem} sizes="(min-width: 768px) 768px, 100vw" />
          </div>
          {bloco.legenda ? (
            <figcaption>
              <Text size="sm" tone="muted" className="mt-3 text-center">
                {bloco.legenda}
              </Text>
            </figcaption>
          ) : null}
        </figure>
      );

    default: {
      // Se um tipo novo de bloco for criado e não tratado acima, isto quebra o build.
      const naoTratado: never = bloco;
      return naoTratado;
    }
  }
}
