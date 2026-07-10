import { PagePlaceholder } from "@/components/sections/page-placeholder";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/site-config";

const route = getRoute("/cookies");

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function CookiesPage() {
  return (
    <PagePlaceholder
      eyebrow="Legal"
      title="Políticas de cookies"
      description={route.description}
    />
  );
}
