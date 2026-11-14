import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/lib/blog-posts";
import { services, siteConfig, buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/site-config";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const relatedServices = services.filter((service) => post.relatedServiceIds.includes(service.id));
  const pageUrl = `${siteConfig.url}/blog/${post.slug}`;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
    ],
  };

  const articleData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo-analisarty.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />

      <article className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />

        <Container className="relative max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70">
              Início
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70">
              Blog
            </Link>
          </nav>

          <Reveal>
            <span className="text-xs font-medium text-white/40">{formatDate(post.publishedAt)}</span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 text-lg leading-relaxed text-white/65">{post.excerpt}</p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {post.sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-3">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base leading-relaxed text-white/65">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
              <p className="text-base text-white/70">
                Quer conversar sobre a presença digital da sua empresa?
              </p>
              <div className="mt-5 flex flex-col gap-4 sm:flex-row">
                <Button href={buildWhatsAppLink(defaultWhatsAppMessage)} showArrow>
                  Falar com a Analisarty
                </Button>
                {relatedServices.length > 0 && (
                  <Button href={`/servicos/${relatedServices[0].id}`} variant="secondary">
                    Ver serviço relacionado
                  </Button>
                )}
              </div>
            </div>
          </Reveal>

          {relatedServices.length > 0 && (
            <Reveal className="mt-10">
              <p className="text-sm font-semibold text-white/50">Relacionado a:</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/servicos/${service.id}`}
                    className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-white/70 hover:border-blue-400/30 hover:text-white"
                  >
                    {service.title}
                    <ArrowRight className="size-3.5" />
                  </Link>
                ))}
              </div>
            </Reveal>
          )}
        </Container>
      </article>
    </>
  );
}
