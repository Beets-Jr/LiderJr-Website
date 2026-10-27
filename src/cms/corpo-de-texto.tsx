import { fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";
import { ImageIcon, ListOrdered } from "lucide-react";

/**
 * ============================================================================
 * O CORPO DE TEXTO NO CMS — posts do blog e cases
 * ============================================================================
 * O texto é escrito num editor contínuo (Markdoc — Markdown com blocos
 * próprios) e gravado como .mdoc em content/blog/ e content/cases/. Este
 * arquivo define o que o editor oferece; src/lib/corpo-de-texto.ts usa as
 * mesmas definições para ler o arquivo, e
 * src/components/sections/corpo-de-texto.tsx desenha cada parte com os
 * estilos do site.
 *
 * Blog e cases têm o mesmo editor. Só muda a pasta das imagens dos blocos.
 *
 * Ligado no editor: subtítulo, negrito, itálico, link, citação e listas.
 * Desligado de propósito: imagem solta (use "Imagem com legenda"), tabela,
 * código, tachado e linha divisória — o site não tem estilo para eles.
 * ============================================================================
 */

export const OPCOES_DO_CORPO = {
  // Só um nível: o "subtítulo" do texto, que vira <h2>.
  heading: [2],
  bold: true,
  italic: true,
  link: true,
  blockquote: true,
  orderedList: true,
  unorderedList: true,
  image: false,
  table: false,
  code: false,
  codeBlock: false,
  strikethrough: false,
  divider: false,
} as const;

/** Onde ficam as imagens dos blocos: `public/imagens/<pasta>/<slug>/…`. */
export type PastaDeImagens = "blog" | "cases";

/**
 * Os dois blocos próprios do editor. A pasta só muda onde o CMS grava a imagem
 * enviada; o resto é igual para blog e cases.
 */
export function componentesDoCorpo(pasta: PastaDeImagens) {
  return {
    imagemComLegenda: block({
      label: "Imagem com legenda",
      description: "Uma imagem na largura do texto, com legenda opcional embaixo.",
      icon: <ImageIcon />,
      schema: {
        imagem: fields.image({
          label: "Imagem",
          directory: `public/imagens/${pasta}`,
          publicPath: `/imagens/${pasta}/`,
          validation: { isRequired: true },
        }),
        legenda: fields.text({ label: "Legenda (opcional)" }),
      },
    }),

    listaNumerada: block({
      label: "Lista numerada com títulos",
      description:
        "Itens numerados, cada um com um título em destaque e uma descrição.",
      icon: <ListOrdered />,
      schema: {
        itens: fields.array(
          fields.object({
            titulo: fields.text({ label: "Título", validation: { isRequired: true } }),
            descricao: fields.text({
              label: "Descrição",
              multiline: true,
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Itens",
            itemLabel: (item) => item.fields.titulo.value || "Item",
            validation: { length: { min: 1 } },
          },
        ),
      },
    }),
  };
}

/** O campo do CMS, pronto para o schema de uma coleção. */
export function campoDoCorpo(args: {
  label: string;
  description?: string;
  pasta: PastaDeImagens;
}) {
  return fields.markdoc({
    label: args.label,
    description: args.description,
    extension: "mdoc",
    options: OPCOES_DO_CORPO,
    components: componentesDoCorpo(args.pasta),
  });
}
