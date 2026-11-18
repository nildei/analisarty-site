"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Eye, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WordsPullUp } from "@/components/ui/WordsPullUp";
import { PhotoMotion } from "@/components/graphics/PhotoMotion";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/site-config";

const benefits = [
  { icon: Eye, label: "Mais visibilidade para sua empresa" },
  { icon: ShieldCheck, label: "Mais credibilidade no ambiente digital" },
  { icon: Users, label: "Mais oportunidades de conquistar clientes" },
];

function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-blue-600/30 blur-[140px]"
        animate={{ x: [0, 60, -20, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[10%] h-[460px] w-[460px] rounded-full bg-blue-400/20 blur-[130px]"
        animate={{ x: [0, -50, 30, 0], y: [0, 30, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[120px]"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const globeScale = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-24 pb-10 lg:pt-28"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: globeScale }}>
          <div className="animate-spin-slow absolute -inset-1/3">
            <Image
              src="/images/hero-bg-globe-v2.jpg"
              alt=""
              fill
              priority
              className="object-cover opacity-60"
              style={{ objectPosition: "75% 45%" }}
            />
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/50 to-navy-950/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/55" />
        {/* Solid block matches the fixed header's own height (h-28 = 112px) so the
            background art never shows through behind the logo, on any screen size. */}
        <div className="absolute inset-x-0 top-0 h-28 bg-navy-950" />
        <div className="absolute inset-x-0 top-28 h-28 bg-gradient-to-b from-navy-950 to-transparent" />
      </div>
      <AuroraBackground />
      <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300"
          >
            <span className="size-1.5 rounded-full bg-blue-400" />
            Estratégia, Tecnologia e Crescimento
          </motion.span>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
            <WordsPullUp text="Otimização do" delay={0.1} />{" "}
            <WordsPullUp text="Perfil da Empresa no Google" className="text-gradient" delay={0.22} />{" "}
            <WordsPullUp text="para atrair mais clientes." delay={0.58} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-white/65 lg:text-lg"
          >
            Ajudamos pequenas e médias empresas a conquistar mais visibilidade no Google e
            Google Maps, atrair clientes qualificados e fortalecer sua presença digital. Com
            estratégias de SEO Local, tráfego pago, automação e tecnologia, transformamos
            oportunidades digitais em crescimento para seu negócio.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            {benefits.map((benefit) => (
              <li
                key={benefit.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
              >
                <benefit.icon className="size-4 text-blue-400" />
                {benefit.label}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-7 flex flex-wrap items-center gap-4"
          >
            <a
              href={buildWhatsAppLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-blue-600 py-1.5 pl-6 pr-1.5 text-base font-semibold text-white shadow-[0_18px_40px_-12px_rgba(23,105,255,0.55)] transition-all hover:gap-4 hover:bg-blue-500 hover:shadow-[0_22px_48px_-12px_rgba(23,105,255,0.7)]"
            >
              Quero fazer minha empresa crescer
              <span className="flex size-10 items-center justify-center rounded-full bg-navy-950 transition-transform group-hover:scale-110">
                <ArrowRight className="size-4 text-white" />
              </span>
            </a>
            <Button href="#solucoes" variant="secondary" size="lg">
              Conheça nossas soluções
            </Button>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-[28px] p-[1px]"
            style={{
              background: "linear-gradient(135deg, rgba(64,169,255,0.6), rgba(23,105,255,0.05) 40%, rgba(64,169,255,0.4))",
            }}
          >
            <div className="rounded-[27px] bg-navy-950 p-2">
              <PhotoMotion
                src="/images/hero-pesquisa-google.jpg"
                alt="Empresário pesquisando no Google e acompanhando indicadores de marketing digital no notebook"
                className="aspect-video rounded-[20px]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
