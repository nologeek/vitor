import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-muted">
        La ruta que buscas no existe o aún está en construcción.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-full bg-accent-solid px-6 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
      >
        Volver al inicio
      </Link>
    </Container>
  );
}
