/**
 * Tipos dos dados globais do site — os que aparecem em mais de uma página.
 * O conteúdo correspondente vive em src/content/site.ts.
 */

/** Um link de navegação. `href` é sempre uma rota interna ("/servicos"). */
export interface LinkDeNavegacao {
  label: string;
  href: string;
}

/** Um link externo (redes sociais, sites de parceiros). */
export interface LinkExterno {
  label: string;
  href: string;
  /** Nome do ícone do lucide-react. Ver src/lib/icones.ts. */
  icone: NomeDeIcone;
}

/**
 * Nomes de ícone permitidos. O tipo é fechado de propósito: se alguém escrever
 * um nome que não existe, o TypeScript acusa antes do build.
 */
export type NomeDeIcone =
  | "alvo"
  | "award"
  | "bussola"
  | "calendario"
  | "check"
  | "colunas"
  | "documento"
  | "download"
  | "escudo"
  | "estrela"
  | "facebook"
  | "grafico"
  | "instagram"
  | "lampada"
  | "linkedin"
  | "livro"
  | "lupa"
  | "email"
  | "pessoas"
  | "quedaGrafico"
  | "relogio"
  | "tag"
  | "telefone"
  | "tendencia"
  | "barras"
  | "calculadora"
  | "caixa"
  | "carteira"
  | "cifrao"
  | "fluxo"
  | "listaDeChecagem"
  | "megafone"
  | "olho"
  | "pizza"
  | "raio"
  | "rota"
  | "velocimetro";

/** Uma imagem. O `alt` é obrigatório no tipo — não dá para esquecer. */
export interface Imagem {
  /** Caminho a partir de public/, ex.: "/imagens/home/hero.jpg". */
  src: string;
  /** Descrição para leitores de tela. Obrigatório. */
  alt: string;
  largura: number;
  altura: number;
}

/** Um item de contato exibido com ícone. */
export interface ItemDeContato {
  icone: NomeDeIcone;
  /** Nome do canal, ex.: "Telefone". Exibido na página Fale Conosco. */
  rotulo: string;
  /** O que o usuário lê, ex.: "(15) 99827-7936". */
  texto: string;
  /** Para onde vai o clique, ex.: "tel:+5515998277936". */
  href: string;
}

export interface ColunaDoRodape {
  titulo: string;
  links: LinkDeNavegacao[];
}

/** Um grupo de links no submenu do menu — ex.: os serviços de um grupo. */
export interface GrupoDeLinks {
  titulo: string;
  links: LinkDeNavegacao[];
}

export interface ConteudoDoSite {
  /** Nome curto, usado no logo e no rodapé. */
  nome: string;
  /** Nome por extenso, usado em textos e metadata. */
  nomeCompleto: string;
  /**
   * Título padrão do site: aparece na aba do navegador, no Google e na imagem
   * exibida ao compartilhar o link.
   */
  tituloPadrao: string;
  /** Uma frase sobre a empresa. Usada como descrição padrão de SEO. */
  descricao: string;
  /** URL de produção, sem barra no final. Usada em sitemap e Open Graph. */
  url: string;

  contato: {
    telefone: ItemDeContato;
    email: ItemDeContato;
  };

  whatsapp: {
    /** Só dígitos, com DDI e DDD: "5515998277936". */
    numero: string;
    /** Mensagem que já vem preenchida ao abrir a conversa. */
    mensagem: string;
    /** Rótulo para leitores de tela. */
    rotulo: string;
  };

  redes: LinkExterno[];

  /** Links do menu principal, na ordem em que aparecem. */
  navegacao: LinkDeNavegacao[];

  /** O botão de destaque no canto direito do menu. */
  ctaDoMenu: LinkDeNavegacao;

  rodape: {
    colunas: ColunaDoRodape[];
    tituloColunaServicos: string;
    linkVerTodosServicos: LinkDeNavegacao;
    tituloContato: string;
    copyright: string;
    selo: string;
  };

  /** Texto do link que pula direto para o conteúdo (acessibilidade). */
  pularParaConteudo: string;

  /** A página exibida quando o endereço não existe. */
  naoEncontrado: {
    codigo: string;
    titulo: string;
    descricao: string;
    botao: LinkDeNavegacao;
  };
}
