import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
      jobTitle: siteConfig.founderRole,
    },
    areaServed: {
      "@type": "Country",
      name: "BR",
    },
    sameAs: [siteConfig.instagram, siteConfig.linkedin],
    priceRange: "$$",
    serviceType: [
      "Otimização do Perfil da Empresa no Google",
      "Gestão de tráfego pago",
      "Criação de sites institucionais",
      "Criação de landing pages",
      "Desenvolvimento de aplicativos e sistemas de gestão",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
