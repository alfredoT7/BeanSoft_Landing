<script setup lang="ts">
const values = [
  { title: 'Calidad', desc: 'Código revisado, pruebas y estándares modernos.', icon: 'check' },
  { title: 'Innovación', desc: 'Stack actual y soluciones que aportan valor real.', icon: 'spark' },
  { title: 'Escalabilidad', desc: 'Arquitecturas que crecen con tu negocio.', icon: 'chart' },
  { title: 'Seguridad', desc: 'Buenas prácticas y datos protegidos.', icon: 'shield' },
  { title: 'Acompañamiento', desc: 'Soporte cercano antes, durante y después.', icon: 'users' },
];
</script>

<template>
  <section id="nosotros" class="relative py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid gap-12 lg:grid-cols-12 items-start">
        <div class="lg:col-span-5">
          <p class="bs-reveal text-xs uppercase tracking-[0.35em] text-orange-300/90">Nosotros</p>
          <h2 class="bs-reveal mt-3 text-4xl sm:text-5xl font-bold text-white" data-delay="1" style="font-family:'Space Grotesk',Inter,sans-serif;">
            Diseño + tecnología
            <br /><span class="bs-gradient-text">+ estrategia</span>
          </h2>
          <p class="bs-reveal mt-5 text-slate-300/90 leading-relaxed" data-delay="2">
            BeanSoft es una empresa enfocada en crear soluciones digitales modernas, combinando diseño, tecnología y estrategia para entregar productos funcionales, escalables y fáciles de usar.
          </p>

          <div class="bs-reveal mt-8 flex gap-3" data-delay="3">
            <a href="#contacto" class="bs-btn-primary">Trabajemos juntos</a>
            <a href="#proyectos" class="bs-btn-ghost">Ver proyectos</a>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="grid gap-4 sm:grid-cols-2">
            <article
              v-for="(v, i) in values"
              :key="v.title"
              class="bs-reveal bs-glass bs-card-hover rounded-3xl p-6"
              :class="i === 0 ? 'sm:col-span-2' : ''"
              :data-delay="(i % 5) + 1"
            >
              <div class="flex items-start gap-4">
                <div class="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#C74F0B]/20 to-[#A83A08]/20 border border-[#C85010]/25 text-orange-300">
                  <svg v-if="v.icon === 'check'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7"/></svg>
                  <svg v-else-if="v.icon === 'spark'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/></svg>
                  <svg v-else-if="v.icon === 'chart'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 19V5M4 19h16M8 15v-4M12 15V9M16 15v-2"/></svg>
                  <svg v-else-if="v.icon === 'shield'" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/></svg>
                  <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M16 11a3 3 0 1 0 0-6M21 20c0-2.5-2-4.5-5-5"/></svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-white">{{ v.title }}</h3>
                  <p class="mt-1 text-sm text-slate-400">{{ v.desc }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
