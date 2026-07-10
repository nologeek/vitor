import { GlobalDataGridBackground } from "@/components/motion/global-data-grid-background";
import { Hero } from "@/components/sections/hero";
import { Opportunity } from "@/components/sections/opportunity";
import { BeyondMarketing } from "@/components/sections/beyond-marketing";
import { Proposal } from "@/components/sections/proposal";
import { Pillars } from "@/components/sections/pillars";
import { Method } from "@/components/sections/method";
import { WhatCanBuild } from "@/components/sections/what-can-build";
import { PortfolioTeaser } from "@/components/sections/portfolio-teaser";
import { Audience } from "@/components/sections/audience";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <GlobalDataGridBackground />

      <Hero />
      <Opportunity />
      <BeyondMarketing />
      <Proposal />
      <Pillars />
      <Method />
      <WhatCanBuild />
      <PortfolioTeaser />
      {/* Perfil híbrido oculto del home por ahora (contenido conservado en
          src/content/home.ts para futuras fases). */}
      <Audience />
      <FinalCta />
    </>
  );
}
