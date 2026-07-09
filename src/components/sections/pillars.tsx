import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberedCard } from "@/components/cards/numbered-card";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { pillars } from "@/content/home";

export function Pillars() {
  return (
    <Section id="pilares" divider>
      <SectionHeading eyebrow={pillars.eyebrow} title={pillars.title} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.items.map((item, i) => (
          <ScrollReveal as="div" animation="slide-up" delay={i * 70} key={item.title}>
            <NumberedCard
              motion
              index={i + 1}
              title={item.title}
              description={item.description}
            />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
