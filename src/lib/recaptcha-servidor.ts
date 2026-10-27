import "server-only";
import { ACAO_DO_RECAPTCHA } from "./recaptcha";

/**
 * ============================================================================
 * reCAPTCHA v3 — LADO DO SERVIDOR
 * ============================================================================
 * Troca o token do navegador pela nota do Google (0 = robô, 1 = pessoa).
 *
 * RECAPTCHA_SECRET_KEY  a chave secreta, par da NEXT_PUBLIC_RECAPTCHA_SITE_KEY
 *                       (https://www.google.com/recaptcha/admin). Sem ela a
 *                       verificação fica desligada — só para desenvolvimento.
 * ============================================================================
 */

/**
 * Abaixo disso, o envio é recusado. 0,5 é o ponto de partida que o Google
 * recomenda; se pessoas reais forem barradas, baixe. As notas de cada envio
 * aparecem no painel do reCAPTCHA.
 */
const NOTA_MINIMA = 0.5;

export type VerificacaoDoRecaptcha = "aprovado" | "recusado";

export async function verificarRecaptcha(
  token: string,
  ip: string | undefined,
): Promise<VerificacaoDoRecaptcha> {
  const segredo = process.env.RECAPTCHA_SECRET_KEY;
  if (!segredo) {
    console.warn("[reCAPTCHA] RECAPTCHA_SECRET_KEY ausente: verificação desligada.");
    return "aprovado";
  }
  if (!token) return "recusado";

  let resultado: { success: boolean; score?: number; action?: string };
  try {
    const resposta = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      body: new URLSearchParams({
        secret: segredo,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
      signal: AbortSignal.timeout(5_000),
    });
    resultado = await resposta.json();
  } catch (motivo) {
    // Google fora do ar: deixa passar. Perder um cliente real custa mais que
    // um spam eventual — e o campo-armadilha continua valendo.
    console.error("[reCAPTCHA] não consegui verificar, envio liberado:", motivo);
    return "aprovado";
  }

  const aprovado =
    resultado.success &&
    resultado.action === ACAO_DO_RECAPTCHA &&
    (resultado.score ?? 0) >= NOTA_MINIMA;

  if (!aprovado) console.warn("[reCAPTCHA] envio recusado:", resultado);
  return aprovado ? "aprovado" : "recusado";
}
