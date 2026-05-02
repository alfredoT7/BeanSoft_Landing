<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const elRef = ref<HTMLDivElement | null>(null);
let effect: { destroy: () => void } | null = null;

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
});

onBeforeUnmount(() => {
  try { effect?.destroy?.(); } catch { /* noop */ }
  effect = null;
});
</script>

<template>
  <div ref="elRef" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"></div>
</template>
