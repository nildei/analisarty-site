import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Otimização do Perfil da Empresa no Google | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "otimização do Perfil da Empresa no Google",
    "especialista em Google Meu Negócio",
    "gestão do Perfil da Empresa no Google",
    "SEO Local",
    "otimização Google Maps",
    "como aparecer no Google Maps",
    "agência de SEO Local",
    "marketing digital para pequenas empresas",
    "gestão de tráfego pago",
    "automação de atendimento pelo WhatsApp",
    "criação de sites profissionais",
    "sistemas de gestão personalizados",
  ],
  authors: [{ name: siteConfig.founder }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `Otimização do Perfil da Empresa no Google | ${siteConfig.name}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  verification: (() => {
    const codes = [
      process.env.GOOGLE_SITE_VERIFICATION,
      process.env.GOOGLE_SITE_VERIFICATION_BR,
    ].filter((code): code is string => Boolean(code));
    return codes.length > 0 ? { google: codes } : undefined;
  })(),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081629",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        <JsonLd />
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
    </html>
  );
}
