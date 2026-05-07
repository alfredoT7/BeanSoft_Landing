<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const targetText = 'BeanSoft';
const typedLength = ref(0);
const isDeleting = ref(false);
let deleteTargetLength = 0;
let timer = 0;

const typedText = computed(() => targetText.slice(0, typedLength.value));

const pickDeleteTarget = () => {
  const partialDeletes = [targetText.length - 2, targetText.length - 3, targetText.length - 4];
  const shouldDeleteAll = Math.random() < 0.35;

  if (shouldDeleteAll) return 0;

  return partialDeletes[Math.floor(Math.random() * partialDeletes.length)];
};

const startTyping = () => {
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    typedLength.value = targetText.length;
    return;
  }

  const tick = () => {
    if (!isDeleting.value && typedLength.value < targetText.length) {
      typedLength.value += 1;
      const typingDelay = typedLength.value < 4 ? 165 : 205;
      timer = window.setTimeout(tick, typingDelay);
      return;
    }

    if (!isDeleting.value && typedLength.value >= targetText.length) {
      isDeleting.value = true;
      deleteTargetLength = pickDeleteTarget();
      timer = window.setTimeout(tick, 2200);
      return;
    }

    if (isDeleting.value && typedLength.value > deleteTargetLength) {
      typedLength.value -= 1;
      timer = window.setTimeout(tick, 135);
      return;
    }

    isDeleting.value = false;
    timer = window.setTimeout(tick, 950);
  };

  timer = window.setTimeout(tick, 900);
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
    class="relative min-h-screen flex items-center justify-center"
  >
    <div class="bs-hero-orb bs-hero-orb-a"></div>
    <div class="bs-hero-orb bs-hero-orb-b"></div>
    <div class="bs-hero-scanline" aria-hidden="true"></div>

    <div class="relative w-full mx-auto flex max-w-5xl flex-col items-center text-center px-4 sm:px-6">
      <span class="bs-reveal">
        <img
          src="/reducedlogo.svg"
          alt="Logo BeanSoft"
          class="mx-auto w-32 sm:w-40 lg:w-48"
        />
      </span>

      <p
        class="bs-reveal bs-float-soft mt-6 inline-flex items-center justify-center gap-2 self-center rounded-full bs-glass px-4 py-1.5 text-xs font-medium text-orange-100"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-[#C74F0B] shadow-[0_0_10px_rgba(200,80,16,0.9)]"></span>
        Software studio · Disponible para nuevos proyectos
      </p>

      <h1
        class="bs-reveal mt-8 font-black tracking-tight text-white text-5xl sm:text-7xl lg:text-8xl leading-[1.02]"
        data-delay="1"
        style="font-family: 'Space Grotesk', Inter, sans-serif;"
      >
        <span class="block">Hola, Somos</span>
        <span class="bs-terminal-line mt-3 inline-flex items-baseline">
          <span class="bs-gradient-text">{{ typedText }}</span><span class="bs-terminal-cursor" aria-hidden="true"></span>
        </span>
      </h1>

      <p
        class="bs-reveal mt-6 text-base sm:text-lg text-slate-300/85 max-w-xl mx-auto bs-fade-shimmer"
        data-delay="2"
      >
        Diseño y desarrollo de software moderno, escalable y a medida.
      </p>

      <a
        href="#proyecto"
        class="bs-reveal mt-16 inline-flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-slate-400 hover:text-orange-300 transition bs-scroll-cue"
        data-delay="3"
        aria-label="Ir a proyecto"
      >
        Scroll
        <span class="h-12 w-[1px] bg-gradient-to-b from-[#C74F0B] to-transparent"></span>
      </a>
    </div>
  </section>
</template>
