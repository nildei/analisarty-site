import { EyeOff, UserX, Smartphone, Repeat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/site-config";

const situations = [
  {
    icon: EyeOff,
    title: "Sua empresa não aparece nas pesquisas locais do Google",
    description:
      "Quem procura pelo seu serviço acaba encontrando primeiro o concorrente, mesmo que você ofereça mais qualidade.",
  },
  {
    icon: UserX,
    title: "Seus concorrentes têm uma presença digital mais profissional",
    description:
      "Perfis completos, sites modernos e boas avaliações transmitem mais confiança na hora da escolha.",
  },
  {
    icon: Smartphone,
    title: "Você investe em divulgação, mas não atrai oportunidades qualificadas",
    description:
      "Gastar com anúncios sem estratégia gera cliques, mas não necessariamente clientes.",
  },
  {
    icon: Repeat,
    title: "Seus processos ainda dependem de controles manuais e desorganizados",
    description:
      "Planilhas soltas e anotações avulsas custam tempo e deixam a gestão vulnerável a erros.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="O desafio"
          title="Seu negócio pode estar perdendo oportunidades todos os dias sem você perceber."
          description={
            <>
              Imagine um cliente procurando exatamente pelo produto ou serviço que sua empresa
              oferece. Ele pesquisa no Google, compara informações, observa avaliações e escolhe
              aquela que transmite mais confiança.{" "}
              <span className="font-semibold text-white">
                Sua empresa está entre as opções que ele encontra?
              </span>
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {situations.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-blue-400/30 hover:bg-white/[0.04]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 transition-colors group-hover:bg-blue-500/20">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/55">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 flex justify-center">
          <Button
            href={buildWhatsAppLink(
              "Olá! Vim pelo site e quero entender como melhorar a presença digital da minha empresa.",
            )}
            size="lg"
            showArrow
          >
            Quero melhorar meu negócio
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
