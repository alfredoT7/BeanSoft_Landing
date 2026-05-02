<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const targetText = 'Somos BeanSoft';
const typedLength = ref(0);
const isDeleting = ref(false);
let timer = 0;

const typedText = computed(() => targetText.slice(0, typedLength.value));
const typedLead = computed(() => typedText.value.replace('BeanSoft', ''));
const typedBrand = computed(() => typedText.value.slice(typedLead.value.length));

const startTyping = () => {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    typedLength.value = targetText.length;
    return;
  }

  const tick = () => {
    if (!isDeleting.value && typedLength.value < targetText.length) {
      typedLength.value += 1;
      timer = window.setTimeout(tick, typedLength.value < 6 ? 85 : 120);
      return;
    }

    if (!isDeleting.value && typedLength.value >= targetText.length) {
      isDeleting.value = true;
      timer = window.setTimeout(tick, 1500);
      return;
    }

    if (isDeleting.value && typedLength.value > 0) {
      typedLength.value -= 1;
      timer = window.setTimeout(tick, 55);
      return;
    }

    isDeleting.value = false;
    timer = window.setTimeout(tick, 450);
  };

  timer = window.setTimeout(tick, 450);
};

onMounted(() => {
  startTyping();
});

onBeforeUnmount(() => {
  window.clearTimeout(timer);
});
</script>

<template>
  <section
    id="inicio"
    class="relative min-h-screen flex items-center justify-center px-6"
  >
    <div class="bs-hero-orb bs-hero-orb-a"></div>
    <div class="bs-hero-orb bs-hero-orb-b"></div>
    <div class="bs-hero-scanline" aria-hidden="true"></div>

    <div class="relative text-center max-w-5xl">
      <p
        class="bs-reveal bs-float-soft inline-flex items-center gap-2 rounded-full bs-glass px-4 py-1.5 text-xs font-medium text-cyan-200"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]"></span>
        Software studio · Disponible para nuevos proyectos
      </p>

      <h1
        class="bs-reveal mt-8 font-black tracking-tight text-white text-5xl sm:text-7xl lg:text-8xl leading-[1.02]"
        data-delay="1"
        style="font-family: 'Space Grotesk', Inter, sans-serif;"
      >
        <span class="block">Hola,</span>
        <span class="bs-terminal-line mt-3 inline-flex items-baseline">
          <span class="text-slate-200">{{ typedLead }}</span><span class="bs-gradient-text">{{ typedBrand }}</span><span class="bs-terminal-cursor" aria-hidden="true"></span>
        </span>
      </h1>

      <p
        class="bs-reveal mt-6 text-base sm:text-lg text-slate-300/85 max-w-xl mx-auto bs-fade-shimmer"
        data-delay="2"
      >
        Diseño y desarrollo de software moderno, escalable y a medida.
      </p>

      <a
        href="#servicios"
        class="bs-reveal mt-16 inline-flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400 hover:text-cyan-300 transition bs-scroll-cue"
        data-delay="3"
        aria-label="Ir a servicios"
      >
        Scroll
        <span class="h-12 w-[1px] bg-gradient-to-b from-cyan-400 to-transparent"></span>
      </a>
    </div>
  </section>
</template>
