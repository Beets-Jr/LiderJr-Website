const FORMATADOR = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/**
 * Converte "2026-06-15" em "15 Jun 2026" — o formato usado no protótipo.
 *
 * Existe para que a data seja escrita UMA vez no conteúdo, no formato
 * AAAA-MM-DD, e o site cuide da exibição. No protótipo a data era escrita à mão
 * em dois lugares e os dois discordavam: o card dizia "15 Jun 2026" e a página
 * do post, "17 Jul, 2026".
 */
export function formatarData(iso: string): string {
  const data = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(data.getTime())) return iso;

  return FORMATADOR.format(data)
    .replace(/ de /g, " ")
    .replace(/\./g, "")
    .replace(/ ([a-zà-ú])/, (_, letra: string) => ` ${letra.toUpperCase()}`);
}
