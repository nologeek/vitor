import { Container } from "@/components/ui/container";
import { EditorialSection } from "@/components/sections/editorial-section";
import { DepthCardsRow } from "@/components/sections/depth-cards-row";
import { assets } from "@/content/home";

export function WhatCanBuild() {
  return (
    <section id="que-construir" className="relative">
      {/* Intro editorial (label + escenarios en columna, titular a la derecha). */}
      <EditorialSection
        label={assets.label}
        items={assets.scenarios}
        title={assets.title}
      />

      {/* Activos: cards con profundidad. */}
      <Container className="pb-24 sm:pb-36">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          {assets.itemsTitle}
        </p>
        <div className="mt-10">
          <DepthCardsRow items={assets.items} />
        </div>
      </Container>
    </section>
  );
}
