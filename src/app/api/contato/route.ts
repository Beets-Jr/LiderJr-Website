import { faleConosco } from "@/content/fale-conosco";
import { enviarParaActiveCampaign } from "@/lib/active-campaign";
import { CAMPO_ARMADILHA, pareceEmailValido } from "@/lib/formulario-de-contato";
import { CAMPO_DO_RECAPTCHA } from "@/lib/recaptcha";
import { verificarRecaptcha } from "@/lib/recaptcha-servidor";

/**
 * Recebe o formulário do Fale Conosco e repassa para o ActiveCampaign.
 *
 * A validação usa a MESMA lista de campos que desenha o formulário
 * (src/content/fale-conosco.ts): acrescentar um campo lá já faz ele ser
 * validado aqui e aparecer na nota do contato, sem mexer neste arquivo.
 *
 * Duas barreiras contra robôs, nesta ordem:
 *   1. campo-armadilha — invisível para pessoas; preenchido, é robô;
 *   2. reCAPTCHA v3 — a nota do Google (ver lib/recaptcha-servidor.ts).
 */

const { campos } = faleConosco.formulario;

/** Nenhum campo legítimo passa disso; acima é lixo ou abuso. */
const TAMANHO_MAXIMO = 5000;

function erro(mensagem: string, status: number) {
  return Response.json({ situacao: "erro", mensagem }, { status });
}

export async function POST(requisicao: Request) {
  let corpo: unknown;
  try {
    corpo = await requisicao.json();
  } catch {
    return erro("Dados inválidos.", 400);
  }
  if (typeof corpo !== "object" || corpo === null) return erro("Dados inválidos.", 400);

  const bruto = corpo as Record<string, unknown>;
  const ler = (nome: string) =>
    typeof bruto[nome] === "string" ? (bruto[nome] as string).trim() : "";

  // Robô que caiu na armadilha recebe "sucesso": dizer que foi barrado só o
  // ensinaria a contornar. Nada é enviado.
  if (ler(CAMPO_ARMADILHA)) return Response.json({ situacao: "sucesso" });

  for (const campo of campos) {
    const valor = ler(campo.nome);
    if (campo.obrigatorio && !valor) return erro(campo.mensagemDeErro, 400);
    if (valor.length > TAMANHO_MAXIMO)
      return erro(`${campo.label}: texto longo demais.`, 400);
  }

  const email = ler(campos.find((c) => c.tipo === "email")?.nome ?? "email");
  if (!pareceEmailValido(email)) return erro(faleConosco.formulario.emailInvalido, 400);

  // Na Vercel, o primeiro IP do x-forwarded-for é o do visitante.
  const ip = requisicao.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  if ((await verificarRecaptcha(ler(CAMPO_DO_RECAPTCHA), ip)) === "recusado") {
    // A mesma mensagem de falha: a pessoa real barrada por engano vê o
    // telefone e o e-mail como alternativa.
    return erro(faleConosco.formulario.erroNoEnvio, 403);
  }

  // Onde está o formulário: o Fale Conosco, ou o case ou post em cujo fim a
  // pessoa preencheu. Nesses, a página de origem é a do próprio case ou post.
  const formulario = ler("formulario").slice(0, 200) || "Fale Conosco";
  const paginaDeOrigem = ler("paginaDeOrigem").slice(0, 500);
  const nota = [
    `Mensagem enviada pelo formulário do site (${formulario})`,
    "",
    ...campos.map((c) => `${c.label}: ${ler(c.nome) || "—"}`),
    `Página de origem: ${paginaDeOrigem || "—"}`,
  ].join("\n");

  try {
    await enviarParaActiveCampaign({
      email,
      nome: ler("nome"),
      telefone: ler(campos.find((c) => c.tipo === "telefone")?.nome ?? "telefone"),
      nota,
    });
  } catch (motivo) {
    console.error("[formulário de contato] falha ao enviar:", motivo);
    return erro(faleConosco.formulario.erroNoEnvio, 502);
  }

  return Response.json({ situacao: "sucesso" });
}
