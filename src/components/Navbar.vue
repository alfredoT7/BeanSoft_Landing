<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

const scrolled = ref(false);
const open = ref(false);

const onScroll = () => { scrolled.value = window.scrollY > 24; };
onMounted(() => { onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); });
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

const close = () => (open.value = false);
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'py-2' : 'py-4'"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <nav
        class="flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300"
        :class="scrolled ? 'bs-glass-strong bs-glow-blue' : 'bs-glass'"
      >
        <a href="#inicio" class="flex items-center gap-2 font-bold tracking-tight">
          <span class="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/30">
            <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 4c4 0 8 3 8 8s-4 8-8 8c0-4 4-8 4-12 0-2-1-3-4-4Z" />
            </svg>
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
            class="lg:hidden grid place-items-center h-10 w-10 rounded-full bs-glass text-slate-200"
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
        <div v-if="open" class="lg:hidden mt-2 rounded-3xl bs-glass-strong p-3">
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
