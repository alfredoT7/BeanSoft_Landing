<script setup lang="ts">
import { ref } from 'vue';

const form = ref({ name: '', email: '', message: '' });
const sent = ref(false);

const submit = (e: Event) => {
  e.preventDefault();
  sent.value = true;
  setTimeout(() => (sent.value = false), 3500);
  form.value = { name: '', email: '', message: '' };
};
</script>

<template>
  <section id="demo" class="relative py-28">
    <div class="w-full mx-auto max-w-7xl px-4 sm:px-6">
      <div class="bs-reveal relative overflow-hidden rounded-[2.5rem] bs-glass-strong p-8 sm:p-14 bs-glow-orange">
        <div class="absolute -top-40 -right-20 h-96 w-96 rounded-full bg-[#C74F0B]/20 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#A83A08]/25 blur-3xl"></div>

        <div class="relative grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p class="text-xs uppercase tracking-[0.35em] text-orange-300/90">Demo</p>
            <h2 class="mt-3 text-4xl sm:text-5xl font-bold text-white leading-tight" style="font-family:'Space Grotesk',Inter,sans-serif;">
              ¿Quieres ver la demo?
              <br /><span class="bs-gradient-text">Hablemos.</span>
            </h2>
            <p class="mt-5 text-slate-300/90 max-w-md">
              Cuéntanos qué necesitas y te compartimos una vista inicial de la solución que estamos preparando.
            </p>

            <ul class="mt-8 space-y-3 text-sm text-slate-300">
              <li class="flex items-center gap-3">
                <span class="grid h-9 w-9 place-items-center rounded-xl bg-[#C74F0B]/10 border border-[#C85010]/25 text-orange-300">
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M3 7l9 6 9-6M3 7l9-4 9 4"/></svg>
                </span>
                hola@beansoft.dev
              </li>
              <li class="flex items-center gap-3">
                <span class="grid h-9 w-9 place-items-center rounded-xl bg-[#C74F0B]/10 border border-[#C85010]/25 text-orange-300">
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L7.9 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.9 2Z"/></svg>
                </span>
                +51 999 000 000
              </li>
              <li class="flex items-center gap-3">
                <span class="grid h-9 w-9 place-items-center rounded-xl bg-[#C74F0B]/10 border border-[#C85010]/25 text-orange-300">
                  <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13Z"/><circle cx="12" cy="9" r="3"/></svg>
                </span>
                Remoto · LATAM
              </li>
            </ul>
          </div>

          <form class="space-y-4" @submit="submit">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-widest text-slate-400">Nombre</label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Tu nombre"
                class="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:border-orange-300/60 focus:outline-none focus:ring-2 focus:ring-[#C74F0B]/25 transition"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-widest text-slate-400">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="tu@empresa.com"
                class="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:border-orange-300/60 focus:outline-none focus:ring-2 focus:ring-[#C74F0B]/25 transition"
              />
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-widest text-slate-400">Mensaje</label>
              <textarea
                v-model="form.message"
                rows="5"
                required
                placeholder="Cuéntanos sobre tu proyecto..."
                class="mt-2 w-full rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:border-orange-300/60 focus:outline-none focus:ring-2 focus:ring-[#C74F0B]/25 transition resize-none"
              ></textarea>
            </div>

            <button type="submit" class="bs-btn-primary w-full justify-center">
              Solicitar demo
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-5-5 5 5-5 5"/>
              </svg>
            </button>

            <transition
              enter-active-class="transition duration-300"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
            >
              <p v-if="sent" class="text-sm text-orange-300 text-center">
                ¡Gracias! Hemos recibido tu solicitud (mock).
              </p>
            </transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
