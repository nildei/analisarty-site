import Link from "next/link";
import {
  ArrowRight,
  Bot,
  LayoutDashboard,
  LayoutTemplate,
  MapPin,
  MousePointerClick,
  Search,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { services, faqItems, siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";
import { cities, type CityDefinition } from "@/lib/cities";

const iconMap = {
  MapPin,
  Search,
  TrendingUp,
  Bot,
  LayoutTemplate,
  MousePointerClick,
  LayoutDashboard,
};

export function CityLocationPage({ city }: { city: CityDefinition }) {
  const relatedServices = services.filter((service) => city.relatedServiceIds.includes(service.id));
  const relatedPosts = blogPosts.filter((post) =>
    post.relatedServiceIds.some((id) => city.relatedServiceIds.includes(id)),
  );
  const otherCities = cities.filter((item) => item.slug !== city.slug);
  const pageUrl = `${siteConfig.url}/agencia-de-marketing-em-${city.slug}`;

  const localFaq = [
    faqItems[0],
    {
      question: `A Analisarty tem escritório em ${city.name}?`,
      answer: `Não. Atendemos empresas em ${city.name} de forma 100% remota, assim como em toda a região metropolitana de Belo Horizonte. Diagnóstico, reuniões e suporte acontecem por WhatsApp e videochamada, sem custo de deslocamento repassado para o cliente.`,
    },
    faqItems[9],
  ];

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: `Agência em ${city.name}`, item: pageUrl },
    ],
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Marketing digital em ${city.name}`,
    description: `Otimização do Perfil da Empresa no Google e SEO Local para empresas de ${city.name}, Minas Gerais.`,
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Minas Gerais" },
    },
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />

        <Container className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">
              Início
            </Link>
            <span>/</span>
            <span className="text-white/60">{city.name}</span>
          </nav>

          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <span className="size-1.5 rounded-full bg-blue-400" />
              {city.name}, Minas Gerais
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              Agência de marketing digital em {city.name}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-white/65">{city.context[0]}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href={buildWhatsAppLink(
                  `Olá! Vim pelo site da Analisarty e quero entender como vocês podem ajudar minha empresa em ${city.name} a crescer.`,
                )}
                size="lg"
                showArrow
              >
                Quero aparecer mais no Google
              </Button>
              <Button href="/servicos" variant="secondary" size="lg">
                Ver todos os serviços
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <p className="text-base leading-relaxed text-white/65">{city.context[1]}</p>

          <Reveal className="mt-10">
            <p className="text-sm font-semibold text-white/50">Sobre {city.name}:</p>
            <ul className="mt-4 space-y-3">
              {city.facts.map((fact) => (
                <li key={fact.text} className="text-sm leading-relaxed text-white/65 sm:text-base">
                  {fact.text}{" "}
                  <a
                    href={fact.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline decoration-blue-300/30 underline-offset-2 hover:text-blue-200"
                  >
                    ({fact.sourceName})
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-20">
          <Container>
            <SectionHeading
              eyebrow="Soluções"
              title={`O que fazemos por empresas em ${city.name}`}
              description="Os serviços mais procurados por quem quer aparecer melhor no Google na sua região."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {relatedServices.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap];
                return (
                  <Reveal key={service.id} delay={index * 0.08}>
                    <Link
                      href={`/servicos/${service.id}`}
                      className="hover-glow group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-blue-400/30"
                    >
                      <span className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/60">{service.description}</p>
                      <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-blue-300 group-hover:text-blue-200">
                        Saiba mais
                        <ArrowRight className="size-4" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Dúvidas" title={`Perguntas sobre o atendimento em ${city.name}`} />
          <Reveal delay={0.1} className="mt-10">
            <Accordion items={localFaq} />
          </Reveal>
        </Container>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-20">
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="Para saber mais" title="Artigos relacionados" />
            <div className="mt-8 flex flex-col gap-4">
              {relatedPosts.map((post) => (
                <Reveal key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover-glow group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-blue-400/30"
                  >
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">{post.title}</span>
                    <ArrowRight className="size-4 shrink-0 text-blue-300" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Região" title="Também atendemos" />
          <div className="mt-10 flex flex-wrap gap-3">
            {otherCities.map((item) => (
              <Link
                key={item.slug}
                href={`/agencia-de-marketing-em-${item.slug}`}
                className="hover-glow rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm text-white/70 transition-colors hover:border-blue-400/30 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
