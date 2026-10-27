import {
  comoFundo,
  imagens,
  logosDeFiliacao,
  logosDeParceiros,
} from "@/content/imagens";
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
      "Somos a empresa júnior de Engenharia de Produção da UFSCar Sorocaba, formada por estudantes que transformam conhecimento acadêmico em soluções para desafios reais de empresas.",
    imagemDeFundo: comoFundo(imagens.equipeComBandeiraEmSala),
  },

  historia: {
    eyebrow: "Nossa história",
    titulo: "Nascemos para conectar academia e mercado",
    paragrafos: [
      "A Líder Jr. é uma organização sem fins lucrativos, constituída e gerida por alunos do curso de Engenharia de Produção da Universidade Federal de São Carlos – campus Sorocaba. Nesse sentido, nossa estrutura permite que entreguemos projetos de alta qualidade com foco total no desenvolvimento acadêmico e profissional de nossos membros.",
      "Além disso, desde 2008, a Líder Jr. oferece consultorias para micro, médias e grandes empresas com um custo muito inferior ao praticado no mercado. Dessa forma, promovemos soluções de qualidade sob a orientação de professores doutores na área de Engenharia de Produção, garantindo resultados sólidos para nossos clientes.",
    ],
    imagem: imagens.equipeEmEscritorio,
  },

  cultura: {
    eyebrow: "Cultura",
    titulo: "O que nos guia",
    pilares: [
      {
        codigo: "M / 01",
        icone: "alvo",
        titulo: "Missão",
        descricao: "Transformar vidas desenvolvendo profissionais.",
      },
      {
        codigo: "V / 02",
        icone: "bussola",
        titulo: "Visão",
        descricao: "Ser uma EJ referência com a qualidade que só um líder tem.",
      },
      {
        codigo: "P / 03",
        icone: "colunas",
        titulo: "Valores",
        itens: [
          "Espírito líder",
          "Excelência em Resultados",
          "Profissionalismo",
          "Cliente³",
          "Inconformismo",
          "Viver o MEJ",
        ],
      },
    ],
  },

  filiacoes: {
    eyebrow: "Parcerias",
    titulo: "Filiações",
    itens: [
      {
        nome: "UFSCar",
        paragrafos: [
          "A Universidade Federal de São Carlos (UFSCar) é uma instituição pública e federal brasileira. Tendo a sua fundação em 1968, em São Carlos (SP), a Universidade é referência no Brasil e, principalmente, no Estado de São Paulo quando os assuntos são qualidade de ensino, inovação, pesquisa e avaliação do mercado.",
          "A Líder Jr. Consultoria Empresarial tem a sua sede em Sorocaba e é a Empresa Júnior do curso de Engenharia de Produção da UFSCar. Nossa proximidade com a universidade conecta os projetos ao conhecimento acadêmico e possibilita o acompanhamento de professores e especialistas da área.",
        ],
        logo: logosDeFiliacao.ufscar,
      },
      {
        nome: "Núcleo Campinas",
        paragrafos: [
          "O Núcleo Campinas conecta empresas juniores da região, promovendo troca de experiências, desenvolvimento e fortalecimento do Movimento Empresa Júnior.",
        ],
        logo: logosDeFiliacao.nuca,
      },
      {
        nome: "FEJESP",
        paragrafos: [
          "A FEJESP conecta e desenvolve empresas juniores do estado de São Paulo, fortalecendo o ecossistema paulista do Movimento Empresa Júnior.",
        ],
        logo: logosDeFiliacao.fejesp,
      },
      {
        nome: "Brasil Júnior",
        paragrafos: [
          "A Brasil Júnior representa o Movimento Empresa Júnior nacionalmente, conectando empresas juniores de todo o país e impulsionando o desenvolvimento de jovens empreendedores.",
        ],
        logo: logosDeFiliacao.brasilJunior,
      },
    ],
  },

  parceiros: {
    eyebrow: "Parceiros",
    titulo: "Conexões que fortalecem a Líder Jr.",
    rotulo: "Carrossel de empresas parceiras da Líder Jr.",
    anterior: "Parceiro anterior",
    proximo: "Próximo parceiro",
    // Parceiros sem logo (hiGen, btc, Empower, Liona) aparecem com o nome
    // escrito. Para pôr o logo, declare em logosDeParceiros (imagens.ts) e
    // acrescente `logo:` ao item.
    empresas: [
      { nome: "Visagio", logo: logosDeParceiros.visagio },
      { nome: "hiGen" },
      { nome: "Bain & Company", logo: logosDeParceiros.bain },
      { nome: "XP Inc.", logo: logosDeParceiros.xpInc },
      { nome: "EloGroup", logo: logosDeParceiros.elogroup },
      { nome: "Ambev", logo: logosDeParceiros.ambev },
      { nome: "btc" },
      { nome: "Empower" },
      { nome: "AGV Gestão", logo: logosDeParceiros.agvGestao },
      { nome: "Liona" },
      { nome: "PEERS", logo: logosDeParceiros.peers },
    ],
  },
};
