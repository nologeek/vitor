# Manuel Ayala — Sitio personal & portafolio (`vitor`)

Ecosistema digital de marca personal de **Manuel Ayala**: portafolio, centro de
contenidos, blog, servicios y sistema de marca. Estratega híbrido en
**branding, growth marketing, software, IA, educación e investigación**.

- **Repositorio de trabajo:** `nologeek/vitor`
- **Preview (GitHub Pages):** `https://nologeek.github.io/vitor` _(tras el primer deploy)_
- **Dominio final previsto:** `nolo.com.co` _(no conectado aún)_

---

## Stack

| Área        | Tecnología                                  |
| ----------- | ------------------------------------------- |
| Framework   | Next.js 16 (App Router) + export estático   |
| Lenguaje    | TypeScript (strict)                         |
| Estilos     | Tailwind CSS v4 (CSS-first, tokens dual)    |
| Tipografía  | Geist Sans / Geist Mono (`next/font`)       |
| Calidad     | ESLint 9 (`eslint-config-next`)             |
| Deploy      | GitHub Pages vía GitHub Actions             |

## Requisitos

- Node.js `>= 22`
- npm `>= 10`

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Comando         | Descripción                                        |
| --------------- | -------------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo                             |
| `npm run build` | Build + export estático a `out/`                   |
| `npm run start` | Sirve el build (no aplica en export puro)          |
| `npm run lint`  | Linting con ESLint                                 |

## Estructura

```
src/
├── app/                 # Rutas (App Router) + sitemap/robots/404
│   ├── design-system/   # Laboratorio visual vivo (/design-system)
│   ├── layout.tsx       # Layout raíz, tema, SEO, JSON-LD
│   └── page.tsx         # Home (Hero + Círculo Dorado)
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Golden Circle (WHY/HOW/WHAT)
│   └── ui/              # Container, Tag, ThemeToggle, SectionHeading
├── content/             # Contenido estructurado (home.ts) — placeholders controlados
├── lib/                 # site-config.ts (fuente única) · seo.ts (metadata + JSON-LD)
└── app/globals.css      # Tokens de diseño (dual light/dark)
```

## Sistema de diseño

Los colores son **tokens semánticos** (`--bg`, `--fg`, `--accent`, …) definidos
en `src/app/globals.css` y expuestos como utilidades de Tailwind (`bg-bg`,
`text-fg`, `border-border`, `bg-accent`). El tema (claro/oscuro) se controla con
el atributo `data-theme` y se persiste en `localStorage`. Documentación viva en
[`/design-system`](src/app/design-system/page.tsx).

## Contenido

El copy final lo entrega Manuel. Los textos aún no aprobados están marcados con
`[PENDIENTE: …]` en `src/content/home.ts`. La frase del hero y las etiquetas
principales **sí** están aprobadas.

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`, que hace `next build`
(export estático a `out/`) y publica en GitHub Pages con `NEXT_PUBLIC_BASE_PATH=/vitor`.
Al migrar a dominio propio, ver [`docs/ROADMAP.md`](docs/ROADMAP.md) (Fase 7).

## Documentación

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — decisiones técnicas.
- [`docs/ROADMAP.md`](docs/ROADMAP.md) — fases del proyecto.
- [`docs/DESIGN-PRINCIPLES.md`](docs/DESIGN-PRINCIPLES.md) — principios visuales.
- [`docs/MOTION.md`](docs/MOTION.md) — sistema de motion y scroll storytelling.
- [`docs/FONTS.md`](docs/FONTS.md) — tipografía (Geist activa, Satoshi preparada).
- [`docs/VISUAL-SYSTEM.md`](docs/VISUAL-SYSTEM.md) — fondo global, geometría y hero editorial.
