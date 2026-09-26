"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  useState,
  type CSSProperties,
  type ReactNode,
  type TransitionEvent,
} from "react";
import { Badge, Card, Heading, LinkEsticado, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import { getHrefDoCase } from "@/lib/hrefs";
import type { Case } from "@/types/case";
import type { ConteudoDaHome } from "@/types/paginas";

/**
 * Quantas vezes a lista se repete no trilho.
 *
 * Deslizar exige ter card sobrando fora da tela dos dois lados — senão a
 * primeira seta revelaria o vazio. Com a lista repetida três vezes, sempre há
 * uma cópia à esquerda e outra à direita para entrar em cena, e como as cópias
 * são idênticas, o salto de volta ao centro (ver `ajustarSeSaiuDoMiolo`) é
 * invisível.
 */
const COPIAS = 3;

/**
 * O deslize do trilho.
 *
 * A curva é `ease-out`, e não a `--ease-brand` do design system. A da marca
 * (`cubic-bezier(0.16, 1, 0.3, 1)`) vence 90% da distância nos primeiros 30% do
 * tempo: ótima para um botão mudando de cor, péssima para um card atravessando
 * a tela — o card salta e depois rasteja, o que se lê como arranque agressivo e
 * final arrastado ao mesmo tempo. `ease-out` distribui o percurso.
 *
 * 700ms é o meio-termo entre os 500ms que ficaram bruscos e os 900ms que
 * ficaram pesados.
 */
const DESLIZE = "duration-700 ease-out";

/**
 * A troca de destaque: o card do meio crescendo e acendendo a borda laranja,
 * enquanto o que sai encolhe e esmaece.
 *
 * É MAIS LENTO que o deslize, e com curva simétrica (`ease-in-out`), de
 * propósito. Antes os dois corriam juntos em `ease-out`, e a consequência era o
 * card já chegar praticamente crescido: metade do tamanho ganho nos primeiros
 * 200ms, ainda em movimento. Isso lê como estalo, não como transição.
 *
 * Assim o card cresce devagar desde o começo e termina de assentar ~300ms
 * depois de parar — o crescimento acompanha a chegada em vez de anunciá-la.
 */
const TROCA_DE_DESTAQUE = "duration-1000 ease-in-out";

/**
 * O carrossel de cases da Home: três cards visíveis no desktop, o do meio em
 * destaque. No mobile mostra um por vez.
 *
 * Trocar o destaque DESLIZA o trilho de cards, em vez de trocar o conteúdo no
 * lugar. Como o trilho repete a lista, ele dá a volta nos dois sentidos sem
 * começo nem fim.
 *
 * O do protótipo não tinha rótulo nos botões nem anúncio de mudança — quem usa
 * leitor de tela não sabia que algo tinha mudado. Aqui os botões têm
 * `aria-label` e a região é `aria-live`.
 */
export function CasesCarousel({
  cases,
  textos,
}: {
  cases: Case[];
  textos: ConteudoDaHome["cases"]["carrossel"];
}) {
  const total = cases.length;

  /**
   * Onde o trilho está parado, em cards. A janela do desktop mostra
   * [posicao, posicao+2] e o card em destaque é o do meio, `posicao + 1`.
   * Começar em `total - 1` deixa o primeiro case no centro e uma cópia inteira
   * à esquerda, pronta para deslizar.
   */
  const [posicao, setPosicao] = useState(total - 1);
  const [animando, setAnimando] = useState(true);
  /**
   * Trava as setas enquanto o trilho está em movimento. Sem isto, clicar mais
   * rápido que os 700ms do deslize empilha vários passos antes do
   * `ajustarSeSaiuDoMiolo` rodar — e como ele só desloca uma lista inteira por
   * vez, a posição escapava da faixa seguro e o trilho parava num trecho sem
   * cópia nenhuma por baixo (tela vazia). Destrava no fim de cada transição.
   */
  const [travado, setTravado] = useState(false);

  if (total === 0) return null;

  const trilho = Array.from({ length: total * COPIAS }, (_, i) => ({
    item: cases[i % total]!,
    indiceNoTrilho: i,
  }));

  const centro = posicao + 1;

  /**
   * Depois que o trilho para, se ele saiu da cópia do meio, volta uma lista
   * inteira — sem transição, porque o conteúdo naquele ponto é o mesmo. É o que
   * faz o carrossel não ter começo nem fim.
   *
   * Só reage ao fim do movimento DO PRÓPRIO TRILHO. `transitionend` borbulha,
   * então o fim de cada escala de card e de cada borda acendendo também chegava
   * aqui — e como esses duram mais que o deslize, um clique disparava o salto
   * enquanto o trilho ainda estava em movimento, na frente do usuário.
   */
  function ajustarSeSaiuDoMiolo(evento: TransitionEvent<HTMLUListElement>) {
    if (evento.target !== evento.currentTarget) return;

    // O trilho parou de se mexer de verdade — pode aceitar o próximo clique.
    setTravado(false);

    if (posicao >= total * 2 - 1) {
      setAnimando(false);
      setPosicao(posicao - total);
    } else if (posicao < total - 1) {
      setAnimando(false);
      setPosicao(posicao + total);
    }
  }

  // Devolve a transição assim que o salto invisível foi aplicado na tela.
  if (!animando) {
    requestAnimationFrame(() => setAnimando(true));
  }

  return (
    <div className="relative">
      <div
        aria-live="polite"
        aria-atomic="false"
        role="region"
        aria-label={textos.regiao}
        // A janela recorta o trilho: no mobile cabe um card, no desktop três.
        // O `py-4` dá folga para a sombra do card em destaque, que o
        // `overflow-hidden` cortaria em cima e embaixo.
        className="overflow-hidden py-4 [--visiveis:1] md:[--visiveis:3]"
      >
        <ul
          onTransitionEnd={ajustarSeSaiuDoMiolo}
          // No desktop a janela começa no card anterior ao destaque; no mobile
          // ela mostra o próprio destaque. Daí os dois deslocamentos.
          style={
            {
              "--desloc-mobile": centro,
              "--desloc-desktop": posicao,
              width: `calc(${total * COPIAS} / var(--visiveis) * 100%)`,
              transform: `translateX(calc(var(--desloc) * -100% / ${total * COPIAS}))`,
            } as CSSProperties
          }
          className={cn(
            "flex items-center [--desloc:var(--desloc-mobile)] md:[--desloc:var(--desloc-desktop)]",
            animando && `transition-transform ${DESLIZE}`,
          )}
        >
          {trilho.map(({ item, indiceNoTrilho }) => {
            const destaque = indiceNoTrilho === centro;
            // Fora da janela o card está escondido pelo `overflow-hidden`, e as
            // cópias repetem os mesmos cases — esconder do leitor de tela evita
            // anunciar o mesmo case três vezes.
            const naJanela = indiceNoTrilho >= posicao && indiceNoTrilho <= posicao + 2;

            return (
              <li
                key={indiceNoTrilho}
                aria-hidden={naJanela ? undefined : "true"}
                style={{ width: `calc(100% / ${total * COPIAS})` }}
                className={cn(
                  "shrink-0 px-3",
                  // `scale`, e não `transform`: no Tailwind v4 a classe
                  // `scale-90` escreve na propriedade `scale`. Pedir transição
                  // de `transform` não animava nada — o card saltava de 0,9
                  // para 1 num quadro, que era o estalo.
                  //
                  // No quadro do salto invisível a transição sai daqui também:
                  // o destaque troca de elemento, e sem isso o card do meio
                  // encolhia e crescia de novo bem na cara do usuário.
                  animando && `transition-[scale,opacity] ${TROCA_DE_DESTAQUE}`,
                  destaque ? "scale-100 opacity-100" : "scale-90 opacity-50",
                )}
              >
                <CaseSlide
                  item={item}
                  destaque={destaque}
                  animando={animando}
                  alcancavel={naJanela}
                  textos={textos}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* No desktop as setas ficam nas bordas, na altura do centro do card. No
          mobile elas descem para baixo do card, onde há espaço. */}
      <div className="mt-8 flex items-center justify-center gap-3 md:mt-0 md:block">
        <BotaoDoCarrossel
          rotulo={textos.anterior}
          disabled={travado}
          onClick={() => {
            setTravado(true);
            setPosicao(posicao - 1);
          }}
          className="md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2"
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </BotaoDoCarrossel>

        <BotaoDoCarrossel
          rotulo={textos.proximo}
          disabled={travado}
          onClick={() => {
            setTravado(true);
            setPosicao(posicao + 1);
          }}
          className="md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2"
        >
          <ChevronRight size={18} aria-hidden="true" />
        </BotaoDoCarrossel>
      </div>
    </div>
  );
}

function BotaoDoCarrossel({
  rotulo,
  onClick,
  disabled,
  className,
  children,
}: {
  rotulo: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={rotulo}
      className={cn(
        "border-border bg-surface text-fg hover:bg-brand hover:border-brand hover:text-brand-fg z-10 flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-colors",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}

function CaseSlide({
  item,
  destaque,
  animando,
  alcancavel,
  textos,
}: {
  item: Case;
  destaque: boolean;
  /** Falso no quadro do salto invisível — ver o comentário no <li>. */
  animando: boolean;
  /** Fora da janela o card é uma cópia escondida: não deve receber o teclado. */
  alcancavel: boolean;
  textos: ConteudoDaHome["cases"]["carrossel"];
}) {
  const href = getHrefDoCase(item);

  return (
    <Card
      as="article"
      className={cn(
        // `group` para a chamada lá embaixo reagir ao ponteiro sobre o card —
        // que é o alvo de clique inteiro, já que o link do título é esticado.
        "group relative flex h-full flex-col",
        // A borda laranja e a sombra do destaque acendiam de uma vez, no
        // instante do clique, com o card ainda em movimento — o outro motivo do
        // "piscar". Agora acompanham o crescimento, no mesmo tempo e curva.
        animando && `transition-[border-color,box-shadow] ${TROCA_DE_DESTAQUE}`,
        destaque && "border-brand shadow-lg",
      )}
    >
      <p className="font-heading text-brand text-4xl font-bold">{item.resultado}</p>
      <Text size="sm" tone="muted" className="mt-1">
        {item.metrica}
      </Text>

      {/* O traço só existe no card do meio: é ele que separa o número do texto
          quando o card ganha altura. */}
      {destaque ? <hr className="bg-border mt-6 h-px w-12 border-0" /> : null}

      <Heading as="h3" level="card" className="mt-6">
        <LinkEsticado href={href} tabIndex={alcancavel ? undefined : -1}>
          {item.empresa}
        </LinkEsticado>
      </Heading>

      <Text size="sm" tone="muted" className="mt-3 flex-1">
        {item.descricao}
      </Text>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>

      {/* Só o card em destaque mostra a chamada. Nos laterais ela competiria
          com o centro; o link do título continua valendo nos três. Sem página
          própria, o texto vira aviso — mesma regra da listagem de /cases. */}
      {destaque ? (
        <p
          className={cn(
            "font-body mt-6 flex items-center gap-2 text-sm font-semibold transition-colors",
            href ? "text-brand group-hover:text-brand-hover" : "text-fg-muted",
          )}
        >
          {href ? textos.rotuloComPagina : textos.rotuloSemPagina}
          {href ? (
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          ) : null}
        </p>
      ) : null}
    </Card>
  );
}
