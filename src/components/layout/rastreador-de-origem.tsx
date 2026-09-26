"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { registrarPagina } from "@/lib/origem-do-visitante";

/**
 * Anota cada página visitada para o formulário de contato saber de onde a
 * pessoa veio. Não renderiza nada. Ver lib/origem-do-visitante.ts.
 */
export function RastreadorDeOrigem() {
  const pathname = usePathname();

  useEffect(() => {
    registrarPagina(pathname);
  }, [pathname]);

  return null;
}
