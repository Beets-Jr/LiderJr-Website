/**
 * ============================================================================
 * O CUBO DA LÍDER JR.
 * ============================================================================
 * O símbolo da marca, redesenhado em vetor a partir do arquivo oficial
 * (liderjr.com/wp-content/uploads/2024/01/Cubo-Lider.png, 522×592) — mesma
 * geometria, mesmas espessuras e a mesma cor. O site antigo só tinha o símbolo
 * em PNG; em vetor ele fica nítido em qualquer tamanho, do favicon à prévia de
 * compartilhamento.
 *
 * Um desenho só, usado em três lugares:
 *   · `CuboDaMarca` — o logo do cabeçalho e do rodapé (layout/logo.tsx);
 *   · `SVG_DO_CUBO` — a imagem de compartilhamento (lib/imagem-de-compartilhamento.tsx);
 *   · src/app/icon.svg e public/imagens/marca/ — cópias estáticas do mesmo
 *     desenho, para o favicon e para o `logo` dos dados estruturados. Ao mexer
 *     aqui, refaça as duas.
 * ============================================================================
 */

/** A cor do cubo no arquivo oficial — mais fechada que o laranja da interface. */
export const COR_DO_CUBO = "#cc6538";

/** Recorte justo no desenho, com a folga dos cantos arredondados. */
const VIEWBOX = "0.5 -6.5 520 600.2";

const CONTORNO = "M260.5 3 511 147.6V439.7L260.5 584.2 10 439.7V147.6Z";
const ARESTAS_DA_FRENTE = "M10 147.6 260.5 292.5 511 147.6M260.5 292.5V584.2";
const ARESTAS_DE_TRAS = "M260.5 3V292.5M260.5 292.5 10 439.7M260.5 292.5 511 439.7";

/**
 * Enquadramento para o logo do cabeçalho e do rodapé, desenhado em 33×36px.
 *
 * Nesse tamanho a aresta grossa vira ~1,1px. Com o recorte justo, a lateral
 * direita caía na divisa entre dois pixels e a tela pintava os dois pela
 * metade — a linha ficava clara e fina, e só voltava ao normal com zoom. Aqui
 * a folga à esquerda põe as duas laterais no centro de um pixel (1,5px e
 * 31,5px), e elas saem inteiras.
 */
export const VIEWBOX_DO_LOGO = "-15 -6.5 550.2 600.2";

export function CuboDaMarca({
  className,
  viewBox = VIEWBOX,
}: {
  className?: string;
  /** Troque só por um enquadramento ajustado a um tamanho fixo. */
  viewBox?: string;
}) {
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke={COR_DO_CUBO} strokeLinejoin="round">
        <path strokeWidth={19} d={CONTORNO} />
        <path strokeWidth={19} d={ARESTAS_DA_FRENTE} />
        <path strokeWidth={3} d={ARESTAS_DE_TRAS} />
      </g>
    </svg>
  );
}

/** O mesmo desenho em texto, para usar como `data:` numa <img>. */
export const SVG_DO_CUBO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VIEWBOX}"><g fill="none" stroke="${COR_DO_CUBO}" stroke-linejoin="round"><path stroke-width="19" d="${CONTORNO}"/><path stroke-width="19" d="${ARESTAS_DA_FRENTE}"/><path stroke-width="3" d="${ARESTAS_DE_TRAS}"/></g></svg>`;

/** Proporção largura/altura do desenho, para dimensionar a <img>. */
export const PROPORCAO_DO_CUBO = 520 / 600.2;
