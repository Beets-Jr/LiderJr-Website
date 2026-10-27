import type { Imagem, LinkDeNavegacao, NomeDeIcone } from "./site";

/**
 * Peças de conteúdo que se repetem em várias páginas.
 * Se um formato aparece em dois lugares, o tipo dele mora aqui.
 */

/** Título e descrição que vão para o <title> e a meta description da página. */
export interface Metadados {
  /** Aparece na aba do navegador e no Google. Até ~60 caracteres. */
  titulo: string;
  /** Aparece embaixo do título no Google. Entre 120 e 160 caracteres. */
  descricao: string;
}

/** O bloco escuro no topo das páginas internas. */
export interface HeroDePagina {
  /** Rótulo pequeno em laranja, acima do título. */
  eyebrow: string;
  titulo: string;
  descricao: string;
  imagemDeFundo: Imagem;
}

/** Cabeçalho de uma seção: rótulo, título e, opcionalmente, texto e link. */
export interface CabecalhoDeSecao {
  eyebrow?: string;
  titulo: string;
  descricao?: string;
  /** Link do tipo "Ver todos →", no canto direito. */
  link?: LinkDeNavegacao;
}

/** Um depoimento de cliente. */
export interface Depoimento {
  texto: string;
  autor: string;
  /** Opcional: quando o depoimento é assinado só pela empresa, fica de fora. */
  cargo?: string;
  /** Duas letras exibidas no círculo. Ex.: "MA" para Marcos Andrade. */
  iniciais: string;
}

/** Uma seção de chamada para ação. */
export interface ChamadaParaAcao {
  eyebrow?: string;
  titulo: string;
  descricao: string;
  botaoPrimario: LinkDeNavegacao;
  botaoSecundario?: LinkDeNavegacao;
  /** Frase pequena abaixo dos botões. */
  observacao?: string;
}

/**
 * Título e texto acima do formulário de contato no fim de um case ou post.
 * Escritos no CMS, um por publicação.
 */
export interface ConviteDoFormulario {
  titulo: string;
  descricao: string;
}

/** Um passo de uma linha do tempo de processo. */
export interface Etapa {
  /** "01", "02"… */
  numero: string;
  titulo: string;
  descricao: string;
  icone?: NomeDeIcone;
}

/** Um número de destaque. Ex.: { valor: "+100", rotulo: "Projetos entregues" }. */
export interface Estatistica {
  valor: string;
  rotulo: string;
}

/** Um item de lista com ícone, título e descrição. */
export interface ItemComIcone {
  icone: NomeDeIcone;
  titulo: string;
  descricao: string;
}

/** Uma lista simples de marcadores, com título opcional. */
export interface ListaDeChecagem {
  titulo?: string;
  itens: string[];
}

export type { Imagem, LinkDeNavegacao, NomeDeIcone };
