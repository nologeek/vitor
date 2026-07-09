import { Container } from "@/components/ui/container";
import { CinematicSection } from "@/components/motion/cinematic-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { opportunity } from "@/content/home";

export function Opportunity() {
  return (
    <section id="oportunidad" className="border-t border-border">
      <Container>
        <CinematicSection
          eyebrow={opportunity.eyebrow}
          title={opportunity.title}
          contentClassName="max-w-3xl"
        >
          <ul>
            {opportunity.lines.map((line, i) => (
              <ScrollReveal as="li" key={line} delay={i * 60}>
                <span className="block border-l-2 border-border py-2.5 pl-5 text-lg leading-relaxed text-muted transition-colors hover:border-accent hover:text-fg">
                  {line}
                </span>
              </ScrollReveal>
            ))}
          </ul>
        </CinematicSection>
      </Container>
    </section>
  );
}
