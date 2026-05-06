<script setup lang="ts">
</script>

<template>
  <section id="proyecto" class="relative py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <p class="bs-reveal-scale text-xs uppercase tracking-[0.35em] text-orange-300/90">Proyecto</p>
        <h2 class="bs-reveal-scale mt-3 text-4xl sm:text-5xl font-bold text-white" data-delay="1" style="font-family:'Space Grotesk',Inter,sans-serif;">
          Nuestro proyecto para <span class="bs-gradient-text">la hackatón</span>
        </h2>
        <p class="bs-reveal-scale mt-4 text-slate-300/90 text-lg" data-delay="2">
          Estamos preparando una demo funcional para presentar nuestra solución al reto. Muy pronto podrás conocer el resultado del trabajo de BeanSoft.
        </p>
      </div>

      <div class="bs-reveal-scale mt-16 grid lg:grid-cols-[2fr_1fr] gap-8 items-start" data-delay="3">
        <div class="relative">
          <div class="absolute -inset-6 bg-gradient-to-br from-orange-500/15 to-transparent rounded-3xl blur-3xl opacity-60"></div>

          <div class="relative">
            <div class="relative rounded-2xl overflow-hidden border border-orange-500/20 bs-glass-navy p-2 shadow-2xl">
              <div class="rounded-xl overflow-hidden bg-slate-900/50">
                <img
                  src="/pc-image.png"
                  alt="Demo Dashboard"
                  class="w-full h-auto object-cover rounded-lg backdrop-blur-sm bs-image-parallax"
                  style="filter: blur(2px);"
                />
              </div>
            </div>
            <div class="absolute -top-3 left-3 text-xs uppercase tracking-wider text-orange-300/70 bg-slate-900/80 px-3 py-1 rounded-full">
              Dashboard
            </div>

            <div class="absolute -top-6 -right-8 w-32 sm:w-40">
              <div class="relative rounded-2xl overflow-hidden border border-orange-500/20 p-0 shadow-xl">
                <img
                  src="/mobile-image.png"
                  alt="Demo Mobile"
                  class="w-full h-auto object-cover rounded-2xl backdrop-blur-sm bs-image-parallax"
                  style="filter: blur(2px);"
                />
              </div>
              <div class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-wider text-orange-300/70 bg-slate-900/80 px-3 py-1 rounded-full whitespace-nowrap">
                Mobile
              </div>
            </div>
          </div>
        </div>

        <div class="bs-float-in rounded-2xl border border-orange-500/30 bs-glass-navy p-6 flex flex-col justify-between h-full" data-delay="2">
          <div class="space-y-3">
            <div class="h-5 bg-slate-700 rounded-lg w-3/4" style="filter: blur(4px);"></div>

            <div class="space-y-2">
              <div class="h-3 bg-slate-600 rounded w-full" style="filter: blur(4px);"></div>
              <div class="h-3 bg-slate-600 rounded w-5/6" style="filter: blur(4px);"></div>
              <div class="h-3 bg-slate-600 rounded w-4/5" style="filter: blur(4px);"></div>
            </div>
          </div>

          <div class="space-y-2 pt-4 border-t border-slate-700/50">
            <div class="flex gap-2 flex-wrap">
              <div class="h-6 w-20 bg-orange-500/30 rounded-full" style="filter: blur(3px);"></div>
              <div class="h-6 w-24 bg-orange-500/20 rounded-full" style="filter: blur(3px);"></div>
              <div class="h-6 w-20 bg-orange-500/20 rounded-full" style="filter: blur(3px);"></div>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-slate-700/50 space-y-4">
            <div>
              <p class="text-xs uppercase tracking-[0.35em] text-orange-300/90 mb-2">Estado</p>
              <h3 class="text-lg sm:text-xl font-bold text-white mb-2">
                Próximamente
              </h3>
              <p class="text-base text-orange-300 font-semibold">
                16 y 17 de mayo
              </p>
            </div>

            <div class="space-y-3 pt-4 border-t border-slate-700/50">
              <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
                La hackatón será el escenario perfecto para mostrar cómo BeanSoft transforma ideas en soluciones funcionales. Nuestra demo incluye el trabajo completo del equipo en diseño, desarrollo y estrategia.
              </p>
              <p class="text-slate-400 text-xs">
                Sigue nuestro progreso y prepárate para conocer la innovación que estamos construyendo.
              </p>
            </div>
          </div>

          <div class="absolute top-3 right-3 text-xs uppercase tracking-wider text-orange-300/50 font-semibold">
            Preview
          </div>
        </div>
      </div>

      <div class="absolute top-1/3 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
      <div class="absolute bottom-0 right-20 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl -z-10"></div>
    </div>
  </section>
</template>
