import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { nav, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
          aria-label={`${siteConfig.name} — inicio`}
        >
          {siteConfig.name}
          <span className="text-accent">.</span>
        </Link>

        <nav aria-label="Principal" className="flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-2 hidden h-5 w-px bg-border sm:block" />
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
