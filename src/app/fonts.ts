import { DM_Serif_Display, League_Spartan, Raleway } from "next/font/google";

/**
 * As três famílias do protótipo, agora carregadas pelo next/font.
 * Isso elimina o `@import` bloqueante do Google Fonts e as ~259 declarações
 * `style={{ fontFamily }}` inline que existiam no App.tsx.
 *
 * Cada fonte expõe uma CSS variable consumida por --font-heading / --font-body /
 * --font-serif em globals.css.
 */

export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const fontVariables = [
  leagueSpartan.variable,
  raleway.variable,
  dmSerifDisplay.variable,
].join(" ");
