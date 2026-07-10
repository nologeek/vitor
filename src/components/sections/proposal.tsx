import { Container } from "@/components/ui/container";
import { CinematicSection } from "@/components/motion/cinematic-section";
import {
  EcosystemFlowDiagram,
  type FlowItem,
} from "@/components/sections/ecosystem-flow-diagram";
import { proposal } from "@/content/home";
import type { GeometricVariant } from "@/components/motion/geometric-symbol";

// Símbolo por transformación (orden del contenido aprobado).
const flowVariants: ReadonlyArray<GeometricVariant> = [
  "node",
  "loop",
  "diamond",
  "orbit",
];

export function Proposal() {
  const items: FlowItem[] = proposal.transformations.map((t, i) => ({
    from: t.from,
    to: t.to,
    variant: flowVariants[i % flowVariants.length],
  }));

  return (
    <section id="propuesta" className="border-t border-border">
      <Container>
        <CinematicSection eyebrow={proposal.eyebrow} title={proposal.title}>
          {proposal.intro}
        </CinematicSection>

        <div className="pb-20 sm:pb-28">
          <EcosystemFlowDiagram items={items} />
        </div>
      </Container>
    </section>
  );
}
