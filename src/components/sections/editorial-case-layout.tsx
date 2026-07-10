import type { ReactNode } from "react";

/**
 * Encabezado editorial tipo case study: columna de metadatos (Year /
 * Deliverables / Sector) + titular grande, con divisoria fina y mucho aire.
 * Estética blanco/negro premium. Pensado para /portafolio (fases futuras);
 * hoy solo se documenta en /design-system. `as` fija el nivel del titular.
 */
export function EditorialCaseLayout({
  year,
  deliverables,
  sector,
  title,
  as: TitleTag = "h3",
}: {
  year: string;
  deliverables: ReadonlyArray<string>;
  sector: string;
  title: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className="border-t border-border pt-10">
      <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-16">
        <dl className="grid grid-cols-3 gap-6 lg:grid-cols-1 lg:gap-8">
          <Meta label="Year" value={year} />
          <Meta label="Deliverables" value={deliverables.join(", ")} />
          <Meta label="Sector" value={sector} />
        </dl>
        <TitleTag className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </TitleTag>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed">{value}</dd>
    </div>
  );
}
