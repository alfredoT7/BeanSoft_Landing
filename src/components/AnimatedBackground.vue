<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const elRef = ref<HTMLDivElement | null>(null);

let scrollRaf = 0;
let renderRaf = 0;
let teardownScene: (() => void) | null = null;

const syncScroll = () => {
  if (!elRef.value) return;

  const y = window.scrollY || 0;
  const offset = Math.min(y * 0.24, 180);
  const scale = 1 + Math.min(y / 4500, 0.045);
  const glowOffset = y * 0.14;

  elRef.value.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
  elRef.value.style.opacity = String(Math.max(0.56, 1 - y / 2400));
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
  const {
    AmbientLight,
    CatmullRomCurve3,
    Clock,
    Group,
    Line,
    LineBasicMaterial,
    PerspectiveCamera,
    Scene,
    TubeGeometry,
    Vector3,
    WebGLRenderer,
    Mesh,
    MeshStandardMaterial,
    PointLight,
    Color,
  } = THREE;

  const scene = new Scene();
  const camera = new PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 7.8);

  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.className = 'absolute inset-0 h-full w-full';
  elRef.value.appendChild(renderer.domElement);

  scene.add(new AmbientLight(0xffffff, 0.75));

  const keyLight = new PointLight(0xffa15f, 2.2, 30, 2);
  keyLight.position.set(-4, 2, 6);
  scene.add(keyLight);

  const fillLight = new PointLight(0xa83a08, 1.25, 24, 2);
  fillLight.position.set(5, -3, 4);
  scene.add(fillLight);

  const curveGroup = new Group();
  scene.add(curveGroup);

  const tubes: Array<{
    mesh: InstanceType<typeof Mesh>;
    baseY: number;
    baseX: number;
    drift: number;
    swing: number;
    tilt: number;
    floatY: number;
    floatX: number;
    roll: number;
  }> = [];

  const makeCurvePoints = (offsetY: number, amplitude: number, length: number, depth: number, phase: number) => {
    const points: InstanceType<typeof Vector3>[] = [];

    for (let i = 0; i <= 16; i += 1) {
      const t = i / 16;
      const x = (t - 0.5) * length;
      const y = offsetY + Math.sin((t * Math.PI * 2) + phase) * amplitude;
      const z = Math.cos((t * Math.PI * 1.5) + phase) * depth;
      points.push(new Vector3(x, y, z));
    }

    return points;
  };

  const addRibbon = ({
    offsetY,
    amplitude,
    length,
    depth,
    phase,
    color,
    coreColor,
    radius,
    opacity,
    offsetX = 0,
  }: {
    offsetY: number;
    amplitude: number;
    length: number;
    depth: number;
    phase: number;
    color: number;
    coreColor: number;
    radius: number;
    opacity: number;
    offsetX?: number;
  }) => {
    const path = new CatmullRomCurve3(makeCurvePoints(offsetY, amplitude, length, depth, phase), false, 'catmullrom', 0.6);

    const shellGeometry = new TubeGeometry(path, 220, radius, 18, false);
    const shellMaterial = new MeshStandardMaterial({
      color,
      emissive: new Color(color),
      emissiveIntensity: 0.22,
      roughness: 0.28,
      metalness: 0.08,
      transparent: true,
      opacity,
    });

    const coreGeometry = new TubeGeometry(path, 220, radius * 0.34, 12, false);
    const coreMaterial = new MeshStandardMaterial({
      color: coreColor,
      emissive: new Color(coreColor),
      emissiveIntensity: 0.68,
      roughness: 0.1,
      metalness: 0,
      transparent: true,
      opacity: Math.min(opacity + 0.12, 0.95),
    });

    const shellMesh = new Mesh(shellGeometry, shellMaterial);
    const coreMesh = new Mesh(coreGeometry, coreMaterial);

    const lineGeometry = path.getPoints(240);
    const lineMaterial = new LineBasicMaterial({
      color: coreColor,
      transparent: true,
      opacity: 0.32,
    });
    const line = new Line(new THREE.BufferGeometry().setFromPoints(lineGeometry), lineMaterial);

    const ribbon = new Group();
    ribbon.position.x = offsetX;
    ribbon.add(shellMesh);
    ribbon.add(coreMesh);
    ribbon.add(line);
    curveGroup.add(ribbon);

    tubes.push({
      mesh: ribbon as unknown as InstanceType<typeof Mesh>,
      baseY: offsetY,
      baseX: offsetX,
      drift: 0.18 + Math.random() * 0.14,
      swing: phase,
      tilt: (Math.random() - 0.5) * 0.08,
      floatY: 0.12 + Math.random() * 0.08,
      floatX: 0.09 + Math.random() * 0.07,
      roll: 0.045 + Math.random() * 0.025,
    });
  };

  addRibbon({
    offsetY: 1.2,
    amplitude: 0.95,
    length: 9.8,
    depth: 0.5,
    phase: 0.35,
    color: 0xa83a08,
    coreColor: 0xc85010,
    radius: 0.16,
    opacity: 0.34,
    offsetX: -0.5,
  });

  addRibbon({
    offsetY: -0.15,
    amplitude: 1.18,
    length: 11.4,
    depth: 0.7,
    phase: 2.1,
    color: 0x7e2905,
    coreColor: 0xc74f0b,
    radius: 0.14,
    opacity: 0.28,
    offsetX: 0.4,
  });

  addRibbon({
    offsetY: -1.55,
    amplitude: 0.82,
    length: 8.7,
    depth: 0.42,
    phase: 4.4,
    color: 0x5d1c03,
    coreColor: 0xf28c28,
    radius: 0.11,
    opacity: 0.2,
    offsetX: -0.2,
  });

  addRibbon({
    offsetY: 2.05,
    amplitude: 0.72,
    length: 7.9,
    depth: 0.36,
    phase: 1.15,
    color: 0x6f2204,
    coreColor: 0xc74f0b,
    radius: 0.095,
    opacity: 0.18,
    offsetX: 0.95,
  });

  addRibbon({
    offsetY: 0.52,
    amplitude: 0.66,
    length: 7.4,
    depth: 0.3,
    phase: 3.15,
    color: 0x4e1702,
    coreColor: 0xf28c28,
    radius: 0.085,
    opacity: 0.16,
    offsetX: -1.05,
  });

  addRibbon({
    offsetY: -2.28,
    amplitude: 0.74,
    length: 7.8,
    depth: 0.38,
    phase: 5.05,
    color: 0x531704,
    coreColor: 0xc85010,
    radius: 0.09,
    opacity: 0.15,
    offsetX: 0.85,
  });

  curveGroup.rotation.x = -0.42;
  curveGroup.rotation.z = -0.08;

  const resize = () => {
    if (!elRef.value) return;
    const width = elRef.value.clientWidth || window.innerWidth;
    const height = elRef.value.clientHeight || window.innerHeight;

    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  const clock = new Clock();

  const render = () => {
    const elapsed = clock.getElapsedTime();

    curveGroup.rotation.y = Math.sin(elapsed * 0.2) * 0.12;
    curveGroup.position.x = Math.sin(elapsed * 0.16) * 0.12;

    tubes.forEach((tube, index) => {
      tube.mesh.position.y = tube.baseY + Math.sin(elapsed * tube.drift + tube.swing) * tube.floatY;
      tube.mesh.position.x = tube.baseX + Math.cos(elapsed * (tube.drift * 0.78) + tube.swing) * tube.floatX;
      tube.mesh.rotation.z = tube.tilt + Math.sin(elapsed * 0.22 + index) * tube.roll;
      tube.mesh.rotation.x = Math.cos(elapsed * 0.16 + index) * 0.04;
    });

    renderer.render(scene, camera);
    renderRaf = window.requestAnimationFrame(render);
  };

  resize();
  syncScroll();
  render();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', resize);

  teardownScene = () => {
    window.removeEventListener('resize', resize);

    curveGroup.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();

      const material = (mesh as { material?: THREE.Material | THREE.Material[] }).material;
      if (Array.isArray(material)) {
        material.forEach((entry) => entry.dispose());
      } else {
        material?.dispose();
      }
    });

    renderer.dispose();
    renderer.domElement.remove();
  };
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  if (scrollRaf) window.cancelAnimationFrame(scrollRaf);
  if (renderRaf) window.cancelAnimationFrame(renderRaf);
  teardownScene?.();
  teardownScene = null;
});
</script>

<template>
  <div
    ref="elRef"
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-transform duration-300 ease-out"
  >
    <div class="bs-bg-glow absolute inset-[-12%]"></div>
  </div>
</template>
