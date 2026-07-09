import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StickyStorySection } from "@/components/motion/sticky-story-section";
import { method } from "@/content/home";

export function Method() {
  return (
    <Section id="metodo" divider>
      <SectionHeading eyebrow={method.eyebrow} title={method.title}>
        {method.intro}
      </SectionHeading>
      <div className="mt-14">
        <StickyStorySection
          label="Método"
          steps={method.steps.map((s) => ({
            title: s.title,
            body: s.description,
          }))}
        />
      </div>
    </Section>
  );
}
