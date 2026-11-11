import "server-only";

/**
 * ============================================================================
 * DASH HUB
 * ============================================================================
 * Leva o envio do formulário para o CRM da Dash Hub. Roda só no servidor,
 * depois da validação, da armadilha e do reCAPTCHA (ver app/api/contato) — o
 * CRM só recebe envio completo e já filtrado.
 *
 * A Dash Hub também oferece uma linha de script para colar no site, que copia
 * qualquer formulário direto do navegador. Ela não é usada aqui de propósito:
 * copiaria o formulário antes da validação (lead incompleto e duplicado),
 * passaria por cima do reCAPTCHA e, bloqueada por um bloqueador de anúncios,
 * perderia o lead sem ninguém saber.
 *
 * Os campos vão com o RÓTULO que a pessoa lê ("E-mail", "Como podemos te
 * ajudar?"): é por ele que a Dash Hub reconhece cada campo.
 *
 * VARIÁVEL DE AMBIENTE (em .env.local e na Vercel):
 *   DASHHUB_FONTE  obrigatória. O token da fonte — o valor de `data-fonte` na
 *                  linha de script que a Dash Hub fornece (CRM → Captação).
 *                  Sem ela, o formulário mostra a mensagem de erro.
 * ============================================================================
 */

const ENDERECO_DE_CAPTURA = "https://dashhub.com.br/api/captura/";

/** Erro que pode ir para o log do servidor. */
export class ErroDaDashHub extends Error {}

export async function enviarParaDashHub(campos: Record<string, string>) {
  const fonte = process.env.DASHHUB_FONTE;
  if (!fonte) throw new ErroDaDashHub("DASHHUB_FONTE não está configurada.");

  const resposta = await fetch(ENDERECO_DE_CAPTURA + encodeURIComponent(fonte), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(campos),
    // Sem isso, uma Dash Hub fora do ar deixaria a pessoa esperando.
    signal: AbortSignal.timeout(10_000),
  });
  const detalhe = await resposta.text().catch(() => "");

  // A Dash Hub responde em JSON com `ok`; um `ok: false` com status 200 também
  // é recusa.
  let recusado = !resposta.ok;
  try {
    recusado ||= (JSON.parse(detalhe) as { ok?: unknown }).ok === false;
  } catch {
    // Resposta sem JSON: vale só o status.
  }
  if (recusado) {
    throw new ErroDaDashHub(`Respondeu ${resposta.status}: ${detalhe.slice(0, 500)}`);
  }
}
