"use client";

import { useEffect, useRef } from "react";

const CHARS = "01{}[]<>/\\;:=+-*#$%&";
const FONT_SIZE = 16;
const FPS = 18;
// Warna latar hero (--panel). Jaga tetap sinkron dengan globals.css agar jejak huruf memudar mulus.
const PANEL_RGB = "13, 16, 13";

/**
 * Hujan kode dekoratif (canvas). Ringan dan sopan:
 * - nonaktif jika pengguna memilih reduced motion,
 * - berhenti saat tidak terlihat di layar atau tab disembunyikan,
 * - dibatasi ~18 fps dan DPR maksimal 1.5.
 * Murni dekoratif: aria-hidden, tidak membawa teks apa pun.
 */
export default function CodeRain({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const frameTime = 1000 / FPS;
    let width = 0;
    let height = 0;
    let drops: number[] = [];
    let raf = 0;
    let last = 0;
    let running = false;
    let inView = true;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgb(${PANEL_RGB})`;
      ctx.fillRect(0, 0, width, height);
      drops = Array.from({ length: Math.ceil(width / FONT_SIZE) }, () => Math.random() * -40);
    };

    const draw = () => {
      ctx.fillStyle = `rgba(${PANEL_RGB}, 0.14)`;
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${FONT_SIZE}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * FONT_SIZE;
        ctx.fillStyle = Math.random() > 0.97 ? "rgba(214, 255, 206, 0.95)" : "rgba(68, 214, 44, 0.85)";
        ctx.fillText(char, i * FONT_SIZE, y);
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    const tick = (time: number) => {
      raf = requestAnimationFrame(tick);
      if (time - last < frameTime) return;
      last = time;
      draw();
    };

    const start = () => {
      if (running || !inView || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    start();

    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      if (inView) start();
      else stop();
    });
    observer.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    // Hanya reset saat lebar berubah (hindari kedipan akibat address bar ponsel).
    const onResize = () => {
      if (canvas.getBoundingClientRect().width !== width) resize();
    };

    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
