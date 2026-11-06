import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { services, siteConfig, buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Analisarty Negócios Online">
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={buildWhatsAppLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="transition-transform hover:scale-110"
            >
              <Image src="/images/whatsapp-icon.png" alt="" width={30} height={30} className="size-[30px]" />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-transform hover:scale-110"
            >
              <Image src="/images/instagram-icon.png" alt="" width={30} height={30} className="size-[30px] rounded-[8px]" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Soluções</p>
          <ul className="mt-4 space-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`} className="text-sm text-white/55 transition-colors hover:text-white">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Empresa</p>
          <ul className="mt-4 space-y-3">
            <li><a href="#sobre" className="text-sm text-white/55 transition-colors hover:text-white">Sobre a Analisarty</a></li>
            <li><a href="#faq" className="text-sm text-white/55 transition-colors hover:text-white">Perguntas frequentes</a></li>
            <li><a href="#diagnostico" className="text-sm text-white/55 transition-colors hover:text-white">Diagnóstico gratuito</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Legal</p>
          <ul className="mt-4 space-y-3">
            <li><Link href="/privacidade" className="text-sm text-white/55 transition-colors hover:text-white">Política de Privacidade</Link></li>
            <li><Link href="/termos" className="text-sm text-white/55 transition-colors hover:text-white">Termos de Uso</Link></li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row">
        <p>© {year} Analisarty Negócios Online. Todos os direitos reservados.</p>
        <p>{siteConfig.areaServed}</p>
      </Container>
    </footer>
  );
}
