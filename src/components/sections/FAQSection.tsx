import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/site-config";

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas"
          align="center"
          title="Perguntas frequentes"
          description="Tire suas dúvidas e descubra como a Analisarty pode ajudar sua empresa."
          className="mx-auto"
        />
        <Reveal delay={0.1} className="mt-12">
          <Accordion items={faqItems} />
        </Reveal>
      </Container>
    </section>
  );
}
