<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const elRef = ref<HTMLDivElement | null>(null);
let effect: { destroy: () => void } | null = null;
let raf = 0;

const syncScroll = () => {
  if (!elRef.value) return;

  const y = window.scrollY || 0;
  const offset = Math.min(y * 0.24, 180);
  const scale = 1 + Math.min(y / 4500, 0.045);
  const gridOffset = -(y * 0.32);
  const glowOffset = y * 0.14;

  elRef.value.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
  elRef.value.style.opacity = String(Math.max(0.52, 1 - y / 2400));
  elRef.value.style.setProperty('--bs-grid-shift', `${gridOffset}px`);
  elRef.value.style.setProperty('--bs-glow-shift', `${glowOffset}px`);
  raf = 0;
};

const onScroll = () => {
  if (raf) return;
  raf = window.requestAnimationFrame(syncScroll);
};

onMounted(async () => {
  if (!elRef.value || typeof window === 'undefined') return;

  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const THREE = await import('three');
  const NET = (await import('vanta/dist/vanta.net.min')).default;

  effect = NET({
    el: elRef.value,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x03060f,
    color: 0x4f7cff,
    points: 12.0,
    maxDistance: 22.0,
    spacing: 17.0,
    showDots: false,
  });

  syncScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
  if (raf) window.cancelAnimationFrame(raf);
  try { effect?.destroy?.(); } catch { /* noop */ }
  effect = null;
});
</script>

<template>
  <div
    ref="elRef"
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-transform duration-300 ease-out"
  >
    <div class="bs-bg-glow absolute inset-[-12%]"></div>
    <div class="bs-bg-grid-layer absolute inset-0"></div>
  </div>
</template>
