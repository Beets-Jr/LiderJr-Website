import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoFaleConosco } from "@/types/paginas";

export const faleConosco: ConteudoFaleConosco = {
  metadados: {
    titulo: "Fale Conosco",
    descricao:
      "Conte para a Líder Jr. o desafio da sua empresa. Nossa equipe retorna com uma proposta de consultoria em Engenharia de Produção sob medida.",
  },

  hero: {
    eyebrow: "Entre em contato",
    titulo: "Fale Conosco",
    descricao:
      "Conte-nos sobre o seu desafio. Nossa equipe entrará em contato para entender sua necessidade e apresentar a melhor solução.",
    imagemDeFundo: comoFundo(imagens.apresentacaoParaEquipe),
  },

  informacoes: {
    eyebrow: "Contato",
    titulo: "Vamos conversar",
  },

  formulario: {
    titulo: "Solicite um orçamento",

    /**
     * PARA MUDAR O FORMULÁRIO: acrescente, remova ou reordene os campos abaixo.
     * O `nome` vira o identificador do campo — use letras minúsculas, sem
     * acento e sem espaço.
     */
    campos: [
      {
        nome: "nome",
        label: "Nome",
        placeholder: "Seu nome completo",
        tipo: "texto",
        obrigatorio: true,
        mensagemDeErro: "Informe seu nome.",
      },
      {
        nome: "empresa",
        label: "Empresa",
        placeholder: "Nome da sua empresa",
        tipo: "texto",
        obrigatorio: false,
        mensagemDeErro: "",
      },
      {
        nome: "email",
        label: "E-mail",
        placeholder: "voce@empresa.com.br",
        tipo: "email",
        obrigatorio: true,
        mensagemDeErro: "Informe seu e-mail.",
      },
      {
        nome: "telefone",
        label: "Telefone",
        placeholder: "(00) 00000-0000",
        tipo: "telefone",
        obrigatorio: false,
        mensagemDeErro: "",
      },
      {
        nome: "mensagem",
        label: "Mensagem",
        placeholder: "Conte um pouco sobre seu projeto...",
        tipo: "textarea",
        obrigatorio: true,
        mensagemDeErro: "Escreva sua mensagem.",
        larguraTotal: true,
      },
    ],

    rotuloDoBotao: "Enviar mensagem",
    rotuloEnviando: "Enviando...",
    sucesso: "Mensagem registrada! Em breve nossa equipe entra em contato.",
    emailInvalido: "Confira o e-mail digitado.",

    // TODO: integração — remover este aviso quando o formulário passar a enviar
    // de verdade. Ver src/lib/formulario-de-contato.ts e PENDENCIAS.md.
    aviso:
      "Este formulário ainda não está conectado a um servidor: os dados não são enviados. Use o telefone ou o e-mail ao lado para falar com a gente.",
  },
};
