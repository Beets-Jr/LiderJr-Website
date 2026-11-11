import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoFaleConosco } from "@/types/paginas";

export const faleConosco: ConteudoFaleConosco = {
  metadados: {
    titulo: "Fale com a Líder Jr.",
    descricao:
      "Conte para a Líder Jr. o desafio da sua empresa. Nossa equipe retorna com uma proposta de consultoria em Engenharia de Produção sob medida.",
  },

  hero: {
    eyebrow: "Entre em contato",
    titulo: "Fale com a Líder Jr.",
    descricao:
      "Conte-nos sobre sua necessidade e agende um diagnóstico gratuito com a nossa equipe.",
    imagemDeFundo: comoFundo(imagens.equipeComBandeiraEmEvento),
  },

  informacoes: {
    eyebrow: "Contato",
    titulo: "Vamos conversar",
    orientacao:
      "Preencha as informações a seguir e nossa equipe entrará em contato para entender sua necessidade, tirar suas dúvidas e iniciar seu diagnóstico gratuito.",
  },

  formulario: {
    titulo: "Agende seu diagnóstico gratuito",

    /**
     * PARA MUDAR O FORMULÁRIO: acrescente, remova ou reordene os campos abaixo.
     * O `nome` vira o identificador do campo — use letras minúsculas, sem
     * acento e sem espaço.
     */
    campos: [
      {
        nome: "nome",
        label: "Nome",
        placeholder: "Qual é o seu nome?",
        tipo: "texto",
        obrigatorio: true,
        mensagemDeErro: "Informe seu nome.",
        larguraTotal: true,
      },
      {
        nome: "email",
        label: "E-mail",
        placeholder: "seunome@email.com",
        tipo: "email",
        obrigatorio: true,
        mensagemDeErro: "Informe seu e-mail.",
      },
      {
        nome: "telefone",
        label: "Telefone",
        placeholder: "(00) 00000-0000",
        tipo: "telefone",
        obrigatorio: true,
        mensagemDeErro: "Informe seu telefone.",
      },
      {
        nome: "mensagem",
        label: "Como podemos te ajudar?",
        placeholder: "Conte brevemente sobre sua necessidade, projeto ou desafio!",
        tipo: "textarea",
        obrigatorio: true,
        mensagemDeErro: "Escreva sua mensagem.",
        larguraTotal: true,
      },
    ],

    rotuloDoBotao: "Fale com um especialista",
    rotuloEnviando: "Enviando...",
    sucesso: "Mensagem registrada! Em breve nossa equipe entra em contato.",
    emailInvalido: "Confira o e-mail digitado.",
    telefoneInvalido: "Confira o telefone digitado, com DDD.",

    erroNoEnvio:
      "Não conseguimos enviar sua mensagem agora. Tente de novo em instantes ou fale com a gente pelo telefone ou e-mail ao lado.",
  },
};
