import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DiagnosisForm } from "@/components/sections/DiagnosisForm";

export function FinalCTA() {
  return (
    <section id="diagnostico" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <div className="grid-overlay absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <div className="absolute -left-20 top-1/2 size-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -right-20 top-0 size-80 rounded-full bg-blue-500/15 blur-[120px]" />

      <Container className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Diagnóstico gratuito
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-white sm:text-4xl">
              Enquanto seus clientes procuram soluções, sua empresa precisa estar pronta para
              ser encontrada.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              Não deixe sua presença digital limitar o potencial do seu negócio. Preencha o
              formulário e converse em poucos minutos com um especialista sobre como a Analisarty
              pode ajudar sua empresa a conquistar mais visibilidade e oportunidades.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-7 space-y-2.5 text-sm text-white/60">
              <li>✓ Análise de como sua empresa aparece no Google hoje</li>
              <li>✓ Oportunidades de melhoria priorizadas</li>
              <li>✓ Orientação clara sobre os próximos passos</li>
              <li>✓ Sem custo e sem compromisso</li>
            </ul>
          </Reveal>
        </div>

        <Reveal direction="left" delay={0.1}>
          <DiagnosisForm />
        </Reveal>
      </Container>
    </section>
  );
}
