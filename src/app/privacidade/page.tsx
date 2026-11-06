import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a Analisarty coleta, usa e protege os dados enviados pelo site.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <section className="py-32">
      <Container className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-white/40">Última atualização: novembro de 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/65">
          <div>
            <h2 className="text-lg font-bold text-white">1. Quais dados coletamos</h2>
            <p className="mt-2">
              Coletamos apenas os dados que você informa voluntariamente pelo formulário de
              diagnóstico gratuito: nome, empresa, cidade/país, número de WhatsApp, principal
              necessidade e, quando enviado, o link do seu perfil ou Instagram.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">2. Como usamos esses dados</h2>
            <p className="mt-2">
              Os dados preenchidos no formulário são usados exclusivamente para montar a
              mensagem que abre sua conversa no WhatsApp com a {siteConfig.fullName}. Nenhum
              dado é armazenado em servidores deste site ou compartilhado com terceiros.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">3. Cookies e analytics</h2>
            <p className="mt-2">
              Este site pode utilizar ferramentas de análise de audiência para entender, de
              forma agregada e anônima, como os visitantes utilizam as páginas, com o objetivo
              de melhorar a experiência oferecida.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">4. Seus direitos</h2>
            <p className="mt-2">
              Você pode solicitar, a qualquer momento, informações sobre os dados que enviou ou
              pedir sua exclusão, entrando em contato diretamente pelo WhatsApp disponível no
              site.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">5. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre esta política, fale com a equipe da {siteConfig.fullName}
              {" "}pelo WhatsApp ou Instagram informados no rodapé do site.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
