import { EditorialSection } from "@/components/sections/editorial-section";
import { opportunity } from "@/content/home";

export function Opportunity() {
  return (
    <EditorialSection
      id="oportunidad"
      label={opportunity.label}
      items={opportunity.points}
      title={opportunity.title}
    />
  );
}
