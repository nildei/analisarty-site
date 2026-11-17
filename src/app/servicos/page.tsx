import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  LayoutDashboard,
  LayoutTemplate,
  MapPin,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services, siteConfig } from "@/lib/site-config";

const iconMap = {
  MapPin,
  TrendingUp,
  LayoutTemplate,
  MousePointerClick,
  LayoutDashboard,
};

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça em detalhes os serviços da Analisarty: Perfil da Empresa no Google, tráfego pago, criação de sites, landing pages e sistemas de gestão.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: `Serviços | ${siteConfig.fullName}`,
    url: `${siteConfig.url}/servicos`,
  },
};

export default function ServicosPage() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />

      <Container className="relative">
        <SectionHeading
          eyebrow="Serviços"
          align="center"
          title="Soluções pensadas para cada etapa do crescimento da sua empresa."
          description="Cada serviço pode ser contratado de forma independente, de acordo com a prioridade e o momento do seu negócio."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.id} delay={index * 0.08}>
                <Link
                  href={`/servicos/${service.id}`}
                  className="hover-glow group flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-blue-400/30"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wide text-blue-300/80">
                      {service.tag}
                    </span>
                    <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-white/60">{service.description}</p>
                  <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-blue-300 group-hover:text-blue-200">
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
  );
}
