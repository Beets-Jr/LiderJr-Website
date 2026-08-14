import { comoFundo, imagens } from "@/content/imagens";
import type { Material } from "@/types/material";
import type { ConteudoDeMateriais } from "@/types/paginas";

/** Textos da página /materiais. */
export const paginaDeMateriais: ConteudoDeMateriais = {
  metadados: {
    titulo: "Materiais",
    descricao:
      "Biblioteca gratuita de e-books, guias, planilhas e templates de gestão, processos, qualidade e finanças para pequenas e médias empresas.",
  },

  hero: {
    eyebrow: "Biblioteca Gratuita",
    titulo: "Diretório de Materiais",
    descricao:
      "Acesse e-books, guias, planilhas e templates práticos. Ferramentas reais estruturadas para impulsionar a gestão do seu negócio.",
    imagemDeFundo: comoFundo(imagens.analiseDeFluxoEmPapel),
  },

  filtro: {
    rotuloTodos: "Todos",
    rotuloAcessivel: "Filtrar materiais por categoria",
    vazio: {
      titulo: "Nenhum material encontrado",
      descricao: "Ainda não liberamos recursos para esta categoria. Fique de olho!",
    },
  },

  rotuloDoBotao: "Baixar Material",
  rotuloIndisponivel: "Em breve",
};

/**
 * ============================================================================
 * MATERIAIS
 * ============================================================================
 * PARA ADICIONAR UM MATERIAL: acrescente um item na lista abaixo.
 * PARA LIBERAR O DOWNLOAD: coloque o arquivo em public/materiais/ e preencha o
 * campo `arquivo` com o caminho, ex.: "/materiais/guia-lean.pdf".
 *
 * TODO: nenhum arquivo foi entregue ainda, então todos os botões aparecem
 * desabilitados. No protótipo eles pareciam ativos e não faziam nada.
 * Ver PENDENCIAS.md.
 * ============================================================================
 */
export const materiais: Material[] = [
  {
    slug: "guia-lean-manufacturing-pmes",
    titulo: "Guia completo de Lean Manufacturing para PMEs",
    resumo:
      "Um passo a passo prático para reduzir desperdícios e aumentar a eficiência da sua operação com os princípios do Lean.",
    tipo: "E-book",
    categoria: "Processos",
  },
  {
    slug: "planilha-controle-de-estoque-curva-abc",
    titulo: "Planilha de controle de estoque com Curva ABC",
    resumo:
      "Modelo pronto para classificar seus itens por importância e definir pontos de reposição inteligentes.",
    tipo: "Planilha",
    categoria: "Logística",
  },
  {
    slug: "checklist-implementacao-5s",
    titulo: "Checklist de implementação do 5S",
    resumo:
      "Roteiro simples para organizar o ambiente de trabalho e sustentar a metodologia 5S no dia a dia.",
    tipo: "Guia",
    categoria: "Qualidade",
  },
  {
    slug: "modelo-de-plano-de-negocios",
    titulo: "Modelo de plano de negócios",
    resumo:
      "Template editável para estruturar objetivos, análise de mercado, operações e projeções financeiras.",
    tipo: "Template",
    categoria: "Estratégia",
  },
  {
    slug: "webinar-indicadores-para-pmes",
    titulo: "Indicadores de desempenho essenciais para PMEs",
    resumo:
      "Webinar gravado sobre os KPIs que toda pequena e média empresa deveria acompanhar de perto.",
    tipo: "Webinar",
    categoria: "Gestão",
  },
  {
    slug: "guia-de-precificacao-e-custos",
    titulo: "Guia de precificação e formação de custos",
    resumo:
      "Conceitos e uma calculadora simples para precificar produtos e serviços com margem saudável.",
    tipo: "E-book",
    categoria: "Financeiro",
  },
];

export function getTodosMateriais(): Material[] {
  return materiais;
}
