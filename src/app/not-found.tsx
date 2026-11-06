import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center py-24">
      <Container className="flex flex-col items-center text-center">
        <span className="font-[family-name:var(--font-display)] text-7xl font-bold text-gradient">
          404
        </span>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
          Essa página não foi encontrada.
        </h1>
        <p className="mt-3 max-w-md text-sm text-white/55">
          O endereço pode ter mudado ou não existe mais. Volte para a página inicial e continue
          explorando as soluções da Analisarty.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/">Voltar para a home</Button>
          <Link href="/#faq" className="flex items-center text-sm font-medium text-white/60 hover:text-white">
            Ver perguntas frequentes
          </Link>
        </div>
      </Container>
    </section>
  );
}
