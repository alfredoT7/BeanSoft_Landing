<script setup lang="ts">
const techs = [
  'Astro', 'Vue', 'TypeScript', 'Node.js', 'PostgreSQL',
  'Tailwind CSS', 'Docker', 'GitHub Actions', 'Vercel',
];
</script>

<template>
  <section id="tecnologias" class="relative py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="max-w-2xl">
        <p class="bs-reveal text-xs uppercase tracking-[0.35em] text-orange-300/90">Tecnologías</p>
        <h2 class="bs-reveal mt-3 text-4xl sm:text-5xl font-bold text-white" data-delay="1" style="font-family:'Space Grotesk',Inter,sans-serif;">
          Stack <span class="bs-gradient-text">moderno</span>, decisiones probadas
        </h2>
        <p class="bs-reveal mt-4 text-slate-300/90" data-delay="2">
          Trabajamos con herramientas estables, performantes y con ecosistema sólido.
        </p>
      </div>

      <div class="bs-reveal mt-12 flex flex-wrap gap-3" data-delay="2">
        <span
          v-for="(t, i) in techs"
          :key="t"
          class="bs-glass rounded-full px-5 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:border-orange-300/40 transition"
          :style="{ animationDelay: `${i * 0.1}s` }"
        >
          <span class="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#C74F0B] align-middle shadow-[0_0_8px_rgba(200,80,16,0.9)]"></span>
          {{ t }}
        </span>
      </div>

      <div class="mt-14 grid gap-4 sm:grid-cols-3">
        <div class="bs-reveal bs-glass rounded-3xl p-6">
          <div class="text-3xl font-bold bs-gradient-text">Frontend</div>
          <p class="mt-2 text-sm text-slate-400">Astro, Vue 3 y Tailwind 4 para sitios rápidos y mantenibles.</p>
        </div>
        <div class="bs-reveal bs-glass rounded-3xl p-6" data-delay="1">
          <div class="text-3xl font-bold bs-gradient-text">Backend</div>
          <p class="mt-2 text-sm text-slate-400">Node.js + PostgreSQL para APIs robustas y datos confiables.</p>
        </div>
        <div class="bs-reveal bs-glass rounded-3xl p-6" data-delay="2">
          <div class="text-3xl font-bold bs-gradient-text">DevOps</div>
          <p class="mt-2 text-sm text-slate-400">Docker, GitHub Actions y Vercel para despliegues continuos.</p>
        </div>
      </div>
    </div>
  </section>
</template>
