import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/perfil-da-empresa-no-google", destination: "/servicos/google-perfil", permanent: true },
      { source: "/seo-local", destination: "/servicos/seo-local", permanent: true },
      { source: "/trafego-pago", destination: "/servicos/trafego-pago", permanent: true },
      { source: "/automacao", destination: "/servicos/automacao", permanent: true },
      { source: "/criacao-de-sites", destination: "/servicos/sites", permanent: true },
      { source: "/sistemas-de-gestao", destination: "/servicos/sistemas", permanent: true },
    ];
  },
};

export default nextConfig;
