import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { SocialProof } from "@/components/sections/SocialProof";
import { Partners } from "@/components/sections/Partners";
import { Authority } from "@/components/sections/Authority";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { HomeFaqJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <HomeFaqJsonLd />
      <Hero />
      <Problem />
      <Services />
      <Process />
      <SocialProof />
      <Partners />
      <Authority />
      <FinalCTA />
      <FAQSection />
    </>
  );
}
