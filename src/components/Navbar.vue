<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

const scrolled = ref(false);
const visible = ref(false);
const open = ref(false);
const revealProgress = ref(0);

let rafId = 0;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const headerStyle = computed(() => {
  const progress = revealProgress.value;
  const translateY = -36 + (36 * progress);

  return {
    opacity: progress,
    transform: `translate3d(0, ${translateY}px, 0)`,
    pointerEvents: progress > 0.05 ? 'auto' : 'none',
  };
});

const onScroll = () => {
  const y = window.scrollY;
  const h = window.innerHeight;
  const start = h * 0.52;
  const end = h * 0.78;
  const nextProgress = clamp((y - start) / Math.max(end - start, 1), 0, 1);

  visible.value = nextProgress > 0.05;
  revealProgress.value = nextProgress;
  scrolled.value = y > 24;
};

const queueScrollUpdate = () => {
  if (rafId) return;
  rafId = window.requestAnimationFrame(() => {
    rafId = 0;
    onScroll();
  });
};

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', queueScrollUpdate, { passive: true });
  window.addEventListener('resize', queueScrollUpdate);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', queueScrollUpdate);
  window.removeEventListener('resize', queueScrollUpdate);
  window.cancelAnimationFrame(rafId);
});

watch(visible, (v) => { if (!v) open.value = false; });

const close = () => (open.value = false);
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 will-change-transform"
    :style="headerStyle"
    :class="[
      scrolled ? 'py-2' : 'py-4',
      visible ? 'bs-navbar-visible' : 'bs-navbar-hidden'
    ]"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <nav
        class="flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300"
        :class="scrolled ? 'bs-glass-strong-navy bs-glow-navy' : 'bs-glass-navy'"
      >
        <a href="#inicio" class="flex items-center gap-2 font-bold tracking-tight">
          <span class="bs-logo-glow shrink-0">
            <img
              src="/reducedlogo.svg"
              alt="BeanSoft"
              class="h-10 w-auto object-contain"
            />
          </span>
          <span class="text-lg sm:text-xl text-white">
            Bean<span class="bs-gradient-text">Soft</span>
          </span>
        </a>

        <ul class="hidden lg:flex items-center gap-1 text-sm text-slate-300">
          <li v-for="l in links" :key="l.href">
            <a
              :href="l.href"
              class="px-4 py-2 rounded-full transition hover:text-white hover:bg-white/5"
            >{{ l.label }}</a>
          </li>
        </ul>

        <div class="flex items-center gap-2">
          <a href="#contacto" class="hidden sm:inline-flex bs-btn-primary">
            Hablemos
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
            </svg>
          </a>

          <button
            type="button"
            class="lg:hidden grid place-items-center h-10 w-10 rounded-full bs-glass-navy text-slate-200"
            aria-label="Abrir menú"
            @click="open = !open"
          >
            <svg v-if="!open" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      </nav>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="open" class="lg:hidden mt-2 rounded-3xl bs-glass-strong-navy p-3">
          <ul class="flex flex-col">
            <li v-for="l in links" :key="l.href">
              <a
                :href="l.href"
                class="block px-4 py-3 rounded-2xl text-slate-200 hover:bg-white/5 hover:text-white"
                @click="close"
              >{{ l.label }}</a>
            </li>
            <li class="px-2 pt-2">
              <a href="#contacto" class="bs-btn-primary w-full justify-center" @click="close">Hablemos</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </header>
</template>
