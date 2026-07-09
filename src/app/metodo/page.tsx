import { PagePlaceholder } from "@/components/sections/page-placeholder";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/site-config";

const route = getRoute("/metodo");

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function MetodoPage() {
  return (
    <PagePlaceholder
      eyebrow="HOW · Método"
      title="El método"
      description={route.description}
    />
  );
}
