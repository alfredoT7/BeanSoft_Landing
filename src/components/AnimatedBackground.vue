<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let raf = 0;
let particles: Particle[] = [];
let mouse = { x: -9999, y: -9999 };

type Particle = {
  x: number; y: number; vx: number; vy: number; r: number;
};

function resize(canvas: HTMLCanvasElement) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  const ctx = canvas.getContext('2d');
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function spawn() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const count = Math.min(110, Math.floor((w * h) / 16000));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.6 + 0.4,
  }));
}

function tick() {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  ctx.clearRect(0, 0, w, h);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;

    const dx = p.x - mouse.x;
    const dy = p.y - mouse.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 120) {
      const f = (120 - dist) / 120 * 0.6;
      p.x += (dx / dist) * f;
      p.y += (dy / dist) * f;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(125, 211, 252, 0.85)';
    ctx.fill();
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i], b = particles[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const d = Math.hypot(dx, dy);
      if (d < 130) {
        const alpha = (1 - d / 130) * 0.35;
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  raf = requestAnimationFrame(tick);
}

const onResize = () => {
  if (!canvasRef.value) return;
  resize(canvasRef.value);
  spawn();
};
const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

onMounted(() => {
  if (!canvasRef.value) return;
  resize(canvasRef.value);
  spawn();
  raf = requestAnimationFrame(tick);
  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouse);
  window.addEventListener('mouseleave', onLeave);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  window.removeEventListener('resize', onResize);
  window.removeEventListener('mousemove', onMouse);
  window.removeEventListener('mouseleave', onLeave);
});
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.18),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(34,211,238,0.12),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.10),_transparent_55%)]"></div>
    <div class="absolute inset-0 bs-grid-bg opacity-50"></div>

    <svg class="absolute inset-x-0 top-1/3 w-full h-72 opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <defs>
        <linearGradient id="bsWave" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stop-color="#22d3ee" stop-opacity="0" />
          <stop offset="50%" stop-color="#3b82f6" stop-opacity="1" />
          <stop offset="100%" stop-color="#22d3ee" stop-opacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,160 C240,260 480,60 720,160 C960,260 1200,60 1440,160 L1440,320 L0,320 Z"
        fill="none"
        stroke="url(#bsWave)"
        stroke-width="1.4"
      />
      <path
        d="M0,200 C240,100 480,300 720,200 C960,100 1200,300 1440,200"
        fill="none"
        stroke="url(#bsWave)"
        stroke-width="1"
        opacity="0.6"
      />
    </svg>

    <canvas ref="canvasRef" class="absolute inset-0"></canvas>
  </div>
</template>
