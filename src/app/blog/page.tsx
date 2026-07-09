import { PagePlaceholder } from "@/components/sections/page-placeholder";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/site-config";

const route = getRoute("/blog");

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function BlogPage() {
  return (
    <PagePlaceholder
      eyebrow="Contenidos"
      title="Blog"
      description={route.description}
    />
  );
}
