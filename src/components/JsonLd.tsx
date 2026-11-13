import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo-analisarty.png`,
    image: `${siteConfig.url}/opengraph-image.jpg`,
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: `+${siteConfig.whatsappNumber}`,
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
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
