import "server-only";

/**
 * ============================================================================
 * ACTIVECAMPAIGN
 * ============================================================================
 * Leva um contato do formulário para o ActiveCampaign (API v3). Roda só no
 * servidor: a chave de API nunca chega ao navegador.
 *
 * O que acontece a cada envio:
 *   1. o contato é criado ou atualizado pelo e-mail (`contact/sync`) — enviar
 *      duas vezes não duplica ninguém;
 *   2. a mensagem vira uma NOTA no contato, com todos os campos do formulário
 *      e a página de origem. Nota, e não campo personalizado, porque um campo
 *      guardaria só a última mensagem; a nota mantém o histórico;
 *   3. se configurados, o contato entra numa lista e recebe uma tag — é isso
 *      que dispara automações no ActiveCampaign.
 *
 * VARIÁVEIS DE AMBIENTE (em .env.local e na Vercel):
 *   ACTIVECAMPAIGN_URL      obrigatória. Ex.: https://suaconta.api-us1.com
 *                           (Settings → Developer, no ActiveCampaign)
 *   ACTIVECAMPAIGN_API_KEY  obrigatória. Na mesma tela.
 *   ACTIVECAMPAIGN_LIST_ID  opcional. O número da lista (aparece na URL dela).
 *   ACTIVECAMPAIGN_TAG_ID   opcional. O número da tag (aparece na URL dela).
 * ============================================================================
 */

export interface ContatoParaActiveCampaign {
  email: string;
  nome: string;
  telefone?: string;
  /** Texto livre que vira a nota do contato. */
  nota: string;
}

/** Erro que pode ser mostrado no log sem vazar a chave. */
export class ErroDoActiveCampaign extends Error {}

function configuracao() {
  const url = process.env.ACTIVECAMPAIGN_URL?.replace(/\/+$/, "");
  const chave = process.env.ACTIVECAMPAIGN_API_KEY;
  if (!url || !chave) {
    throw new ErroDoActiveCampaign(
      "ACTIVECAMPAIGN_URL e ACTIVECAMPAIGN_API_KEY não estão configuradas.",
    );
  }
  return {
    url,
    chave,
    lista: process.env.ACTIVECAMPAIGN_LIST_ID || undefined,
    tag: process.env.ACTIVECAMPAIGN_TAG_ID || undefined,
  };
}

async function chamar<T>(
  config: { url: string; chave: string },
  caminho: string,
  corpo: unknown,
): Promise<T> {
  const resposta = await fetch(`${config.url}/api/3/${caminho}`, {
    method: "POST",
    headers: { "Api-Token": config.chave, "Content-Type": "application/json" },
    body: JSON.stringify(corpo),
    // Sem isso, um ActiveCampaign fora do ar deixaria a pessoa esperando.
    signal: AbortSignal.timeout(10_000),
  });
  if (!resposta.ok) {
    const detalhe = await resposta.text().catch(() => "");
    throw new ErroDoActiveCampaign(
      `POST ${caminho} respondeu ${resposta.status}: ${detalhe.slice(0, 500)}`,
    );
  }
  return (await resposta.json()) as T;
}

/** "Maria da Silva" → primeiro nome "Maria", sobrenome "da Silva". */
function separarNome(nome: string) {
  const [primeiro = "", ...resto] = nome.trim().split(/\s+/);
  return { firstName: primeiro, lastName: resto.join(" ") };
}

export async function enviarParaActiveCampaign(contato: ContatoParaActiveCampaign) {
  const config = configuracao();

  const { contact } = await chamar<{ contact: { id: string } }>(
    config,
    "contact/sync",
    {
      contact: {
        email: contato.email,
        ...separarNome(contato.nome),
        ...(contato.telefone ? { phone: contato.telefone } : {}),
      },
    },
  );

  // A nota é o que guarda a mensagem: se falhar, o envio falha e a pessoa
  // pode tentar de novo (o sync acima não duplica o contato).
  await chamar(config, "notes", {
    note: { note: contato.nota, relid: contact.id, reltype: "Subscriber" },
  });

  // Lista e tag são extras. Um ID errado não pode fazer o site perder o
  // contato — só fica registrado no log do servidor.
  const extras: Promise<unknown>[] = [];
  if (config.lista) {
    extras.push(
      chamar(config, "contactLists", {
        contactList: { list: config.lista, contact: contact.id, status: 1 },
      }),
    );
  }
  if (config.tag) {
    extras.push(
      chamar(config, "contactTags", {
        contactTag: { contact: contact.id, tag: config.tag },
      }),
    );
  }
  for (const resultado of await Promise.allSettled(extras)) {
    if (resultado.status === "rejected") {
      console.error("[ActiveCampaign] contato salvo, mas:", resultado.reason);
    }
  }
}
