import { fields } from "@keystatic/core";
import Markdoc, {
  Tag,
  type Config,
  type Node,
  type RenderableTreeNodes,
} from "@markdoc/markdoc";
import { componentesDoCorpo, OPCOES_DO_CORPO } from "@/cms/corpo-de-texto";
import { montarImagem } from "@/lib/imagem";

/**
 * ============================================================================
 * LEITURA DO CORPO DE TEXTO — posts do blog e cases
 * ============================================================================
 * Converte o texto escrito no editor do CMS (Markdoc, ver
 * src/cms/corpo-de-texto.tsx) na árvore que
 * src/components/sections/corpo-de-texto.tsx desenha. Roda só no servidor:
 * mede as imagens lendo os arquivos em public/.
 * ============================================================================
 */

/**
 * Como o Markdoc lê o corpo. As opções e os blocos próprios são os mesmos que o
 * editor do CMS oferece — a pasta das imagens não muda a leitura, por isso
 * basta a do blog. `render` dá a cada parte o nome do componente que a desenha.
 */
const CONFIG_BASE = fields.markdoc.createMarkdocConfig({
  options: OPCOES_DO_CORPO,
  components: componentesDoCorpo("blog"),
  render: {
    nodes: {
      heading: "Subtitulo",
      paragraph: "Paragrafo",
      blockquote: "Citacao",
      list: "Lista",
      item: "ItemDeLista",
      link: "Link",
    },
    tags: {
      imagemComLegenda: "ImagemComLegenda",
      listaNumerada: "ListaNumerada",
    },
  },
});

/**
 * Três nós do Markdoc ignoram o `render` e montam a tag sozinhos: o título
 * (`h1`…`h6`), a lista (`ul`/`ol`) e o documento (`article`). Aqui o título
 * sai como `Subtitulo`, a lista como `Lista` (com `ordered`), e o documento
 * devolve só o conteúdo — as páginas já têm o próprio <article>.
 */
const CONFIG_DO_CORPO: Config = {
  ...CONFIG_BASE,
  nodes: {
    ...CONFIG_BASE.nodes,
    heading: {
      ...CONFIG_BASE.nodes?.heading,
      transform(node, config) {
        return new Tag(
          "Subtitulo",
          node.transformAttributes(config),
          node.transformChildren(config),
        );
      },
    },
    list: {
      ...CONFIG_BASE.nodes?.list,
      transform(node, config) {
        return new Tag(
          "Lista",
          { ordered: Boolean(node.attributes.ordered) },
          node.transformChildren(config),
        );
      },
    },
    document: {
      ...CONFIG_BASE.nodes?.document,
      transform(node, config) {
        return node.transformChildren(config);
      },
    },
  },
};

/**
 * Valida e transforma o corpo. Um arquivo com erro (um bloco que não existe,
 * um atributo faltando) faz o build falhar, em vez de publicar uma página
 * torta.
 *
 * As imagens já saem daqui medidas (`montarImagem` lê o arquivo em public/) e
 * com o `alt`: a legenda, ou `altPadrao` (o título da publicação) sem legenda.
 *
 * @param origem quem é o dono do texto, para a mensagem de erro. Ex.: 'Post "lean"'.
 */
export function montarCorpoDeTexto(
  node: Node,
  { origem, altPadrao }: { origem: string; altPadrao: string },
): RenderableTreeNodes {
  const erros = Markdoc.validate(node, CONFIG_DO_CORPO).filter(
    (e) => e.error.level === "error" || e.error.level === "critical",
  );
  if (erros.length > 0) {
    const detalhes = erros.map((e) => `linha ${e.lines[0]}: ${e.error.message}`);
    throw new Error(`${origem}: corpo inválido.\n${detalhes.join("\n")}`);
  }

  const arvore = Markdoc.transform(node, CONFIG_DO_CORPO);
  medirImagens(arvore, altPadrao);
  // A árvore do Markdoc é feita de instâncias de `Tag`, e o Next só passa
  // objetos simples para componentes de cliente (as listagens são). O
  // JSON tira a classe e mantém a marca `$$mdtype`, que é o que o renderer
  // do Markdoc confere.
  return JSON.parse(JSON.stringify(arvore)) as RenderableTreeNodes;
}

function medirImagens(no: RenderableTreeNodes, titulo: string): void {
  if (Array.isArray(no)) {
    for (const item of no) medirImagens(item, titulo);
    return;
  }
  if (!Tag.isTag(no)) return;
  if (no.name === "ImagemComLegenda") {
    const { imagem, legenda } = no.attributes as { imagem: string; legenda?: string };
    no.attributes.imagem = montarImagem(imagem, legenda || titulo);
  }
  for (const filho of no.children) medirImagens(filho, titulo);
}
