<script setup lang="ts">
import { computed, ref } from 'vue';

const clicks = ref(0);
const status = computed(() => (clicks.value > 0 ? 'Interaccionando' : 'Esperando click'));
</script>

<template>
  <section class="rounded-[2rem] border border-cyan-400/30 bg-cyan-100/75 p-6 shadow-2xl shadow-cyan-300/30 backdrop-blur dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:shadow-cyan-950/30">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-800 dark:text-cyan-100">Vue island</p>
        <h2 class="mt-3 text-2xl font-black text-stone-950 dark:text-white">Astro + Vue + Tailwind vivos.</h2>
      </div>

      <span class="rounded-full border border-cyan-900/10 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-900 dark:border-cyan-100/20 dark:bg-black/20 dark:text-cyan-50">
        {{ status }}
      </span>
    </div>

    <p class="mt-4 max-w-xl text-sm leading-7 text-stone-700 dark:text-stone-200">
      Este bloque hidrata con Vue en cliente. Si botón sube contador y estilos siguen intactos, integración completa funciona.
    </p>

    <div class="mt-6 flex flex-wrap items-center gap-4">
      <button
        type="button"
        class="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-stone-950 transition hover:bg-cyan-200"
        @click="clicks += 1"
      >
        Click me
      </button>

      <div class="rounded-full border border-stone-900/10 px-4 py-2 text-sm text-stone-800 dark:border-white/10 dark:text-stone-100">
        Contador: <strong class="font-black text-stone-950 dark:text-white">{{ clicks }}</strong>
      </div>
    </div>
  </section>
</template>
