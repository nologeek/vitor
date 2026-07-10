import { GlobalDataGridBackground } from "@/components/motion/global-data-grid-background";
import { Hero } from "@/components/sections/hero";
import { Opportunity } from "@/components/sections/opportunity";
import { BeyondMarketing } from "@/components/sections/beyond-marketing";
import { Proposal } from "@/components/sections/proposal";
import { Pillars } from "@/components/sections/pillars";
import { Method } from "@/components/sections/method";
import { WhatCanBuild } from "@/components/sections/what-can-build";
import { PortfolioTeaser } from "@/components/sections/portfolio-teaser";
import { HybridProfile } from "@/components/sections/hybrid-profile";
import { Audience } from "@/components/sections/audience";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      {/* Fondo global de sistema (grid + nodos), capa fixed sutil. */}
      <GlobalDataGridBackground />

      <Hero />

      {/* WHY — por qué importa conectar marca, negocio, operación y tecnología */}
      <Opportunity />
      <BeyondMarketing />

      {/* HOW — cómo se construyen los ecosistemas */}
      <Proposal />
      <Pillars />
      <Method />

      {/* WHAT — qué se construye */}
      <WhatCanBuild />
      <PortfolioTeaser />

      {/* Cierre — perfil, audiencia y llamada a la acción */}
      <HybridProfile />
      <Audience />
      <FinalCta />
    </>
  );
}
