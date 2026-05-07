<script setup lang="ts">
import { animate, inView, stagger } from 'motion';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const members = [
  {
    name: 'Alfredo Torrico',
    image: '/Alfredo-Torrico.png',
  },
  {
    name: 'Dylan Zeballos',
    image: '/Dylan-Zeballos.png',
  },
  {
    name: 'Fabricio Herrera',
    image: '/Fabricio-Herrera.png',
  },
];

const sectionRef = ref<HTMLElement | null>(null);
const cardRefs = ref<HTMLElement[]>([]);

let stopInView: (() => void) | undefined;

const setCardRef = (el: Element | null) => {
  if (!(el instanceof HTMLElement)) return;
  if (cardRefs.value.includes(el)) return;
  cardRefs.value.push(el);
};

onMounted(() => {
  const cards = cardRefs.value;
  const section = sectionRef.value;

  if (!cards.length || !section) return;

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translate3d(-40px, 0, 0) scale(0.96)';
  });

  stopInView = inView(
    section,
    () => {
      animate(
        cards,
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) scale(1)',
        },
        {
          delay: stagger(0.16),
          duration: 0.72,
          easing: [0.22, 1, 0.36, 1],
        }
      );

      stopInView?.();
    },
    { margin: '0px 0px -15% 0px' }
  );
});

onBeforeUnmount(() => {
  stopInView?.();
});
</script>

<template>
  <section id="equipo" ref="sectionRef" class="relative py-28 scroll-mt-28">
    <div class="w-full mx-auto max-w-7xl px-4 sm:px-6">
      <div class="max-w-3xl mx-auto text-center">
        <p class="bs-reveal-scale text-xs uppercase tracking-[0.35em] text-orange-300/90">Equipo</p>
        <h2 class="bs-reveal-scale mt-3 text-4xl sm:text-5xl font-bold text-white" data-delay="1" style="font-family:'Space Grotesk',Inter,sans-serif;">
          Conoce al <span class="bs-gradient-text">equipo</span>
        </h2>
        <p class="bs-reveal-scale mt-4 text-slate-300/90 text-lg" data-delay="2">
          Las personas detrás de la solución que estamos construyendo para la hackatón.
        </p>
      </div>

      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="member in members"
          :key="member.name"
          :ref="setCardRef"
          class="rounded-[2rem] border border-orange-400/20 bg-gradient-to-b from-[#C74F0B]/10 via-slate-950/40 to-slate-900/55 p-5 text-center shadow-[0_18px_60px_rgba(199,79,11,0.12)]"
        >
          <div class="overflow-hidden rounded-[1.5rem] bg-slate-900/40">
            <img
              :src="member.image"
              :alt="member.name"
              class="block h-[360px] w-full object-cover sm:h-[420px]"
            />
          </div>

          <h3 class="mt-5 text-xl font-semibold text-white">
            {{ member.name }}
          </h3>
        </article>
      </div>
    </div>
  </section>
</template>
