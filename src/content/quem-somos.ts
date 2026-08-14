import { comoFundo, imagens, logosDeFiliacao } from "@/content/imagens";
import type { ConteudoQuemSomos } from "@/types/paginas";

export const quemSomos: ConteudoQuemSomos = {
  metadados: {
    titulo: "Quem Somos",
    descricao:
      "A Líder Jr. é a empresa júnior do curso de Engenharia de Produção. Conheça nossa história, nossa cultura e as instituições às quais somos filiados.",
  },

  hero: {
    eyebrow: "Nossa empresa",
    titulo: "Quem Somos",
    descricao:
      "Somos a Líder Jr., empresa júnior do curso de Engenharia de Produção, formada por estudantes apaixonados por soluções que fazem diferença.",
    imagemDeFundo: comoFundo(imagens.equipeReuniaoMesa),
  },

  historia: {
    eyebrow: "Nossa história",
    titulo: "Nascemos para conectar academia e mercado",
    paragrafos: [
      "Fundada por um grupo de alunos motivados do curso de Engenharia de Produção, a Líder Jr. surgiu como resposta a uma necessidade clara: pequenas e médias empresas precisavam de consultoria de qualidade a preços acessíveis.",
      "Ao longo dos anos, crescemos, obtivemos certificação pela Brasil Júnior e construímos um portfólio diversificado de projetos em setores como indústria, varejo, serviços e agronegócio.",
    ],
    imagem: imagens.apresentacaoParaEquipe,
  },

  cultura: {
    eyebrow: "Cultura",
    titulo: "O que nos guia",
    pilares: [
      {
        codigo: "M / 01",
        icone: "alvo",
        titulo: "Missão",
        descricao:
          "Oferecer soluções inovadoras em Engenharia de Produção, desenvolvendo competências nos nossos membros e gerando valor real para clientes.",
      },
      {
        codigo: "V / 02",
        icone: "bussola",
        titulo: "Visão",
        descricao:
          "Ser referência nacional em consultoria júnior, reconhecida pela excelência técnica, impacto nos negócios e formação de líderes.",
      },
      {
        codigo: "P / 03",
        icone: "colunas",
        titulo: "Valores",
        descricao:
          "Inovação, comprometimento, ética e aprendizado contínuo são os pilares que guiam cada projeto e cada decisão da Líder Jr.",
      },
    ],
  },

  /**
   * ATENÇÃO — CONTEÚDO PENDENTE.
   * No protótipo, os textos desta seção descreviam OUTRA empresa júnior (a
   * Beets Jr.) e os logos eram carregados do site dela. Os textos foram
   * substituídos por marcadores e os logos por placeholders.
   * A Líder Jr. precisa fornecer os textos e logos corretos. Ver PENDENCIAS.md.
   */
  filiacoes: {
    eyebrow: "Parcerias",
    titulo: "Filiações",
    itens: [
      {
        nome: "UFSCar",
        descricao:
          "[TEXTO PENDENTE — descrever a relação da Líder Jr. com a universidade: orientação acadêmica, professores envolvidos, desde quando.]",
        logo: logosDeFiliacao.ufscar,
      },
      {
        nome: "Núcleo Campinas",
        descricao:
          "[TEXTO PENDENTE — descrever a filiação da Líder Jr. ao NuCa: desde quando e o que representa.]",
        logo: logosDeFiliacao.nuca,
      },
      {
        nome: "FEJESP",
        descricao:
          "[TEXTO PENDENTE — descrever a relação da Líder Jr. com a Federação de Empresas Juniores do Estado de São Paulo.]",
        logo: logosDeFiliacao.fejesp,
      },
      {
        nome: "Brasil Júnior",
        descricao:
          "[TEXTO PENDENTE — descrever a certificação e a participação da Líder Jr. no Movimento Empresa Júnior brasileiro.]",
        logo: logosDeFiliacao.brasilJunior,
      },
    ],
  },
};
