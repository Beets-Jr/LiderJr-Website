import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Imagem } from "@/types/comum";

/**
 * Envolve o next/image e recebe a imagem inteira (src + alt + dimensões)
 * vinda da camada de conteúdo. Assim o `alt` nunca é esquecido nem inventado
 * no componente.
 */
export interface FotoProps {
  imagem: Imagem;
  /**
   * Preenche o contêiner pai, que precisa ter `relative` e uma altura ou
   * proporção definida. É o modo usado em heros, capas e cards recortados.
   * Quando false, a imagem usa a largura e a altura declaradas no conteúdo.
   */
  preencher?: boolean;
  /** Dica de tamanho para o navegador escolher a resolução certa. */
  sizes?: string;
  /** Use apenas na imagem principal acima da dobra. */
  priority?: boolean;
  className?: string;
}

export function Foto({
  imagem,
  preencher = true,
  sizes = "100vw",
  priority = false,
  className,
}: FotoProps) {
  if (!preencher) {
    return (
      <Image
        src={imagem.src}
        alt={imagem.alt}
        width={imagem.largura}
        height={imagem.altura}
        sizes={sizes}
        priority={priority}
        className={className}
      />
    );
  }

  return (
    <Image
      src={imagem.src}
      alt={imagem.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
