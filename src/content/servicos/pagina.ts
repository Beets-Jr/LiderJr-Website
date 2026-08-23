import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoDeServicos } from "@/types/paginas";

/**
 * Textos da PÁGINA DE LISTAGEM /servicos.
 * Os serviços em si vivem em src/content/servicos/ (um arquivo por serviço).
 */
export const paginaDeServicos: ConteudoDeServicos = {
  metadados: {
    titulo: "Serviços",
    descricao:
      "Mapeamento de processos, gestão da qualidade, pesquisa de mercado, planejamento estratégico, custos e estoque. Soluções em Engenharia de Produção para PMEs.",
  },

  hero: {
    eyebrow: "O que oferecemos",
    titulo: "Nossos Serviços",
    descricao:
      "Soluções completas em Engenharia de Produção para empresas que querem crescer com inteligência e eficiência.",
    imagemDeFundo: comoFundo(imagens.workshopPostIts),
  },

  rotuloDoCard: "Conhecer a solução",
  botaoSemPagina: { label: "Fale conosco", href: "/fale-conosco" },

  processo: {
    eyebrow: "Do primeiro contato à entrega",
    titulo: "Nosso processo",
    descricao:
      "Quatro etapas, sem atalhos. Cada projeto passa pelo mesmo rigor — da escuta inicial até o relatório final nas suas mãos.",
    etapas: [
      {
        numero: "01",
        icone: "lupa",
        titulo: "Diagnóstico",
        descricao:
          "Ouvimos o time, mapeamos o cenário atual e identificamos as causas reais do problema — não só os sintomas.",
      },
      {
        numero: "02",
        icone: "documento",
        titulo: "Proposta",
        descricao:
          "Traduzimos o diagnóstico em um plano claro: escopo, cronograma, entregáveis e investimento, sem letra miúda.",
      },
      {
        numero: "03",
        icone: "pessoas",
        titulo: "Execução",
        descricao:
          "Equipe dedicada em campo, com acompanhamento semanal e supervisão acadêmica em cada etapa crítica.",
      },
      {
        numero: "04",
        icone: "check",
        titulo: "Entrega",
        descricao:
          "Resultado documentado e validado, com plano de continuidade para depois que o projeto termina.",
      },
    ],
  },
};
