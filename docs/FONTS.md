# Tipografía

## Estado actual

**Geist Sans / Geist Mono** (Google/Vercel, vía `next/font/google`), activas en
[`src/app/layout.tsx`](../src/app/layout.tsx). Es la tipografía en producción
hoy.

## Satoshi (deseada, pendiente)

Se quiere probar **Satoshi** como tipografía principal. El archivo **no está
disponible localmente** y no se descarga sin aprobación explícita (uso
comercial de Satoshi requiere licencia de [Fontshare](https://www.fontshare.com/fonts/satoshi)
verificada por el equipo).

El sistema ya está preparado para recibirla sin fricción:

- `globals.css` resuelve `--font-sans` como
  `var(--font-satoshi, var(--font-geist-sans))` — si `--font-satoshi` no existe,
  cae a Geist automáticamente. **Cero cambios de CSS al activarla.**
- `src/app/fonts/` es la carpeta reservada para los archivos de fuente.

### Cómo activarla (cuando se aprueben los archivos)

1. Colocar los `.woff2` (idealmente variable, normal + italic) en
   `src/app/fonts/`.
2. En `src/app/layout.tsx`, descomentar/añadir:

   ```ts
   import localFont from "next/font/local";

   const satoshi = localFont({
     src: [
       { path: "./fonts/Satoshi-Variable.woff2", style: "normal" },
       { path: "./fonts/Satoshi-VariableItalic.woff2", style: "italic" },
     ],
     variable: "--font-satoshi",
     display: "swap",
   });
   ```

3. Añadir `satoshi.variable` a la `className` del `<html>` (junto a
   `geistSans.variable`).
4. Verificar `npm run build` (export estático) y peso de los `.woff2`
   servidos (objetivo: no degradar el LCP del hero).

No se requiere tocar `site-config.ts`, componentes ni el design system: el
cambio de tipografía se propaga solo por el token `--font-sans`.
