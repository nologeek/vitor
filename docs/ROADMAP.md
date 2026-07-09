# Roadmap por fases

Trazabilidad del proyecto. Cada fase avanza con rama propia (`feat/…`) y commits
semánticos.

| Fase | Objetivo                                                        | Estado        |
| ---- | --------------------------------------------------------------- | ------------- |
| 0    | Auditoría del repo `vitor` y planificación                      | ✅ Completada |
| 1    | Base técnica: Next.js, TS, Tailwind, estructura, SEO, rutas     | 🟩 En curso   |
| 2    | Home con el contenido final entregado por Manuel                | ⬜ Pendiente  |
| 3    | `/design-system` como laboratorio visual completo               | 🟩 v1 lista   |
| 4    | Portafolio, proyectos, logos y estructura de casos              | ⬜ Pendiente  |
| 5    | Blog/contenidos y estrategia SEO/AEO                            | ⬜ Pendiente  |
| 6    | Performance, accesibilidad, Core Web Vitals, optimización       | ⬜ Pendiente  |
| 7    | Conexión con dominio `nolo.com.co`                              | ⬜ Pendiente  |

## Fase 1 — Base técnica (en curso)

- [x] Scaffold Next.js 16 + TypeScript + Tailwind v4
- [x] Estructura de carpetas escalable
- [x] Sistema de tokens dual (claro/oscuro) + toggle
- [x] Layout raíz (header, footer, skip-link, JSON-LD)
- [x] Home: Hero (frase aprobada) + Círculo Dorado (WHY/HOW/WHAT)
- [x] Ruta `/design-system` inicial
- [x] Rutas base navegables e indexables (stubs con placeholder controlado):
      `/sobre-mi`, `/portafolio`, `/servicios`, `/metodo`, `/blog`, `/contacto`
- [x] Navegación derivada de fuente única (`routes` en `site-config.ts`):
      header curado + footer completo; sitemap sincronizado
- [x] SEO base: metadata, sitemap, robots, JSON-LD
- [x] Export estático + workflow de GitHub Pages
- [ ] Primer deploy verde en Pages
- [ ] Imagen Open Graph

## Fase 7 — Migración a dominio (referencia futura)

Al conectar `nolo.com.co`:

1. En el workflow, poner `NEXT_PUBLIC_BASE_PATH=""` y
   `NEXT_PUBLIC_SITE_URL=https://nolo.com.co`.
2. Configurar el dominio en GitHub Pages (o migrar a Vercel).
3. Revisar canonical, sitemap y JSON-LD (se actualizan solos vía `site-config`).
