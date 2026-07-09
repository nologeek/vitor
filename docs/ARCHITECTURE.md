# Arquitectura y decisiones técnicas

Registro de decisiones (ADR ligero). Cada entrada explica el **qué** y el
**porqué** para dar trazabilidad al proyecto.

## 1. Next.js 16 (App Router) con export estático

- **Decisión:** App Router + `output: "export"`.
- **Porqué:** el sitio es de contenido (portafolio/blog) sin necesidad de
  servidor. El export estático permite hospedar en GitHub Pages hoy y migrar a
  Vercel o dominio propio sin reescribir. Máximo rendimiento y coste cero.
- **Implicación:** no se usan features que requieran servidor en runtime
  (route handlers dinámicos, ISR, `next/image` optimizado). Se compensa con
  `images.unoptimized` y generación estática de `sitemap`/`robots`.

## 2. `basePath` condicional

- **Decisión:** `basePath`/`assetPrefix` se activan solo si
  `NEXT_PUBLIC_BASE_PATH` no está vacío.
- **Porqué:** GitHub Pages sirve el proyecto bajo `/vitor`. En local y en un
  dominio raíz (nolo.com.co) el subpath debe ser vacío. Una sola variable de
  entorno controla los tres escenarios.

## 3. Tailwind v4 con tokens semánticos

- **Decisión:** colores como variables CSS semánticas (`--bg`, `--fg`,
  `--accent`…) mapeadas a utilidades con `@theme inline`.
- **Porqué:** habilita theming dual (claro/oscuro) en runtime sin duplicar
  clases `dark:`. Cambiar la paleta es tocar un solo bloque CSS.

## 4. Theming por `data-theme` + script anti-FOUC

- **Decisión:** atributo `data-theme` en `<html>`, fijado por un script inline
  antes del primer paint, con persistencia en `localStorage` y fallback a
  `prefers-color-scheme`.
- **Porqué:** evita el parpadeo de tema en carga y respeta la preferencia del
  usuario y del sistema.

## 5. Fuente única de configuración

- **Decisión:** `src/lib/site-config.ts` centraliza identidad, navegación y
  URLs; `src/lib/seo.ts` deriva metadatos y JSON-LD.
- **Porqué:** evita duplicación y facilita el cambio de dominio y la evolución
  de la navegación por fases.

## 6. SEO / AEO / GEO base

- **Decisión:** `metadata` API con canonical + Open Graph + Twitter, `sitemap.ts`,
  `robots.ts` y JSON-LD (`Person` + `WebSite`) en el layout.
- **Porqué:** visibilidad en buscadores tradicionales y en asistentes de IA
  (Answer/Generative Engine Optimization). Datos estructurados desde el día uno.

## Pendientes conocidos

- Imagen Open Graph (`opengraph-image`) real — hoy sin imagen.
- Handles sociales reales en `site-config.ts`.
- Copy final del Círculo Dorado (`content/home.ts`).
