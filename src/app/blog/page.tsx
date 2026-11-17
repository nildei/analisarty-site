import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdo sobre Perfil da Empresa no Google, SEO local, tráfego pago, sites e gestão para pequenas empresas.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${siteConfig.fullName}`,
    url: `${siteConfig.url}/blog`,
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Blog"
          align="center"
          title="Conteúdo sobre presença digital para pequenas empresas."
          description="Artigos sobre Perfil da Empresa no Google, SEO local, tráfego pago, sites e gestão — sem fórmulas prontas, sem promessas de resultado garantido."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="hover-glow group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-blue-400/30"
              >
                <span className="text-xs font-medium text-white/40">
                  {formatDate(post.publishedAt)}
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-white/60">{post.excerpt}</p>
                <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-blue-300 group-hover:text-blue-200">
                  Ler artigo
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
