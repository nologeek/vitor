import { Container } from "@/components/ui/container";
import { CinematicSection } from "@/components/motion/cinematic-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { beyondMarketing } from "@/content/home";

export function BeyondMarketing() {
  return (
    <section id="mas-alla-del-marketing" className="border-t border-border">
      <Container>
        <CinematicSection
          eyebrow={beyondMarketing.eyebrow}
          title={beyondMarketing.title}
          contentClassName="max-w-3xl"
        >
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {beyondMarketing.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ScrollReveal animation="slide-up" className="mt-8 block">
            <p className="border-l-2 border-accent pl-5 text-xl font-medium leading-relaxed text-balance">
              {beyondMarketing.emphasis}
            </p>
          </ScrollReveal>
        </CinematicSection>
      </Container>
    </section>
  );
}
