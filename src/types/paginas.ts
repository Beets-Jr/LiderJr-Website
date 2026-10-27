import type {
  CabecalhoDeSecao,
  ChamadaParaAcao,
  Depoimento,
  Estatistica,
  Etapa,
  HeroDePagina,
  Imagem,
  ItemComIcone,
  LinkDeNavegacao,
  ListaDeChecagem,
  Metadados,
  NomeDeIcone,
} from "./comum";

/**
 * Tipos do conteúdo de cada página. Um por arquivo em src/content/.
 */

/* -------------------------------------------------------------------------- */
/* Home                                                                        */
/* -------------------------------------------------------------------------- */

/**
 * Uma empresa da faixa de clientes da Home.
 *
 * O `logo` é opcional de propósito: enquanto o arquivo não existir, a faixa
 * mostra o nome escrito. Assim que a imagem entrar no conteúdo (PNG ou SVG,
 * qualquer um serve), ela substitui o texto sem mudança de código.
 */
export interface Cliente {
  nome: string;
  logo?: Imagem;
}

export interface ConteudoDaHome {
  metadados: Metadados;

  hero: {
    /** A primeira palavra do título sai em laranja. */
    tituloDestaque: string;
    titulo: string;
    descricao: string;
    botaoPrimario: LinkDeNavegacao;
    botaoSecundario: LinkDeNavegacao;
    imagem: Imagem;
  };

  estatisticas: Estatistica[];

  servicos: CabecalhoDeSecao;

  sobre: CabecalhoDeSecao & {
    paragrafos: string[];
    checklist: ListaDeChecagem;
    link: LinkDeNavegacao;
    imagem: Imagem;
    selo: Estatistica;
  };

  clientes: CabecalhoDeSecao & {
    /** Descrição para leitores de tela do carrossel de logos. */
    rotulo: string;
    /** Duas fileiras que rolam em direções opostas. */
    linhaSuperior: Cliente[];
    linhaInferior: Cliente[];
  };

  cases: CabecalhoDeSecao & {
    /** Rótulos do carrossel. `anterior`, `proximo` e `regiao` são para leitores
     *  de tela; `rotuloComPagina` é o link do card em destaque. */
    carrossel: {
      anterior: string;
      proximo: string;
      regiao: string;
      rotuloComPagina: string;
    };
  };

  blog: CabecalhoDeSecao;

  /** O CTA final: depoimento à esquerda, chamada à direita. */
  ctaFinal: {
    depoimento: Depoimento;
    chamada: ChamadaParaAcao;
  };
}

/* -------------------------------------------------------------------------- */
/* Quem Somos                                                                  */
/* -------------------------------------------------------------------------- */

export interface Filiacao {
  nome: string;
  paragrafos: string[];
  logo: Imagem;
}

export interface PilarDeCultura {
  /** Código no canto do card, estilo desenho técnico. Ex.: "M / 01". */
  codigo: string;
  icone: NomeDeIcone;
  titulo: string;
  /** Um parágrafo (Missão, Visão) ou uma lista (Valores) — use um ou outro. */
  descricao?: string;
  itens?: string[];
}

export interface ConteudoQuemSomos {
  metadados: Metadados;
  hero: HeroDePagina;

  historia: CabecalhoDeSecao & {
    paragrafos: string[];
    imagem: Imagem;
  };

  cultura: CabecalhoDeSecao & {
    pilares: PilarDeCultura[];
  };

  filiacoes: CabecalhoDeSecao & {
    itens: Filiacao[];
  };

  parceiros: CabecalhoDeSecao & {
    /** Descrição para leitores de tela do carrossel. */
    rotulo: string;
    /** Rótulos das setas, para leitores de tela. */
    anterior: string;
    proximo: string;
    empresas: Cliente[];
  };
}

/* -------------------------------------------------------------------------- */
/* Listagens                                                                   */
/* -------------------------------------------------------------------------- */

/** Rótulos das listagens que têm filtro por categoria. */
export interface TextosDeFiltro {
  /** Nome da opção que mostra tudo. Ex.: "Todos". */
  rotuloTodos: string;
  /** Descrição do grupo de botões para leitores de tela. */
  rotuloAcessivel: string;
  /** Mensagem quando nenhum item bate com o filtro. */
  vazio: { titulo: string; descricao: string };
}

