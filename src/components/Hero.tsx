"use client";

import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useRef } from "react";
import { m } from "framer-motion";
import { site } from "@/data/portfolio";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Point = { x: number; y: number; z: number };

function createSphere(count: number): Point[] {
  const points: Point[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    points.push({ x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius });
  }
  return points;
}

function NodeField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context: CanvasRenderingContext2D = canvas.getContext("2d")!;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points = createSphere(96);
    const pointer = { x: 0, y: 0 };
    let rotation = 0.35;
    let frame = 0;
    let width = 0;
    let height = 0;

    let accent =
      getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() ||
      "#5eead4";

    function refreshAccent() {
      accent =
        getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() ||
        "#5eead4";
      draw();
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.max(1, Math.floor(width * dpr));
      canvas!.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.36;
      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);
      const cosP = Math.cos(pointer.y * 0.35);
      const sinP = Math.sin(pointer.y * 0.35);

      const projected = points.map((p) => {
        const x = p.x * cosR - p.z * sinR;
        let z = p.x * sinR + p.z * cosR;
        const y = p.y * cosP - z * sinP;
        z = p.y * sinP + z * cosP;
        const perspective = 1.6 / (1.6 + z);
        return {
          x: cx + (x + pointer.x * 0.18) * scale * perspective,
          y: cy + y * scale * perspective,
          z,
          perspective,
        };
      });

      context.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < scale * 0.34) {
            const alpha = (1 - dist / (scale * 0.34)) * 0.35 * a.perspective;
            context.strokeStyle = accent;
            context.globalAlpha = alpha;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      for (const p of projected) {
        const depth = (p.z + 1) / 2;
        context.globalAlpha = 0.25 + depth * 0.65;
        context.fillStyle = accent;
        context.beginPath();
        context.arc(p.x, p.y, 1.1 + depth * 1.9, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    }

    function tick() {
      rotation += 0.0022;
      draw();
      frame = requestAnimationFrame(tick);
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    resize();
    draw();
    if (!reduced) frame = requestAnimationFrame(tick);

    const observer = new ResizeObserver(() => {
      resize();
      draw();
    });
    observer.observe(canvas);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("theme-change", refreshAccent);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("theme-change", refreshAccent);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 h-full w-full opacity-70 sm:w-[70%] lg:w-[58%] lg:opacity-100"
      style={{
        maskImage:
          "radial-gradient(60% 60% at 60% 45%, black 35%, transparent 78%)",
        WebkitMaskImage:
          "radial-gradient(60% 60% at 60% 45%, black 35%, transparent 78%)",
      }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16 md:min-h-screen"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(75% 55% at 15% 10%, var(--glow), transparent 65%)",
        }}
      />
      <NodeField />

      <div className="container-page relative z-10">
        <div className="max-w-3xl">
          <m.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to internships &amp; collaboration
          </m.p>

          <m.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.05 }}
            className="font-display text-[clamp(2.75rem,9vw,5.75rem)] font-semibold leading-[0.95] tracking-tight"
          >
            Anand Raj
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.14 }}
            className="mt-5 font-mono text-sm text-accent sm:text-base"
          >
            {site.title}
          </m.p>

          <m.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.22 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            {site.tagline}
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {site.location}
            </span>
            <a href={`mailto:${site.email}`} className="link-underline hover:text-text">
              {site.email}
            </a>
          </m.div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent md:inline-flex"
      >
        Scroll
        <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
