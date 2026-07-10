import type { Metadata } from "next";
import { Hero2 } from "@/components/home2/hero2";
import { Thesis2 } from "@/components/home2/thesis2";
import { Transforms2 } from "@/components/home2/transforms2";
import { Capabilities2 } from "@/components/home2/capabilities2";
import { Work2 } from "@/components/home2/work2";
import { Method2 } from "@/components/home2/method2";
import { Cta2 } from "@/components/home2/cta2";
import { buildMetadata } from "@/lib/seo";

/**
 * HOME-2 — propuesta alternativa de presentación (comparativa).
 * noindex: no debe competir con el home real ni figurar en sitemap/nav.
 * Lenguaje: editorial puro (tipografía protagonista, hairlines, blur reveal,
 * marquee), sin fondo animado global — contraste deliberado con el home v1.
 */
export const metadata: Metadata = {
  ...buildMetadata({
    title: "Home 2 (propuesta alternativa)",
    description:
      "Versión alternativa del home de Manuel Ayala: experiencia editorial e inmersiva para comparación interna.",
    path: "/home-2",
  }),
  robots: { index: false, follow: false },
};

export default function Home2Page() {
  return (
    <>
      <Hero2 />
      <Thesis2 />
      <Transforms2 />
      <Capabilities2 />
      <Work2 />
      <Method2 />
      <Cta2 />
    </>
  );
}
