import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { partners } from "@/lib/site-config";

const track = [...partners, ...partners];

export function Partners() {
  return (
    <section className="relative py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Clientes parceiros"
          align="center"
          title="Empresas que acreditaram no potencial de mudança."
          description="Negócios de diferentes segmentos que confiaram na Analisarty para fortalecer sua presença digital."
          className="mx-auto"
        />
      </Container>

      <Reveal delay={0.1} className="mt-12">
        <div className="marquee-paused relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-stretch gap-3 sm:gap-4">
            {track.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex w-24 shrink-0 flex-col items-center gap-2 sm:w-28 lg:w-32"
              >
                <div className="flex h-16 w-full items-center justify-center rounded-xl bg-white p-2.5 shadow-card sm:h-20 lg:h-24">
                  <div className="relative h-full w-full">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      loading="eager"
                      sizes="128px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-center text-[10px] font-medium leading-tight text-white/60 sm:text-xs">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
