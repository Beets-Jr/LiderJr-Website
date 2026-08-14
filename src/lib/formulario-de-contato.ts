/**
 * ============================================================================
 * PONTO DE INTEGRAÇÃO DO FORMULÁRIO DE CONTATO
 * ============================================================================
 * Este é o ÚNICO lugar do site que precisa mudar quando houver backend.
 * Hoje o formulário valida no navegador e não envia para lugar nenhum.
 *
 * TODO: integração. Substituir o corpo de `enviarFormularioDeContato` por uma
 * chamada real (API route, serviço de e-mail, CRM). A assinatura da função e o
 * tipo do resultado já estão prontos para isso — o componente ContactForm
 * continua funcionando sem alteração.
 * ============================================================================
 */

export interface DadosDoFormularioDeContato {
  [campo: string]: string;
}

export type ResultadoDoEnvio =
  { situacao: "sucesso" } | { situacao: "erro"; mensagem: string };

export async function enviarFormularioDeContato(
  dados: DadosDoFormularioDeContato,
): Promise<ResultadoDoEnvio> {
  // TODO: integração — trocar por um POST real.
  console.info("[formulário de contato] dados que seriam enviados:", dados);

  // Simula a latência de uma requisição para que os estados de "enviando" e
  // "enviado" possam ser vistos e revisados desde já.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return { situacao: "sucesso" };
}

/** Validação de e-mail suficiente para o front. O servidor deve revalidar. */
export function pareceEmailValido(valor: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor.trim());
}
