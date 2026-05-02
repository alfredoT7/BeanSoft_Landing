<script setup lang="ts">
const steps = [
  { n: '01', title: 'Análisis', desc: 'Entendemos el problema, los usuarios y el contexto de negocio.' },
  { n: '02', title: 'Diseño', desc: 'Wireframes, UI y arquitectura técnica antes de escribir código.' },
  { n: '03', title: 'Desarrollo', desc: 'Construimos en sprints cortos con entregas verificables.' },
  { n: '04', title: 'Pruebas', desc: 'QA manual y automatizada para asegurar calidad.' },
  { n: '05', title: 'Despliegue', desc: 'CI/CD para llevar a producción sin fricción.' },
  { n: '06', title: 'Soporte', desc: 'Mantenimiento, mejoras y monitoreo continuo.' },
];
</script>

<template>
  <section class="relative py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="max-w-2xl">
        <p class="bs-reveal text-xs uppercase tracking-[0.35em] text-cyan-300/80">Proceso de trabajo</p>
        <h2 class="bs-reveal mt-3 text-4xl sm:text-5xl font-bold text-white" data-delay="1" style="font-family:'Space Grotesk',Inter,sans-serif;">
          Cómo <span class="bs-gradient-text">trabajamos</span>
        </h2>
        <p class="bs-reveal mt-4 text-slate-300/90" data-delay="2">
          Una metodología clara, iterativa y orientada a resultados.
        </p>
      </div>

      <ol class="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(s, i) in steps"
          :key="s.n"
          class="bs-reveal bs-glass bs-card-hover relative rounded-3xl p-6 overflow-hidden"
          :data-delay="(i % 6) + 1"
        >
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

          <div class="flex items-start justify-between">
            <span class="text-5xl font-black bs-gradient-text leading-none" style="font-family:'Space Grotesk',Inter,sans-serif;">{{ s.n }}</span>
            <span class="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/30 text-cyan-300">
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-5-5 5 5-5 5"/></svg>
            </span>
          </div>

          <h3 class="mt-5 text-lg font-semibold text-white">{{ s.title }}</h3>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">{{ s.desc }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
