"use client";

import { motion } from "framer-motion";
import { Eye, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoMotion } from "@/components/graphics/PhotoMotion";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/site-config";

const benefits = [
  { icon: Eye, label: "Mais visibilidade para sua empresa" },
  { icon: ShieldCheck, label: "Mais credibilidade no ambiente digital" },
  { icon: Users, label: "Mais oportunidades de conquistar clientes" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="grid-overlay absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[140px]" />

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

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            Sua empresa merece ser{" "}
            <span className="text-gradient">encontrada, reconhecida</span> e escolhida pelos clientes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/65"
          >
            Transformamos sua presença digital em oportunidades de negócio. Ajudamos micro e
            pequenas empresas a conquistar mais visibilidade no Google, atrair clientes,
            fortalecer sua marca e melhorar sua gestão com estratégia, marketing e tecnologia.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
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
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href={buildWhatsAppLink(defaultWhatsAppMessage)} size="lg" showArrow>
              Quero fazer minha empresa crescer
            </Button>
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
          >
            <PhotoMotion
              src="/images/hero-pesquisa-google.jpg"
              alt="Empresário pesquisando no Google e acompanhando indicadores de marketing digital no notebook"
              className="aspect-video"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24, y: 24 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="absolute -bottom-10 -right-6 hidden w-[230px] sm:block lg:-right-10"
          >
            <PhotoMotion
              src="/images/sistema-autogestao.jpg"
              alt="Sistema de gestão desenvolvido pela Analisarty, com dashboard de clientes, estoque e financeiro"
              className="aspect-[4/3]"
              objectPosition="65% center"
            />
            <p className="mt-2 text-center text-[11px] font-semibold text-white/70">
              Sistemas sob medida para sua gestão
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 hidden rounded-xl border border-white/10 bg-navy-900/90 px-3 py-2.5 text-xs font-semibold text-white shadow-card lg:flex lg:items-center lg:gap-2"
          >
            <ShieldCheck className="size-4 text-emerald-400" />
            Atendimento 100% online
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-4 top-6 hidden rounded-xl border border-white/10 bg-navy-900/90 px-3 py-2.5 text-xs font-semibold text-white shadow-card lg:flex lg:items-center lg:gap-2"
          >
            <MessageCircle className="size-4 text-blue-300" />
            Fala direto com especialista
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
