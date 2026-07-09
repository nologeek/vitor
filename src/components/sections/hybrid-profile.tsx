import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { hybridProfile } from "@/content/home";

export function HybridProfile() {
  return (
    <Section id="perfil-hibrido" divider>
      <SectionHeading eyebrow={hybridProfile.eyebrow} title={hybridProfile.title}>
        {hybridProfile.body}
      </SectionHeading>
      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Capacidades">
        {hybridProfile.tags.map((tag, i) => (
          <ScrollReveal as="li" key={tag} delay={i * 40}>
            <Tag>{tag}</Tag>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
