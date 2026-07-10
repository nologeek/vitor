import { Container } from "@/components/ui/container";
import { MethodPathway } from "@/components/sections/method-pathway";
import { method } from "@/content/home";

export function Method() {
  return (
    <section id="metodo" className="py-24 sm:py-36">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {method.label}
          </p>
          <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.14] tracking-tight sm:text-5xl">
            {method.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {method.intro}
          </p>
        </div>
        <div className="mt-16">
          <MethodPathway steps={method.steps} />
        </div>
      </Container>
    </section>
  );
}
