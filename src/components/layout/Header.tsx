"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/site-config";
import { cn } from "@/lib/cn";

function WhatsAppCta({ className }: { className?: string }) {
  return (
    <Button href={buildWhatsAppLink(defaultWhatsAppMessage)} size="md" className={className}>
      <Image src="/images/whatsapp-icon.png" alt="" width={20} height={20} className="size-5" />
      Falar com especialista
    </Button>
  );
}

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex h-24 items-center justify-between py-2">
        <Link href="/" aria-label="Analisarty Negócios Online">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppCta />
        </div>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-navy-950/98 px-5 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-white/80"
              >
                {item.label}
              </a>
            ))}
            <WhatsAppCta className="mt-2 justify-center" />
          </nav>
        </div>
      )}
    </header>
  );
}
