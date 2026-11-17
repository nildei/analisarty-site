import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  LayoutDashboard,
  LayoutTemplate,
  MapPin,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { services, faqItems, siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog-posts";

const iconMap = {
  MapPin,
  TrendingUp,
  LayoutTemplate,
  MousePointerClick,
  LayoutDashboard,
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/servicos/${service.id}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.fullName}`,
      description: service.description,
      url: `${siteConfig.url}/servicos/${service.id}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.id === slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const relatedServices = services.filter((item) => item.id !== service.id);
  const relatedFaq = service.faqIndices.map((index) => faqItems[index]);
  const relatedPosts = blogPosts.filter((post) => post.relatedServiceIds.includes(service.id));

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${siteConfig.url}/servicos` },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${siteConfig.url}/servicos/${service.id}`,
      },
    ],
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${siteConfig.url}/servicos/${service.id}`,
    areaServed: { "@type": "Country", name: "BR" },
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  };

  const faqData = relatedFaq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: relatedFaq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />

        <Container className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">
              Início
            </Link>
            <span>/</span>
            <Link href="/servicos" className="hover:text-white/70">
              Serviços
            </Link>
            <span>/</span>
            <span className="text-white/60">{service.title}</span>
          </nav>

          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <span className="size-1.5 rounded-full bg-blue-400" />
              {service.tag}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
              {service.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-lg leading-relaxed text-white/65">{service.longDescription}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href={buildWhatsAppLink(service.whatsappMessage)} size="lg" showArrow>
                {service.cta}
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
          <div className="flex items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
              <Icon className="size-6" />
            </span>
            <p className="text-base leading-relaxed text-white/65">{service.targetAudience}</p>
          </div>

          <Reveal className="mt-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              O que está incluído
            </h2>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm text-white/70 sm:text-base">
                  <Check className="mt-0.5 size-5 shrink-0 text-blue-400" />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {relatedFaq.length > 0 && (
        <section className="py-16 lg:py-20">
          <Container className="max-w-3xl">
            <SectionHeading eyebrow="Dúvidas" title="Perguntas sobre esse serviço" />
            <Reveal delay={0.1} className="mt-10">
              <Accordion items={relatedFaq} />
            </Reveal>
          </Container>
        </section>
      )}

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
                    <span className="text-sm font-medium text-white/80 group-hover:text-white">
                      {post.title}
                    </span>
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
          <SectionHeading eyebrow="Continue explorando" title="Outros serviços" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((item, index) => {
              const RelatedIcon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Reveal key={item.id} delay={index * 0.08}>
                  <Link
                    href={`/servicos/${item.id}`}
                    className="hover-glow group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-blue-400/30"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <RelatedIcon className="size-5" />
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-white">
                      {item.title}
                    </h3>
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
    </>
  );
}
