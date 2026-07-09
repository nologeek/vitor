import type { Metadata } from "next";
import { siteConfig, baseUrl } from "@/lib/site-config";

/**
 * Helper para construir metadatos por página de forma consistente
 * (títulos, canonical, Open Graph, Twitter). SEO + AEO/GEO base.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const url = `${baseUrl}${path}`;
  const fullTitle = title
    ? `${title} · ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.role}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/**
 * JSON-LD (schema.org) para búsqueda tradicional y asistentes de IA (AEO/GEO).
 * Person + WebSite. Se inyecta en el layout raíz.
 */
export function buildJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: baseUrl,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    knowsAbout: siteConfig.tags,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    inLanguage: siteConfig.locale,
    description: siteConfig.description,
  };

  return [person, website];
}
