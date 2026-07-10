import { Container } from "@/components/ui/container";
import { ProposalOrbitDiagram } from "@/components/sections/proposal-orbit-diagram";
import { proposal } from "@/content/home";

export function Proposal() {
  return (
    <section id="propuesta" className="py-24 sm:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {proposal.label}
          </p>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.14] tracking-tight sm:text-5xl">
            {proposal.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {proposal.intro}
          </p>
        </div>

        <div className="mt-20">
          <ProposalOrbitDiagram
            coreLabel={proposal.coreLabel}
            items={proposal.transformations}
          />
        </div>
      </Container>
    </section>
  );
}
