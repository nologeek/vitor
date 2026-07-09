import type { NextConfig } from "next";

/**
 * El sitio se publica como export estático (GitHub Pages hoy; Vercel/dominio
 * propio en el futuro). `basePath` solo se activa cuando se despliega bajo un
 * subpath (p. ej. /vitor en Pages); en local y en un dominio raíz queda vacío.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // GitHub Pages no tiene servidor de optimización de imágenes.
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
