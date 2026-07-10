import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CharacterReveal } from "@/components/motion/character-reveal";
import { beyondMarketing } from "@/content/home";

export function BeyondMarketing() {
  return (
    <section
      id="mas-alla-del-marketing"
      className="relative py-28 sm:py-40"
    >
      <div
        aria-hidden="true"
        className="section-depth pointer-events-none absolute inset-0 -z-10"
      />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {beyondMarketing.label}
          </p>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.14] tracking-tight sm:text-5xl">
            {beyondMarketing.title}
          </h2>

          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
            {beyondMarketing.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* Frase de énfasis: reveal por caracteres (elegante, sin glitch). */}
          <ScrollReveal className="mx-auto mt-12 block max-w-3xl">
            <CharacterReveal
              as="p"
              text={beyondMarketing.emphasis}
              className="text-balance text-xl font-medium leading-[1.5] sm:text-2xl"
            />
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
