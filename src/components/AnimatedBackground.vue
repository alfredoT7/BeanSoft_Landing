<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const elRef = ref<HTMLDivElement | null>(null);

let scrollRaf = 0;
let vantaEffect: any = null;

const syncScroll = () => {
  if (!elRef.value) return;

  const y = window.scrollY || 0;
  const scale = 1 + Math.min(y / 4500, 0.045);
  const glowOffset = y * 0.14;

  elRef.value.style.transform = `scale(${scale})`;
  elRef.value.style.opacity = String(Math.max(0.92, 1 - y / 4200));
  elRef.value.style.setProperty('--bs-glow-shift', `${glowOffset}px`);
  scrollRaf = 0;
};

const onScroll = () => {
  if (scrollRaf) return;
  scrollRaf = window.requestAnimationFrame(syncScroll);
};

onMounted(async () => {
  if (!elRef.value || typeof window === 'undefined') return;

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const THREE = await import('three');
  const VANTA = await import('vanta/dist/vanta.net.min');

  vantaEffect = VANTA.default({
    el: elRef.value,
    THREE,
    color: 0xff6b35,
    backgroundColor: 0x07111f,
    mouseControls: true,
    touchControls: true,
    scale: 1.0,
    scaleMobile: 0.8,
    points: 12,
    maxDistance: 25,
    spacing: 15,
  });

  window.addEventListener('scroll', onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  if (scrollRaf) window.cancelAnimationFrame(scrollRaf);
  if (vantaEffect) vantaEffect.destroy();
  vantaEffect = null;
});
</script>

<template>
  <div
    ref="elRef"
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-transform duration-300 ease-out"
  >
    <div class="bs-bg-glow absolute inset-[-12%] z-0"></div>
  </div>
</template>