/** Rótulos do campo de busca de uma listagem. */
export interface TextosDeBusca {
  /** Nome do campo para leitores de tela. */
  rotulo: string;
  placeholder: string;
  /** Anúncio para leitores de tela: "{n} artigos encontrados". */
  resultados: { um: string; varios: string };
  /** Mensagem quando nenhum item bate com a busca. */
  vazio: { titulo: string; descricao: string };
}

export interface ConteudoDeServicos {
  metadados: Metadados;
  hero: HeroDePagina;
  /** Texto do botão dentro de cada card. */
  rotuloDoCard: string;
  /**
   * O botão dos serviços que ainda não têm página própria. Sem página não há
   * para onde o card apontar, então o botão leva ao contato em vez de sumir e
   * deixar o card sem saída.
   */
  botaoSemPagina: LinkDeNavegacao;
  processo: CabecalhoDeSecao & {
    etapas: Etapa[];
  };
}

export interface ConteudoDeCases {
  metadados: Metadados;
  hero: HeroDePagina;
  filtro: TextosDeFiltro;
  /** Texto do link do card. */
  rotuloComPagina: string;
  /** Rótulos usados nas páginas de case individuais. */
  navegacaoDeDetalhe: TextosDeNavegacaoDeDetalhe;
  /**
   * Os dois botões do convite no fim da página de case. O texto do convite é
   * escrito por case, no CMS; os botões são navegação do site. O secundário
   * aponta para o serviço que o case indicar — daí só o rótulo morar aqui.
   */
}

export interface ConteudoDeMateriais {
  metadados: Metadados;
  hero: HeroDePagina;
  /** Dois filtros que se combinam: tipo (E-book, Planilha…) e categoria. */
  filtro: Omit<TextosDeFiltro, "rotuloAcessivel"> & {
    tipo: { rotulo: string; rotuloAcessivel: string };
    categoria: { rotulo: string; rotuloAcessivel: string };
  };
  rotuloDoBotao: string;
}

export interface ConteudoDoBlog {
  metadados: Metadados;
  hero: HeroDePagina;
  filtro: TextosDeFiltro;
  /** O campo de busca por título, na barra de filtros. */
  busca: TextosDeBusca;
  rotuloDoLink: string;
  /** Rótulo do "Artigo •" acima do título, na página do post. */
  rotuloDoArtigo: string;
  /** Rótulos usados nas páginas de post individuais. */
  navegacaoDeDetalhe: TextosDeNavegacaoDeDetalhe;
  /**
   * Os dois botões do CTA no fim de todo artigo. O título e o texto do CTA são
   * escritos por post, no CMS; os botões são navegação do site e valem para
   * todos — por isso moram aqui, e não em cada publicação.
   */
}

/* -------------------------------------------------------------------------- */
/* Fale Conosco                                                                */
/* -------------------------------------------------------------------------- */

/** Um campo do formulário de contato. */
export interface CampoDoFormulario {
  /** Vira o `name` do campo e o `id` da label. Use letras minúsculas sem acento. */
  nome: string;
  label: string;
  placeholder: string;
  tipo: "texto" | "email" | "telefone" | "textarea";
  obrigatorio: boolean;
  /** Mensagem exibida quando o campo é obrigatório e está vazio. */
  mensagemDeErro: string;
  /** Ocupa a linha inteira no desktop. */
  larguraTotal?: boolean;
}

export interface ConteudoFaleConosco {
  metadados: Metadados;
  hero: HeroDePagina;

  informacoes: CabecalhoDeSecao & {
    /** Texto abaixo do telefone e do e-mail, apontando para o formulário. */
    orientacao?: string;
  };

  formulario: {
    titulo: string;
    campos: CampoDoFormulario[];
    rotuloDoBotao: string;
    rotuloEnviando: string;
    /** Mensagem de sucesso após o envio. */
    sucesso: string;
    /** Mensagem quando o e-mail digitado é inválido. */
    emailInvalido: string;
    /** Mensagem quando o envio falha (servidor ou ActiveCampaign fora do ar). */
    erroNoEnvio: string;
  };
}

/* -------------------------------------------------------------------------- */
/* Blocos reutilizados entre páginas de detalhe                                */
/* -------------------------------------------------------------------------- */

/** Rótulos dos blocos "Voltar para…" e "Conheça outros…". */
export interface TextosDeNavegacaoDeDetalhe {
  voltar: LinkDeNavegacao;
  relacionados: { titulo: string; rotuloDoLink: string };
}

export type { ItemComIcone };
