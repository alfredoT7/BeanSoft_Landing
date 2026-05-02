<script setup lang="ts"></script>

<template>
  <section
    id="inicio"
    class="relative min-h-screen flex items-center justify-center px-6"
  >
    <div class="relative text-center max-w-5xl">
      <p
        class="bs-reveal inline-flex items-center gap-2 rounded-full bs-glass px-4 py-1.5 text-xs font-medium text-cyan-200"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"></span>
        Software studio · Disponible para nuevos proyectos
      </p>

      <h1
        class="bs-reveal mt-8 font-black tracking-tight text-white text-5xl sm:text-7xl lg:text-8xl leading-[1.02]"
        data-delay="1"
        style="font-family: 'Space Grotesk', Inter, sans-serif;"
      >
        Hola, Somos
        <span class="bs-gradient-text">BeanSoft</span>
      </h1>

      <p
        class="bs-reveal mt-6 text-base sm:text-lg text-slate-300/85 max-w-xl mx-auto"
        data-delay="2"
      >
        Diseño y desarrollo de software moderno, escalable y a medida.
      </p>

      <a
        href="#servicios"
        class="bs-reveal mt-16 inline-flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400 hover:text-cyan-300 transition"
        data-delay="3"
        aria-label="Ir a servicios"
      >
        Scroll
        <span class="h-12 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent"></span>
      </a>
    </div>
  </section>
</template>
