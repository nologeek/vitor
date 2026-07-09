import { PagePlaceholder } from "@/components/sections/page-placeholder";
import { buildMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/site-config";

const route = getRoute("/contacto");

export const metadata = buildMetadata({
  title: route.title,
  description: route.description,
  path: route.path,
});

export default function ContactoPage() {
  return (
    <PagePlaceholder
      eyebrow="Contacto"
      title="Hablemos"
      description={route.description}
    />
  );
}
