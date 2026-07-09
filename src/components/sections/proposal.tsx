import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { proposal } from "@/content/home";

export function Proposal() {
  return (
    <Section id="propuesta" divider>
      <SectionHeading eyebrow={proposal.eyebrow} title={proposal.title}>
        {proposal.intro}
      </SectionHeading>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {proposal.transformations.map((t) => (
          <li
            key={t.from}
            className="flex items-center gap-3 rounded-[var(--radius-card)] border border-border bg-surface p-5 transition-colors hover:border-accent"
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
          </li>
        ))}
      </ul>
    </Section>
  );
}
