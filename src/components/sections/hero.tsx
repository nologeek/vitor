import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Tag } from "@/components/ui/tag";
import { hero } from "@/content/home";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid"
        aria-hidden="true"
      />
      <Container className="py-24 sm:py-32">
        <p className="mb-4 font-mono text-sm text-accent">{hero.greeting}</p>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          <span className="text-gradient">{hero.headline}</span>
        </h1>

        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Disciplinas">
          {hero.tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={hero.primaryCta.href}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="inline-flex h-12 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            {hero.secondaryCta.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
