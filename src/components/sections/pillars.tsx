import { Container } from "@/components/ui/container";
import { SevenPillarsMap } from "@/components/sections/seven-pillars-map";
import { pillars } from "@/content/home";

export function Pillars() {
  return (
    <section id="pilares" className="relative py-24 sm:py-36">
      <div
        aria-hidden="true"
        className="section-depth pointer-events-none absolute inset-0 -z-10"
      />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {pillars.label}
          </p>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.14] tracking-tight sm:text-5xl">
            {pillars.title}
          </h2>
        </div>
        <div className="mt-16">
          <SevenPillarsMap items={pillars.items} />
        </div>
      </Container>
    </section>
  );
}
