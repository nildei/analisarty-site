import { siteConfig, services, faqItems } from "@/lib/site-config";

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
    areaServed: [
      {
        "@type": "City",
        name: "Contagem",
        containedInPlace: {
          "@type": "State",
          name: "Minas Gerais",
        },
      },
      {
        "@type": "Country",
        name: "BR",
      },
    ],
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
      "SEO Local",
      "Gestão de tráfego pago",
      "Automação de atendimento pelo WhatsApp",
      "Criação de sites institucionais",
      "Criação de landing pages",
      "Desenvolvimento de aplicativos e sistemas de gestão",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Analisarty Negócios Online",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${siteConfig.url}/servicos/${service.id}`,
        },
      })),
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/logo-analisarty.png`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}

export function HomeFaqJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
