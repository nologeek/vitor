import { PagePlaceholder } from "@/components/sections/page-placeholder";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/site-config";

const route = getRoute("/sobre-mi");

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function SobreMiPage() {
  return (
    <PagePlaceholder
      eyebrow="WHY · Propósito"
      title="Sobre mí"
      description={route.description}
    />
  );
}
