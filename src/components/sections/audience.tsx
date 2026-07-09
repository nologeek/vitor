import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { audience } from "@/content/home";

export function Audience() {
  return (
    <Section id="para-quien" divider>
      <SectionHeading eyebrow={audience.eyebrow} title={audience.title} />
      <ul className="mt-10 grid max-w-4xl gap-x-8 gap-y-3 sm:grid-cols-2">
        {audience.items.map((item, i) => (
          <ScrollReveal as="li" key={item} delay={i * 50}>
            <span className="block border-l-2 border-border pl-5 text-lg leading-relaxed text-muted transition-colors hover:border-accent hover:text-fg">
              {item}
            </span>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
