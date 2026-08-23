import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: GESTÃO DA QUALIDADE
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO. Os textos abaixo foram escritos para dar corpo à
 * página e mostrar o layout funcionando — descrevem o serviço de forma genérica
 * e precisam ser revisados pela Líder Jr. antes de publicar. Ver PENDENCIAS.md.
 *
 * O `depoimento` é FORJADO: pessoa e fala inventadas, a pedido, só para a seção
 * existir enquanto não há uma citação real. TROCAR ANTES DE PUBLICAR.
 *
 * Estrutura idêntica à de mapeamento-de-processos.ts, o modelo do site.
 * ============================================================================
 */
export const gestaoDaQualidade: Servico = {
  slug: "gestao-da-qualidade",
  // O \n força a quebra no card de /servicos; nos outros lugares vira espaço.
  titulo: "Gestão da\nQualidade",
  chamada: "Eleve o padrão e conquiste a confiança do mercado!",
  descricao:
    "Implementamos ferramentas de controle de qualidade como PDCA, 5S e FMEA para elevar o padrão dos seus processos e produtos.",
  tags: ["PDCA", "5S", "FMEA"],
  icone: "award",
  imagem: imagens.analiseDeFluxoEmPapel,

  detalhe: {
    metadados: {
      titulo: "Gestão da Qualidade",
      descricao:
        "Implantação de PDCA, 5S e FMEA para reduzir retrabalho, padronizar a rotina e preparar a empresa para auditorias e exigências de clientes.",
    },

    imagemDeFundo: comoFundo(imagens.analiseDeFluxoEmPapel),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Qualidade que se sustenta na rotina",
      paragrafos: [
        "Antes de propor controles, entendemos onde a qualidade se perde: retrabalho, devoluções, reclamações recorrentes e tarefas que dependem sempre da mesma pessoa para dar certo.",
        "A partir desse diagnóstico implantamos ferramentas consolidadas — PDCA para o ciclo de melhoria, 5S para a organização do ambiente e FMEA para antecipar falhas — sempre no tamanho da sua operação, sem burocracia que ninguém vai manter.",
      ],
      imagem: imagens.apresentacaoParaEquipe,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da implantação",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico",
          descricao:
            "Levantamento dos pontos de falha, das reclamações recorrentes e dos controles que já existem na empresa.",
        },
        {
          numero: "02",
          titulo: "Padronização",
          descricao:
            "Definição do jeito certo de executar cada tarefa crítica, documentado em instruções simples e visuais.",
        },
        {
          numero: "03",
          titulo: "Implantação",
          descricao:
            "Aplicação do 5S e do ciclo PDCA junto à equipe, com acompanhamento em campo durante a adaptação.",
        },
        {
          numero: "04",
          titulo: "Controle",
          descricao:
            "Indicadores e rotina de verificação para que o padrão continue de pé depois que o projeto termina.",
        },
      ],
    },

    resultados: {
      titulo: "Por que investir em qualidade?",
      descricao:
        "Qualidade não é um selo na parede: é o que evita o custo silencioso do refazer e sustenta a confiança de quem compra de você.",
      itens: [
        {
          icone: "quedaGrafico",
          titulo: "Menos Retrabalho",
          descricao:
            "Reduzimos perdas, devoluções e horas gastas para corrigir o que já deveria ter saído certo da primeira vez.",
        },
        {
          icone: "escudo",
          titulo: "Padrão Previsível",
          descricao:
            "O resultado deixa de depender de quem está no turno: cada tarefa crítica passa a ter um jeito definido de ser feita.",
        },
        {
          icone: "estrela",
          titulo: "Credibilidade no Mercado",
          descricao:
            "Controles documentados são o que sustentam a sua palavra em auditorias, exigências de clientes e novos contratos.",
        },
      ],
    },

    // ⚠️ DEPOIMENTO FORJADO — pessoa e fala inventadas, a pedido, só para a
    // seção aparecer enquanto não há depoimento real. TROCAR ANTES DE PUBLICAR.
    depoimento: {
      texto:
        "A gente já sabia que o retrabalho estava pesando, mas não sabia onde. Depois da padronização, o refazer virou exceção — e a equipe passou a cobrar o padrão sozinha, sem ninguém em cima.",
      autor: "Carla Menezes",
      cargo: "Coordenadora de Produção, Indústria de Alimentos",
      iniciais: "CM",
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Pronto para elevar o padrão da sua operação?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Diagnóstico dos pontos de falha da operação",
          "Instruções de trabalho das tarefas críticas",
          "Plano de implantação do 5S e do ciclo PDCA",
          "Indicadores de qualidade para acompanhar depois",
        ],
      },
    },
  },
};
