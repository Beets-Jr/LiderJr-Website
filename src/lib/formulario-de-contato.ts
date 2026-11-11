/**
 * ============================================================================
 * ENVIO DO FORMULÁRIO DE CONTATO
 * ============================================================================
 * O navegador manda os dados para /api/contato (src/app/api/contato/route.ts),
 * que valida de novo e repassa para a Dash Hub (src/lib/dash-hub.ts).
 * O navegador nunca fala direto com a Dash Hub: assim o CRM só recebe o envio
 * que passou pela validação e pelas barreiras contra robôs.
 * ============================================================================
 */

/**
 * Os campos visíveis do formulário, mais `paginaDeOrigem` — preenchido pelo
 * site, não pela pessoa. Ver lib/origem-do-visitante.ts.
 */
export interface DadosDoFormularioDeContato {
  [campo: string]: string;
}

/**
 * O campo-armadilha: escondido de quem vê a página e de leitores de tela, mas
 * presente no HTML. Robôs preenchem todo campo que encontram; pessoas, não.
 * O nome é de propósito tentador — não troque por algo como "armadilha".
 */
export const CAMPO_ARMADILHA = "website";

export type ResultadoDoEnvio =
  { situacao: "sucesso" } | { situacao: "erro"; mensagem: string };

export async function enviarFormularioDeContato(
  dados: DadosDoFormularioDeContato,
  mensagemDeFalha: string,
): Promise<ResultadoDoEnvio> {
  try {
    const resposta = await fetch("/api/contato", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });
    const resultado = (await resposta.json()) as ResultadoDoEnvio;
    if (resposta.ok && resultado.situacao === "sucesso") return resultado;
    return {
      situacao: "erro",
      mensagem: resultado.situacao === "erro" ? resultado.mensagem : mensagemDeFalha,
    };
  } catch {
    // Sem internet, ou a resposta nem chegou a ser JSON.
    return { situacao: "erro", mensagem: mensagemDeFalha };
  }
}

/** Validação de e-mail usada no navegador e revalidada em /api/contato. */
export function pareceEmailValido(valor: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor.trim());
}

/**
 * Telefone completo: ao menos 10 dígitos — DDD + número fixo. Um número de
 * outro país, com o código dele, também passa disso. Validado no navegador e
 * revalidado em /api/contato.
 */
export function pareceTelefoneValido(valor: string): boolean {
  return valor.replace(/\D/g, "").length >= 10;
}

/**
 * Formata o telefone enquanto a pessoa digita.
 *
 * Número do Brasil — sem "+", ou começando com "+55" — ganha a máscara:
 * "11987654321" → "(11) 98765-4321", "1133334444" → "(11) 3333-4444" e
 * "+5511987654321" → "+55 (11) 98765-4321".
 *
 * Começando com "+" e outro código de país ("+1 …", "+351 …"), o número fica
 * como foi digitado: cada país tem um formato, e forçar o brasileiro estragava
 * o número. Só sobram dígitos, espaços, parênteses e hífen.
 */
export function formatarTelefone(valor: string): string {
  const texto = valor.trimStart();

  if (texto.startsWith("+")) {
    const digitos = texto.replace(/\D/g, "");
    // "+" ou "+5": ainda não dá para saber se é o Brasil.
    if (digitos === "" || digitos === "5") return `+${digitos}`;
    if (digitos.startsWith("55")) {
      const nacional = mascaraBrasileira(digitos.slice(2));
      return nacional ? `+55 ${nacional}` : "+55";
    }
    return `+${texto.slice(1).replace(/[^\d\s()-]/g, "")}`.slice(0, 20);
  }

  let digitos = texto.replace(/\D/g, "");
  // Preenchido pelo navegador com o código do país sem "+" ("55 11 …") ou com
  // o zero de longa distância ("011 …"): tira o prefixo antes de cortar.
  if (digitos.length > 11) digitos = digitos.replace(/^(55|0)/, "");
  return mascaraBrasileira(digitos);
}

/**
 * DDD + número, até 11 dígitos. Os separadores só aparecem quando já existe um
 * dígito depois deles — assim o Backspace sobre um ")" ou um "-" apaga o dígito
 * anterior, em vez de o separador voltar na hora.
 */
function mascaraBrasileira(digitos: string): string {
  const d = digitos.slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  // Fixo (10 dígitos) quebra em 4+4; celular (11) em 5+4.
  const meio = d.length === 11 ? 7 : 6;
  return `(${d.slice(0, 2)}) ${d.slice(2, meio)}-${d.slice(meio)}`;
}
