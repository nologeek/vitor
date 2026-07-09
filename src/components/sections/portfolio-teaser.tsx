import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/content/home";

export function PortfolioTeaser() {
  return (
    <Section id="portafolio" divider>
      <SectionHeading eyebrow={portfolio.eyebrow} title={portfolio.title} />

      <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
        {portfolio.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <ul className="mt-8 flex flex-wrap gap-2" aria-label="Categorías">
        {portfolio.categories.map((category) => (
          <li key={category}>
            <Tag>{category}</Tag>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Button href={portfolio.cta.href} variant="secondary">
          {portfolio.cta.label}
        </Button>
      </div>
    </Section>
  );
}
