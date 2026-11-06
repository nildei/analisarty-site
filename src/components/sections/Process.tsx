import { Compass, Blocks, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Entendemos",
    description: "Conhecemos sua empresa, seus desafios, seu público e seus objetivos de crescimento.",
  },
  {
    number: "02",
    icon: Blocks,
    title: "Estruturamos",
    description: "Identificamos oportunidades e recomendamos as soluções que fazem sentido para o seu momento.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Desenvolvemos",
    description: "Implementamos as estratégias combinadas e acompanhamos os resultados junto com você.",
  },
];

export function Process() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Diferencial consultivo"
          align="center"
          title="Antes de oferecer uma solução, queremos entender o seu negócio."
          description="Cada empresa possui desafios diferentes. Por isso, nosso trabalho começa entendendo sua realidade — você não precisa contratar tudo de uma vez. Apresentamos um caminho estratégico, respeitando suas necessidades."
          className="mx-auto"
        />

        <div className="relative mt-16 grid gap-6 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent sm:block" />
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.12} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative flex size-24 items-center justify-center rounded-full border border-blue-400/30 bg-navy-900">
                  <step.icon className="size-8 text-blue-300" />
                  <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
