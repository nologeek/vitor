import { PagePlaceholder } from "@/components/sections/page-placeholder";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/site-config";

const route = getRoute("/portafolio");

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function PortafolioPage() {
  return (
    <PagePlaceholder
      eyebrow="WHAT · Resultado"
      title="Portafolio"
      description={route.description}
    />
  );
}
