<script setup lang="ts">
import { computed, ref } from 'vue';

type Status = 'Listo' | 'En proceso' | 'Bloqueado';

type Item = {
  id: number;
  title: string;
  detail: string;
  status: Status;
};

const items = ref<Item[]>([
  { id: 1, title: 'Landing retail', detail: 'Hero, pricing, CTA', status: 'Listo' },
  { id: 2, title: 'Dashboard ventas', detail: 'Charts y KPIs vivos', status: 'En proceso' },
  { id: 3, title: 'Portal soporte', detail: 'FAQ y bandeja tickets', status: 'Bloqueado' },
]);

const selected = ref<'Todos' | Status>('Todos');

const visibleItems = computed(() =>
  selected.value === 'Todos'
    ? items.value
    : items.value.filter((item) => item.status === selected.value)
);

function cycleStatus(item: Item) {
  if (item.status === 'Listo') {
    item.status = 'En proceso';
    return;
  }

  if (item.status === 'En proceso') {
    item.status = 'Bloqueado';
    return;
  }

  item.status = 'Listo';
}

function statusClass(status: Status) {
  if (status === 'Listo') {
    return 'bg-emerald-300/15 text-emerald-200 border-emerald-300/20';
  }

  if (status === 'En proceso') {
    return 'bg-amber-300/15 text-amber-100 border-amber-300/20';
  }

  return 'bg-rose-300/15 text-rose-100 border-rose-300/20';
}
</script>

<template>
  <section class="rounded-[2rem] border border-stone-200/70 bg-white/70 p-6 shadow-2xl shadow-stone-300/30 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-black/30">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">Vue demo</p>
        <h2 class="mt-3 text-3xl font-black text-stone-950 dark:text-white">Board interactivo simple.</h2>
        <p class="mt-3 max-w-2xl text-sm leading-7 text-stone-600 dark:text-stone-300">
          Filtros y cambios de estado corren con Vue. Estilos salen de Tailwind.
        </p>
      </div>

      <div class="flex flex-wrap gap-2">
        <button
          v-for="option in ['Todos', 'Listo', 'En proceso', 'Bloqueado']"
          :key="option"
          type="button"
          class="rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] transition"
          :class="selected === option
            ? 'border-cyan-300 bg-cyan-300 text-stone-950'
            : 'border-stone-300 bg-white/60 text-stone-700 hover:border-cyan-400/60 hover:text-stone-950 dark:border-white/10 dark:bg-black/20 dark:text-stone-200 dark:hover:border-cyan-300/40 dark:hover:text-white'"
          @click="selected = option as typeof selected"
        >
          {{ option }}
        </button>
      </div>
    </div>

    <div class="mt-8 grid gap-4 md:grid-cols-3">
      <article
        v-for="item in visibleItems"
        :key="item.id"
        class="rounded-3xl border border-stone-200/70 bg-white/70 p-5 dark:border-white/10 dark:bg-stone-950/70"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-lg font-black text-stone-950 dark:text-white">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{{ item.detail }}</p>
          </div>

          <span
            class="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em]"
            :class="statusClass(item.status)"
          >
            {{ item.status }}
          </span>
        </div>

        <button
          type="button"
          class="mt-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-stone-950 transition hover:bg-cyan-200"
          @click="cycleStatus(item)"
        >
          Cambiar estado
        </button>
      </article>
    </div>
  </section>
</template>
