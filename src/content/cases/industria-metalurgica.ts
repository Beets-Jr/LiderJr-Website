import { comoFundo, imagens } from "@/content/imagens";
import type { Case } from "@/types/case";

/**
 * ============================================================================
 * CASE: INDÚSTRIA METALÚRGICA
 * ============================================================================
 * Modelo para todas as páginas de case. Para criar outra, copie este arquivo,
 * troque o conteúdo e registre em ./index.ts.
 *
 * As seções em prosa ficam no array `secoes` — pode ter quantas quiser, na
 * ordem em que devem aparecer.
 * ============================================================================
 */
export const industriaMetalurgica: Case = {
  slug: "industria-metalurgica",
  empresa: "Indústria metalúrgica",
  resultado: "-35%",
  metrica: "Tempo de produção",
  descricao:
    "Mapeamento e padronização dos processos resultando em entregas mais rápidas e organizadas.",
  tags: ["Mapeamento", "Qualidade"],
  categoria: "Qualidade",
  imagem: imagens.analiseDeFluxoEmPapel,

  detalhe: {
    metadados: {
      titulo: "Indústria metalúrgica — 35% menos tempo de produção",
      descricao:
        "Como o mapeamento de processos em BPMN eliminou retrabalho entre turnos e reduziu em 35% o tempo de produção de uma indústria metalúrgica.",
    },

    imagemDeFundo: comoFundo(imagens.analiseDeFluxoEmPapel),

    secoes: [
      {
        titulo: "O Desafio",
        paragrafos: [
          "A indústria metalúrgica enfrentava atrasos recorrentes na produção, com etapas informais e sem padronização entre os turnos. Sem um fluxo claro, informações se perdiam nas trocas de turno, o retrabalho era frequente e não havia visibilidade real sobre onde os gargalos aconteciam — o que dificultava qualquer tentativa de melhoria consistente.",
        ],
      },
      {
        titulo: "A Solução",
        paragrafos: [
          "A equipe da Líder Jr. mapeou o fluxo produtivo do início ao fim utilizando a notação BPMN, entrevistando operadores e supervisores de cada turno para entender a rotina real de produção. Com o mapeamento em mãos, identificamos os principais gargalos e pontos de retrabalho, e propusemos um processo padronizado, documentado e validado com os times operacionais antes da implementação.",
        ],
      },
      {
        titulo: "Os Resultados",
        paragrafos: [
          "Com o novo fluxo implementado, a empresa reduziu significativamente o tempo de produção e passou a entregar com mais previsibilidade. A padronização entre turnos eliminou boa parte do retrabalho e trouxe visibilidade real sobre o processo, servindo de base para futuras melhorias contínuas.",
        ],
      },
    ],

    depoimento: {
      texto:
        "A consultoria da Líder Júnior superou todas as nossas expectativas. Conseguimos destravar gargalos históricos em menos de 3 meses de projeto.",
      autor: "Diretor de Operações",
      cargo: "Grande Indústria Metalúrgica",
      iniciais: "DM",
    },

    impacto: {
      eyebrow: "Impacto do Projeto",
      titulo: "Resultados em números",
      numeros: [{ icone: "alvo", valor: "R$ 150k", rotulo: "Economia Anual" }],
    },

    cta: {
      titulo: "Quer um resultado parecido?",
      descricao:
        "Fale com a nossa equipe e entenda como podemos ajudar a sua empresa a alcançar melhores resultados.",
      botaoPrimario: { label: "Fale Conosco", href: "/fale-conosco" },
      botaoSecundario: {
        label: "Conhecer o serviço",
        href: "/servicos/mapeamento-de-processos",
      },
    },
  },
};
