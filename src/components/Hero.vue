<script setup lang="ts">
const metrics = [
  { value: '+20', label: 'Proyectos entregados' },
  { value: '99%', label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte continuo' },
];
</script>

<template>
  <section id="inicio" class="relative min-h-screen flex items-center pt-32 pb-24">
    <div class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[140px] bs-pulse-glow"></div>
    <div class="absolute right-10 bottom-20 -z-10 h-[360px] w-[360px] rounded-full bg-cyan-400/15 blur-[120px] bs-pulse-glow"></div>

    <div class="mx-auto w-full max-w-7xl px-6">
      <div class="grid gap-14 lg:grid-cols-12 lg:gap-10 items-center">
        <div class="lg:col-span-7">
          <div class="bs-reveal inline-flex items-center gap-2 rounded-full bs-glass px-4 py-1.5 text-xs font-medium text-cyan-200">
            <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"></span>
            Software studio · Disponible para nuevos proyectos
          </div>

          <h1 class="bs-reveal mt-6 font-black tracking-tight text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05]" data-delay="1" style="font-family: 'Space Grotesk', Inter, sans-serif;">
            Construimos
            <span class="bs-gradient-text">software moderno</span>
            para impulsar tu negocio
          </h1>

          <p class="bs-reveal mt-6 max-w-xl text-lg text-slate-300/90" data-delay="2">
            En BeanSoft diseñamos y desarrollamos soluciones digitales escalables, rápidas y atractivas para empresas que quieren crecer.
          </p>

          <div class="bs-reveal mt-8 flex flex-wrap gap-3" data-delay="3">
            <a href="#servicios" class="bs-btn-primary">
              Ver servicios
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </a>
            <a href="#contacto" class="bs-btn-ghost">Contactar</a>
          </div>

          <dl class="bs-reveal mt-12 grid grid-cols-3 gap-4 max-w-lg" data-delay="4">
            <div v-for="m in metrics" :key="m.label" class="rounded-2xl bs-glass p-4">
              <dt class="text-2xl font-bold bs-gradient-text">{{ m.value }}</dt>
              <dd class="mt-1 text-xs text-slate-400 leading-tight">{{ m.label }}</dd>
            </div>
          </dl>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="bs-reveal relative mx-auto max-w-md" data-delay="2">
            <div class="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/20 blur-2xl"></div>

            <div class="bs-glass-strong rounded-[2rem] p-6 bs-glow-blue bs-float">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
                  <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
                </div>
                <span class="text-[10px] uppercase tracking-[0.25em] text-slate-400">beansoft.dev</span>
              </div>

              <div class="mt-5 rounded-2xl bg-slate-950/60 border border-white/5 p-4 font-mono text-[12px] leading-relaxed text-slate-300">
                <div><span class="text-cyan-400">const</span> <span class="text-white">stack</span> = {</div>
                <div class="pl-4"><span class="text-sky-300">frontend</span>: <span class="text-emerald-300">'Astro + Vue'</span>,</div>
                <div class="pl-4"><span class="text-sky-300">styling</span>: <span class="text-emerald-300">'Tailwind 4'</span>,</div>
                <div class="pl-4"><span class="text-sky-300">backend</span>: <span class="text-emerald-300">'Node + Postgres'</span>,</div>
                <div class="pl-4"><span class="text-sky-300">deploy</span>: <span class="text-emerald-300">'Vercel · Docker'</span>,</div>
                <div>}</div>
              </div>

              <div class="mt-5 grid grid-cols-2 gap-3">
                <div class="rounded-xl border border-cyan-300/20 bg-cyan-500/5 p-3">
                  <div class="text-[10px] uppercase tracking-widest text-cyan-300/80">Performance</div>
                  <div class="mt-1 text-xl font-bold text-white">98<span class="text-cyan-300">/100</span></div>
                </div>
                <div class="rounded-xl border border-blue-300/20 bg-blue-500/5 p-3">
                  <div class="text-[10px] uppercase tracking-widest text-blue-300/80">Uptime</div>
                  <div class="mt-1 text-xl font-bold text-white">99.9<span class="text-blue-300">%</span></div>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-6 -left-6 hidden sm:block bs-glass rounded-2xl p-3 pr-5 bs-float" style="animation-delay:-2s">
              <div class="flex items-center gap-3">
                <div class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 font-black">+</div>
                <div>
                  <div class="text-xs text-slate-400">Equipo escalable</div>
                  <div class="text-sm font-semibold text-white">Diseño + Dev + QA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-6 flex justify-center">
      <div class="bs-reveal flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400" data-delay="5">
        Scroll
        <span class="h-8 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent"></span>
      </div>
    </div>
  </section>
</template>
