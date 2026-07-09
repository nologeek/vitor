import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerNav, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-sm font-semibold">
            {siteConfig.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 max-w-xs text-sm text-muted">{siteConfig.role}</p>
        </div>

        <nav
          aria-label="Pie de página"
          className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-5"
        >
          {footerNav.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <Container className="border-t border-border py-6">
        <p className="text-xs text-muted">
          © {year} {siteConfig.name}. Sitio en construcción · Fase 1.
        </p>
      </Container>
    </footer>
  );
}
