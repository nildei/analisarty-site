import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Condições de uso do site institucional da Analisarty Negócios Online.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <section className="py-32">
      <Container className="max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white">
          Termos de Uso
        </h1>
        <p className="mt-2 text-sm text-white/40">Última atualização: novembro de 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/65">
          <div>
            <h2 className="text-lg font-bold text-white">1. Sobre este site</h2>
            <p className="mt-2">
              Este site é um canal institucional da {siteConfig.fullName}, destinado a
              apresentar os serviços oferecidos e facilitar o contato comercial com potenciais
              clientes.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">2. Uso do conteúdo</h2>
            <p className="mt-2">
              Os textos, imagens e elementos visuais deste site pertencem à {siteConfig.fullName}
              {" "}e não podem ser reproduzidos sem autorização prévia.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">3. Natureza das informações</h2>
            <p className="mt-2">
              As informações sobre serviços, prazos e resultados possíveis têm caráter
              orientativo. Não garantimos posições específicas em mecanismos de busca nem
              resultados financeiros determinados, pois dependem de fatores próprios de cada
              negócio e mercado.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">4. Contratação de serviços</h2>
            <p className="mt-2">
              A contratação de qualquer serviço apresentado neste site é formalizada em
              conversa direta com a equipe da {siteConfig.fullName}, com condições específicas
              acordadas conforme a necessidade de cada cliente.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">5. Alterações</h2>
            <p className="mt-2">
              Estes termos podem ser atualizados periodicamente para refletir mudanças nos
              serviços oferecidos ou na legislação aplicável.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
