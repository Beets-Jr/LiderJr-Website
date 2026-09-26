import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * A interface do CMS nunca deve aparecer no Google. O robots.txt já pede para
 * não rastrear /keystatic; esta meta tag cobre o caso de alguém linkar para
 * ela de fora.
 */
export const metadata: Metadata = {
  title: "CMS",
  robots: { index: false, follow: false },
};

export default function LayoutDoCms({ children }: { children: ReactNode }) {
  return children;
}
