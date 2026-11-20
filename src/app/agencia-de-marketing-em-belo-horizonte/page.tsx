import type { Metadata } from "next";
import { CityLocationPage } from "@/components/CityLocationPage";
import { cities } from "@/lib/cities";
import { siteConfig } from "@/lib/site-config";

const city = cities.find((item) => item.slug === "belo-horizonte")!;

export const metadata: Metadata = {
  title: `Agência de Marketing Digital em ${city.name}`,
  description: `Otimização do Perfil da Empresa no Google e SEO Local para empresas de ${city.name}, no mercado mais disputado da região. Diagnóstico gratuito.`,
  alternates: { canonical: `/agencia-de-marketing-em-${city.slug}` },
  openGraph: {
    title: `Agência de Marketing Digital em ${city.name}`,
    description: `Otimização do Perfil da Empresa no Google e SEO Local para empresas de ${city.name}.`,
    url: `${siteConfig.url}/agencia-de-marketing-em-${city.slug}`,
  },
};

export default function Page() {
  return <CityLocationPage city={city} />;
}
