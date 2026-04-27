# BeanSoft

Proyecto base con `Astro + Vue + Tailwind CSS`.

Astro maneja rutas y layout general. Vue entra como islands interactivas dentro páginas Astro. Tailwind estiliza todo desde hoja global.

## Stack

- `astro`: shell, rutas, páginas estáticas
- `vue`: componentes interactivos
- `tailwindcss`: utilidades CSS
- `@tailwindcss/vite`: integración Tailwind v4 con Vite
- `@astrojs/vue`: soporte Vue dentro Astro

## Package Manager

Proyecto usa `pnpm`.

## Comandos

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Estructura

```text
src/
├── assets/
├── components/
│   ├── layout/
│   │   └── SiteHeader.astro
│   ├── navigation/
│   │   └── MainNav.astro
│   ├── ui/
│   └── vue/
│       ├── BeanBoard.vue
│       └── StatusPanel.vue
├── composables/
├── layouts/
│   └── BaseLayout.astro
├── lib/
├── pages/
│   ├── index.astro
│   ├── layout.astro
│   └── vue-demo.astro
├── styles/
│   └── global.css
├── types/
└── env.d.ts
```

## Cómo funciona

### `src/pages`

Aquí viven rutas del sitio.

- `index.astro` responde `/`
- `layout.astro` responde `/layout`
- `vue-demo.astro` responde `/vue-demo`

Cada archivo `.astro` crea ruta automáticamente.

### `src/layouts`

Layouts compartidos.

- `BaseLayout.astro` define:
  - estructura HTML base
  - import global de Tailwind
  - fondo general
  - header compartido
  - contenedor principal con `<slot />`

Idea: páginas ponen contenido. Layout pone shell común.

### `src/components/layout`

Componentes visuales de estructura.

- `SiteHeader.astro`: header sticky del proyecto

Aquí van piezas grandes de UI repetidas entre páginas.

### `src/components/navigation`

Navegación compartida.

- `MainNav.astro`: links principales con estado activo según ruta actual

Si luego creces menú, dropdowns, breadcrumbs o sidebar, buen lugar.

### `src/components/vue`

Componentes Vue interactivos.

- `StatusPanel.vue`: island simple con contador y estado reactivo
- `BeanBoard.vue`: demo con filtros y cambio de estado

Regla práctica:
- usa `.astro` para shell, composición, SEO, contenido estático
- usa `.vue` para interacción, estado local, formularios, widgets

### `src/components/ui`

Piezas pequeñas reusables.

Ejemplos futuros:
- `Button.astro`
- `Card.astro`
- `Badge.vue`
- `Modal.vue`

### `src/composables`

Lógica reutilizable Vue.

Ejemplos futuros:
- `useCounter.ts`
- `useTheme.ts`
- `useFilters.ts`

Si lógica depende de `ref`, `computed`, `watch`, va bien aquí.

### `src/lib`

Código utilitario sin acoplar a UI.

Ejemplos futuros:
- helpers
- formatters
- constants
- adapters

### `src/types`

Tipos TypeScript compartidos.

Ejemplos futuros:
- `project.ts`
- `navigation.ts`
- `api.ts`

### `src/assets`

Assets locales del proyecto.

Ejemplos:
- imágenes
- íconos
- fuentes

### `src/styles`

Estilos globales.

- `global.css` contiene:

```css
@import "tailwindcss";
```

Eso activa utilidades Tailwind para proyecto.

### `src/env.d.ts`

Referencia tipos de Astro para TypeScript.

## Flujo Astro + Vue

1. Usuario entra a ruta.
2. Astro renderiza página `.astro`.
3. Página usa `BaseLayout.astro`.
4. Layout mete header, nav, estilos globales y contenedor.
5. Si página importa componente Vue con `client:load`, Astro lo hidrata en navegador.
6. Vue toma control solo de esa island interactiva.

Ventaja:
- mejor performance que SPA completa
- HTML sale rápido
- solo hidratas partes que sí necesitan JS

## Tailwind

Tailwind está conectado así:

- dependencia `tailwindcss`
- plugin `@tailwindcss/vite`
- `astro.config.mjs` registra plugin
- `src/styles/global.css` importa Tailwind
- layout base importa `global.css`

Por eso todas páginas que usan `BaseLayout.astro` reciben estilos.

## Convención sugerida

- `pages/`: rutas
- `layouts/`: shells compartidos
- `components/layout/`: estructura grande
- `components/navigation/`: menús y navegación
- `components/ui/`: piezas pequeñas reusables
- `components/vue/`: islands Vue
- `composables/`: lógica reactiva
- `lib/`: utilidades puras
- `types/`: contratos TypeScript

## Próximos pasos

- agregar `tsconfig.json` con aliases como `@/components`
- crear `src/lib/constants.ts`
- mover data mock a `src/lib`
- crear `src/types` reales para cards, nav y páginas
- separar componentes UI reusables desde demos actuales
