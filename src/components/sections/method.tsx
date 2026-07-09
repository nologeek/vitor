import { Section } from "@/components/sections/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { StepCard } from "@/components/cards/step-card";
import { method } from "@/content/home";

export function Method() {
  return (
    <Section id="metodo" divider>
      <SectionHeading eyebrow={method.eyebrow} title={method.title}>
        {method.intro}
      </SectionHeading>
      <ol className="mt-12 max-w-2xl">
        {method.steps.map((step, i) => (
          <StepCard
            key={step.title}
            index={i + 1}
            title={step.title}
            description={step.description}
            isLast={i === method.steps.length - 1}
          />
        ))}
      </ol>
    </Section>
  );
}
