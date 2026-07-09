import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { opportunity } from "@/content/home";

export function Opportunity() {
  return (
    <Section id="oportunidad" divider>
      <SectionHeading eyebrow={opportunity.eyebrow} title={opportunity.title} />
      <ul className="mt-10 max-w-3xl">
        {opportunity.lines.map((line) => (
          <li
            key={line}
            className="border-l-2 border-border py-2.5 pl-5 text-lg leading-relaxed text-muted transition-colors hover:border-accent hover:text-fg"
          >
            {line}
          </li>
        ))}
      </ul>
    </Section>
  );
}
