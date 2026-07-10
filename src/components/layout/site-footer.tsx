import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerNav, siteConfig } from "@/lib/site-config";

/** Icono SVG minimalista para redes. */
type SocialKey = "linkedin" | "github" | "instagram" | "tiktok";

const SOCIAL_ITEMS: ReadonlyArray<{ key: SocialKey; label: string }> = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "github", label: "GitHub" },
  { key: "instagram", label: "Instagram" },
  { key: "tiktok", label: "TikTok" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border/60">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16">
          {/* Wordmark + firma */}
          <div>
            <p className="font-mono text-lg font-semibold tracking-tight">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              Hecho con{" "}
              <HeartIcon
                className="text-accent"
                aria-label="amor"
              />{" "}
              en 2026
            </p>
            <p className="mt-1 text-xs text-muted">
              © {year} {siteConfig.author.name}. Todos los derechos reservados.
            </p>
          </div>

          {/* Navegación */}
          <nav aria-label="Pie de página">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Navegación
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-sm text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Redes
            </p>
            <ul className="mt-4 space-y-2.5">
              {SOCIAL_ITEMS.map(({ key, label }) => {
                const url = siteConfig.social[key];
                if (url) {
                  return (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted transition-colors hover:text-fg"
                      >
                        {label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li
                    key={key}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span>{label}</span>
                    <span className="rounded-full border border-border/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted/80">
                      Próximamente
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/**
 * Corazón. El acento (--accent) ya es azul en light y azul más luminoso en
 * dark, así que el color "cambia según el tema" sin lógica adicional.
 */
function HeartIcon({
  className = "",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 21s-6.716-4.35-9.193-8.36C.62 9.38 2.09 5.9 5.24 5.06c1.986-.53 3.878.226 5.076 1.61l1.684 1.94 1.684-1.94c1.198-1.384 3.09-2.14 5.076-1.61 3.15.84 4.62 4.32 2.433 7.58C18.716 16.65 12 21 12 21z" />
    </svg>
  );
}
