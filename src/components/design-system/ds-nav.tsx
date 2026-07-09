import { dsSections } from "@/content/design-system";

/** Navegación interna del laboratorio (sticky, bajo el header global). */
export function DSNav() {
  return (
    <nav
      aria-label="Secciones del sistema de diseño"
      className="sticky top-16 z-40 -mx-6 mb-4 border-b border-border bg-bg/80 px-6 backdrop-blur-md sm:-mx-8 sm:px-8"
    >
      <ul className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {dsSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
