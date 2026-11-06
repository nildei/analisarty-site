import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoMotion } from "@/components/graphics/PhotoMotion";

const cases = [
  {
    name: "Basic Fit Academia",
    segment: "Academia e saúde",
    image: "/images/case-basicfit.jpg",
    description:
      "Site institucional responsivo para apresentar modalidades, planos e estrutura da academia, com navegação rápida e integração direta com WhatsApp.",
  },
  {
    name: "CM Multimarcas",
    segment: "Revenda de veículos",
    image: "/images/case-cmmultimarcas.jpg",
    description:
      "Site para revenda de veículos com estoque em destaque, simulação de financiamento e avaliação de usados, pensado para gerar contato qualificado.",
  },
];

export function SocialProof() {
  return (
    <section id="resultados" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Resultados"
          align="center"
          title="Projetos que já colocamos no ar."
          description="Alguns sites desenvolvidos pela Analisarty para clientes reais. À medida que novos projetos e depoimentos forem autorizados, esta seção continua crescendo."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cases.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.1}>
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-3">
                <div className="relative">
                  <PhotoMotion
                    src={item.image}
                    alt={`Site desenvolvido pela Analisarty para ${item.name}`}
                    className="aspect-video border-0"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-300 backdrop-blur-sm">
                    Site no ar
                  </span>
                </div>
                <div className="px-3 pb-3 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-blue-300/80">
                    {item.segment}
                  </span>
                  <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/55">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-8 text-center">
            <Quote className="size-6 text-blue-400" />
            <p className="max-w-xl text-sm text-white/50">
              Mais projetos e depoimentos reais de clientes serão publicados aqui conforme
              documentados e autorizados — sem textos fictícios ou números inventados.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
