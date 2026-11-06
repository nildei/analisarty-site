import { Target, Handshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoMotion } from "@/components/graphics/PhotoMotion";
import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    icon: Target,
    title: "Visão estratégica",
    description: "Cada ação tem um motivo e um objetivo claro, ligado ao crescimento do seu negócio.",
  },
  {
    icon: Handshake,
    title: "Parceria próxima",
    description: "Você conversa diretamente com quem entende e acompanha o seu projeto.",
  },
  {
    icon: ShieldCheck,
    title: "Transparência",
    description: "Sem promessas impossíveis. Você sabe exatamente o que está sendo feito e por quê.",
  },
];

export function Authority() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal direction="right">
          <div className="relative mx-auto w-full max-w-sm">
            <PhotoMotion
              src="/images/nildei-almeida.jpg"
              alt={`${siteConfig.founder}, ${siteConfig.founderRole} da Analisarty`}
            />
            <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-white/10 bg-navy-900/95 px-5 py-4 text-center shadow-card">
              <p className="font-[family-name:var(--font-display)] text-base font-bold text-white">
                {siteConfig.founder}
              </p>
              <p className="text-xs text-blue-300">{siteConfig.founderRole}</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Quem está por trás da Analisarty
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-white sm:text-4xl">
              Seu negócio merece uma estratégia pensada para a sua realidade.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
              À frente da Analisarty, {siteConfig.founder} trabalha com soluções digitais voltadas
              ao desenvolvimento de micro e pequenas empresas. A proposta é unir estratégia,
              marketing e tecnologia para ajudar empreendedores a fortalecer sua presença no
              mercado, conquistar oportunidades e melhorar a organização de seus negócios.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <blockquote className="mt-7 border-l-2 border-blue-400 pl-5 text-base italic text-white/75">
              &ldquo;Antes de propor qualquer solução, eu quero entender o seu negócio. É assim
              que a presença digital deixa de ser vitrine e vira oportunidade.&rdquo;
            </blockquote>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.1 * index + 0.3}>
                <div>
                  <pillar.icon className="size-5 text-blue-400" />
                  <p className="mt-3 font-[family-name:var(--font-display)] text-sm font-bold text-white">
                    {pillar.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/50">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
