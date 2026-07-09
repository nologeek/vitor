import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberedCard } from "@/components/cards/numbered-card";
import { assets } from "@/content/home";

export function WhatCanBuild() {
  return (
    <Section id="que-construir" divider>
      <SectionHeading eyebrow={assets.eyebrow} title={assets.title} />

      <ul className="mt-8 grid max-w-4xl gap-x-8 gap-y-2 text-lg text-muted sm:grid-cols-2">
        {assets.scenarios.map((scenario) => (
          <li key={scenario} className="flex gap-3">
            <span className="text-accent" aria-hidden="true">
              —
            </span>
            <span>{scenario}</span>
          </li>
        ))}
      </ul>

      <p className="mt-14 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {assets.itemsTitle}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {assets.items.map((item, i) => (
          <NumberedCard
            key={item.title}
            index={i + 1}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}
