import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { beyondMarketing } from "@/content/home";

export function BeyondMarketing() {
  return (
    <Section id="mas-alla-del-marketing" divider>
      <SectionHeading
        eyebrow={beyondMarketing.eyebrow}
        title={beyondMarketing.title}
      />
      <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
        {beyondMarketing.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mt-8 max-w-3xl border-l-2 border-accent pl-5 text-xl font-medium leading-relaxed text-balance">
        {beyondMarketing.emphasis}
      </p>
    </Section>
  );
}
