import { Container } from "@/components/ui/container";
import { CinematicSection } from "@/components/motion/cinematic-section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { MotionCard } from "@/components/motion/motion-card";
import { proposal } from "@/content/home";

export function Proposal() {
  return (
    <section id="propuesta" className="border-t border-border">
      <Container>
        <CinematicSection eyebrow={proposal.eyebrow} title={proposal.title}>
          {proposal.intro}
        </CinematicSection>

        <div className="grid gap-3 pb-20 sm:grid-cols-2 sm:pb-28">
          {proposal.transformations.map((t, i) => (
            <ScrollReveal as="div" animation="slide-up" delay={i * 80} key={t.from}>
              <MotionCard
                as="div"
                className="flex h-full items-center gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-5"
              >
                <span className="text-muted">{t.from}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <span className="font-medium">{t.to}</span>
              </MotionCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
