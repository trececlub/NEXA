# NEXA 2.0 (Next.js)

Sitio oficial de NEXA migrado a Next.js (App Router), con rutas bilingües:

- ES: `/`, `/servicios`, `/contacto`
- EN: `/en`, `/en/services`, `/en/contact`

## Stack

- Next.js 15
- React 19
- TypeScript
- CSS global custom (estilo premium)

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Validación

```bash
npm run lint
npm run build
```

## Deploy recomendado (Vercel)

1. Conecta este repo de GitHub a Vercel.
2. Framework: `Next.js` (detección automática).
3. Build command: `npm run build`.
4. Output: automático de Next.js.
5. Configura dominio `nexacreativestudio.com` dentro de Vercel Domains.

## Estructura

- `app/`: rutas y páginas
- `components/`: header, footer, sección de contacto
- `public/img/`: imágenes públicas
- `app/sitemap.ts` y `app/robots.ts`: SEO técnico básico
