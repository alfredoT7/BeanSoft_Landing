<script setup lang="ts">
type Project = {
  name: string;
  desc: string;
  stack: string[];
  status: 'En producción' | 'En desarrollo' | 'Lanzado';
  accent: string;
};

const projects: Project[] = [
  {
    name: 'Sistema de gestión odontológica',
    desc: 'Plataforma para clínicas: agenda, historia clínica, facturación e indicadores en tiempo real.',
    stack: ['Vue', 'Node', 'PostgreSQL', 'Tailwind'],
    status: 'En producción',
    accent: 'from-cyan-400/30 to-blue-500/20',
  },
  {
    name: 'Plataforma inmobiliaria',
    desc: 'Marketplace con búsqueda avanzada, mapas interactivos y panel para agentes.',
    stack: ['Astro', 'Vue', 'TypeScript', 'Vercel'],
    status: 'Lanzado',
    accent: 'from-blue-500/30 to-indigo-500/20',
  },
  {
    name: 'Dashboard administrativo',
    desc: 'Tablero corporativo con KPIs, control de usuarios y reportes exportables.',
    stack: ['Vue', 'Node', 'PostgreSQL', 'Docker'],
    status: 'En desarrollo',
    accent: 'from-indigo-500/30 to-cyan-400/20',
  },
  {
    name: 'App de reservas',
    desc: 'Flujo de reserva, pagos y notificaciones para servicios y experiencias.',
    stack: ['Astro', 'Vue', 'GitHub Actions'],
    status: 'En producción',
    accent: 'from-sky-400/30 to-blue-600/20',
  },
];

const statusColor = (s: Project['status']) =>
  s === 'En producción'
    ? 'text-emerald-300 border-emerald-400/30 bg-emerald-400/10'
    : s === 'Lanzado'
    ? 'text-cyan-300 border-cyan-400/30 bg-cyan-400/10'
    : 'text-amber-300 border-amber-400/30 bg-amber-400/10';
</script>

<template>
  <section id="proyectos" class="relative py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div class="max-w-2xl">
          <p class="bs-reveal text-xs uppercase tracking-[0.35em] text-cyan-300/80">Proyectos destacados</p>
          <h2 class="bs-reveal mt-3 text-4xl sm:text-5xl font-bold text-white" data-delay="1" style="font-family:'Space Grotesk',Inter,sans-serif;">
            Trabajo <span class="bs-gradient-text">real</span>, resultados medibles
          </h2>
        </div>
        <p class="bs-reveal max-w-md text-slate-300/90" data-delay="2">
          Una selección de productos que diseñamos y construimos de principio a fin.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <article
          v-for="(p, i) in projects"
          :key="p.name"
          class="bs-reveal bs-glass bs-card-hover relative overflow-hidden rounded-3xl p-7 group"
          :data-delay="(i % 4) + 1"
        >
          <div :class="['absolute -top-32 -right-24 h-64 w-64 rounded-full blur-3xl opacity-50 bg-gradient-to-br', p.accent]"></div>

          <div class="relative flex items-start justify-between gap-4">
            <h3 class="text-xl font-semibold text-white">{{ p.name }}</h3>
            <span :class="['shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider', statusColor(p.status)]">
              {{ p.status }}
            </span>
          </div>

          <p class="relative mt-3 text-sm text-slate-300/90 leading-relaxed">{{ p.desc }}</p>

          <ul class="relative mt-5 flex flex-wrap gap-2">
            <li
              v-for="t in p.stack"
              :key="t"
              class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300"
            >{{ t }}</li>
          </ul>

          <div class="relative mt-6 flex items-center justify-between">
            <button type="button" class="text-sm font-semibold text-cyan-300 inline-flex items-center gap-1 hover:text-cyan-200">
              Ver detalle
              <svg viewBox="0 0 24 24" class="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-5-5 5 5-5 5"/>
              </svg>
            </button>
            <div class="text-[10px] uppercase tracking-[0.3em] text-slate-500">Caso #{{ String(i + 1).padStart(2, '0') }}</div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
