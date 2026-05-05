<script setup lang="ts">
type Service = { title: string; desc: string; icon: string };

const services: Service[] = [
  { title: 'Desarrollo Web', desc: 'Sitios y aplicaciones web rápidas, accesibles y optimizadas para SEO.', icon: 'web' },
  { title: 'Aplicaciones Empresariales', desc: 'Sistemas robustos para gestión interna, ventas, operaciones y reportería.', icon: 'building' },
  { title: 'Sistemas a medida', desc: 'Soluciones diseñadas alrededor de tu proceso, no al revés.', icon: 'layers' },
  { title: 'Automatización', desc: 'Integraciones y workflows que eliminan tareas manuales repetitivas.', icon: 'bolt' },
  { title: 'UI/UX Design', desc: 'Interfaces claras, modernas y centradas en la experiencia del usuario.', icon: 'sparkles' },
  { title: 'Consultoría tecnológica', desc: 'Asesoría en arquitectura, stack, performance y escalabilidad.', icon: 'compass' },
];
</script>

<template>
  <section id="servicios" class="relative py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="max-w-2xl">
        <p class="bs-reveal text-xs uppercase tracking-[0.35em] text-orange-300/90">Servicios</p>
        <h2 class="bs-reveal mt-3 text-4xl sm:text-5xl font-bold text-white" data-delay="1" style="font-family:'Space Grotesk',Inter,sans-serif;">
          Soluciones <span class="bs-gradient-text">a la medida</span> de tu negocio
        </h2>
        <p class="bs-reveal mt-4 text-slate-300/90" data-delay="2">
          Cubrimos todo el ciclo: estrategia, diseño, desarrollo y mantenimiento. Sin sorpresas.
        </p>
      </div>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(s, i) in services"
          :key="s.title"
          class="bs-reveal bs-glass bs-card-hover group relative rounded-3xl p-7 overflow-hidden"
          :data-delay="(i % 6) + 1"
        >
          <div class="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#C74F0B]/15 blur-3xl opacity-0 group-hover:opacity-100 transition"></div>

          <div class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#C74F0B]/20 to-[#A83A08]/20 border border-[#C85010]/25 text-orange-300">
            <svg v-if="s.icon === 'web'" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 14h6"/></svg>
            <svg v-else-if="s.icon === 'building'" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 21h16M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M10 8h4M10 12h4M10 16h4"/></svg>
            <svg v-else-if="s.icon === 'layers'" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 4 9 5 9-5"/></svg>
            <svg v-else-if="s.icon === 'bolt'" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z"/></svg>
            <svg v-else-if="s.icon === 'sparkles'" viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg>
            <svg v-else viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5 5-2Z"/></svg>
          </div>

          <h3 class="mt-5 text-lg font-semibold text-white">{{ s.title }}</h3>
          <p class="mt-2 text-sm text-slate-400 leading-relaxed">{{ s.desc }}</p>

          <div class="mt-5 flex items-center gap-1 text-xs font-semibold text-orange-300 opacity-0 group-hover:opacity-100 transition translate-y-1 group-hover:translate-y-0">
            Saber más
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-5-5 5 5-5 5"/></svg>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
