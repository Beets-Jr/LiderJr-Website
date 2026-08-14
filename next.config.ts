import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Todas as imagens são locais (public/imagens). Nenhum host remoto é permitido —
  // o build é autocontido e não depende de terceiros.
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
