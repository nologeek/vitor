import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberedCard } from "@/components/cards/numbered-card";
import { pillars } from "@/content/home";

export function Pillars() {
  return (
    <Section id="pilares" divider>
      <SectionHeading eyebrow={pillars.eyebrow} title={pillars.title} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.items.map((item, i) => (
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
