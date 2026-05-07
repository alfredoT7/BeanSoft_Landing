<script setup lang="ts">
const year = new Date().getFullYear();

const groups = [
  {
    title: 'Navegación',
    links: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Proyecto', href: '#proyecto' },
      { label: 'Equipo', href: '#equipo' },
    ],
  },
  {
    title: 'Secciones',
    links: [
      { label: 'Tecnologías', href: '#tecnologias' },
      { label: 'Hackatón', href: '#hackaton' },
      { label: 'Demo', href: '#demo' },
    ],
  },
  {
    title: 'Demo',
    links: [
      { label: 'hola@beansoft.dev', href: '#demo' },
      { label: 'Hablemos', href: '#demo' },
    ],
  },
];

const socials = [
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'X', href: '#', icon: 'x' },
];
</script>

<template>
  <footer class="relative mt-12 border-t border-white/5">
    <div class="w-full mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <div class="grid gap-10 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <a href="#inicio" class="flex items-center gap-2 font-bold">
            <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#C74F0B] to-[#A83A08] text-white">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 4c4 0 8 3 8 8s-4 8-8 8c0-4 4-8 4-12 0-2-1-3-4-4Z" />
              </svg>
            </span>
            <span class="text-xl text-white">Bean<span class="bs-gradient-text">Soft</span></span>
          </a>
          <p class="mt-4 max-w-sm text-sm text-slate-400 leading-relaxed">
            Software studio enfocado en construir productos digitales modernos, escalables y fáciles de usar.
          </p>

          <ul class="mt-6 flex gap-3">
            <li v-for="s in socials" :key="s.label">
              <a
                :href="s.href"
                :aria-label="s.label"
                class="grid h-10 w-10 place-items-center rounded-xl bs-glass text-slate-300 hover:text-white hover:border-orange-300/40 transition"
              >
                <svg v-if="s.icon === 'github'" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M12 .5C5.7.5.5 5.7.5 12a11.5 11.5 0 0 0 7.9 11c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5Z"/></svg>
                <svg v-else-if="s.icon === 'linkedin'" viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.13V21h-4v-5.5c0-1.3 0-3-1.85-3s-2.13 1.45-2.13 2.9V21H10V9Z"/></svg>
                <svg v-else viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor"><path d="M18.244 2H21l-6.5 7.43L22 22h-6.84l-4.78-6.27L4.78 22H2l6.97-7.96L2 2h6.94l4.32 5.72L18.24 2Zm-1.2 18h1.86L7.04 4H5.07l11.97 16Z"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-7 grid gap-8 sm:grid-cols-3">
          <div v-for="g in groups" :key="g.title">
            <h4 class="text-xs font-semibold uppercase tracking-[0.25em] text-orange-300/90">{{ g.title }}</h4>
            <ul class="mt-4 space-y-2 text-sm text-slate-300">
              <li v-for="l in g.links" :key="l.label">
                <a :href="l.href" class="hover:text-white transition">{{ l.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
        <p class="text-xs text-slate-500">© {{ year }} BeanSoft. Todos los derechos reservados.</p>
        <p class="text-xs text-slate-500">Hecho con Astro · Vue · Tailwind</p>
      </div>
    </div>
  </footer>
</template>
