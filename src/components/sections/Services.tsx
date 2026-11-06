import { Check, LayoutDashboard, LayoutTemplate, MapPin, MousePointerClick, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SiteBuilderMockup } from "@/components/graphics/SiteBuilderMockup";
import { PhotoMotion } from "@/components/graphics/PhotoMotion";
import { services, buildWhatsAppLink } from "@/lib/site-config";

const iconMap = {
  MapPin,
  TrendingUp,
  LayoutTemplate,
  MousePointerClick,
  LayoutDashboard,
};

const mockupMap: Record<string, React.ReactNode> = {
  "google-perfil": (
    <PhotoMotion
      src="/images/google-perfil-busca.jpg"
      alt="Busca no Google e no Google Maps mostrando resultados locais de empresas"
      className="aspect-video"
    />
  ),
  "trafego-pago": (
    <PhotoMotion
      src="/images/trafego-pago-ads.jpg"
      alt="Painel do Google Ads com métricas de uma campanha de tráfego pago"
      className="aspect-video"
    />
  ),
  sistemas: (
    <PhotoMotion
      src="/images/sistema-autogestao.jpg"
      alt="Sistema de gestão desenvolvido pela Analisarty, com dashboard de clientes, estoque e financeiro"
      className="aspect-video"
    />
  ),
};

const featuredIds = ["google-perfil", "trafego-pago", "sistemas"];
const featured = services.filter((service) => featuredIds.includes(service.id));
const rest = services.filter((service) => !featuredIds.includes(service.id));

export function Services() {
  return (
    <section id="solucoes" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Soluções"
          title="Conheça as soluções que podem impulsionar o crescimento da sua empresa."
          description="Não basta divulgar sua empresa. Analisamos suas necessidades e unimos marketing, tecnologia e estratégia para construir uma presença digital que gera oportunidades reais."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.id} delay={index * 0.1}>
                <article
                  id={service.id}
                  className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 lg:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-300">
                        {service.tag}
                      </span>
                      <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold text-white lg:text-2xl">
                        {service.headline}
                      </h3>
                    </div>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <Icon className="size-5" />
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-white/60">{service.description}</p>

                  {mockupMap[service.id]}

                  <ul className="space-y-2">
                    {service.benefits.slice(0, 4).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-white/65">
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={buildWhatsAppLink(service.whatsappMessage)}
                    variant="secondary"
                    showArrow
                    className="mt-auto w-fit"
                  >
                    {service.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {rest.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.id} delay={index * 0.1}>
                <article
                  id={service.id}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-blue-400/30"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <Icon className="size-5" />
                    </span>
                    {service.id === "sites" && (
                      <span className="text-[11px] font-medium text-white/30">preview ao vivo</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wide text-blue-300/80">
                      {service.tag}
                    </span>
                    <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                      {service.headline}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-white/55">{service.description}</p>
                  {service.id === "sites" && <SiteBuilderMockup />}
                  <ul className="space-y-1.5">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-xs text-white/55">
                        <Check className="mt-0.5 size-3.5 shrink-0 text-blue-400" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={buildWhatsAppLink(service.whatsappMessage)}
                    variant="secondary"
                    size="md"
                    showArrow
                    className="mt-auto w-fit"
                  >
                    {service.cta}
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
