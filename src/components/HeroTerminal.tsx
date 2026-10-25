"use client";

import { useEffect, useState } from "react";

// Menggambarkan tiga langkah order. Dekoratif, bukan klaim fitur.
const SCRIPT = [
  "$ pedang --topup",
  "> pilih_game()  // MLBB, PUBG, Fortnite, Minecraft",
  "> isi_id()      // cek User ID dan Zone ID",
  "> bayar()       // selesaikan di toko",
  "> selesai",
];

function renderLine(line: string) {
  const index = line.indexOf("//");
  if (index === -1) return line;
  return (
    <>
      {line.slice(0, index)}
      <span className="text-steel/60">{line.slice(index)}</span>
    </>
  );
}

/** Jendela terminal dengan animasi mengetik. Statis penuh bila pengguna memilih reduced motion. */
export default function HeroTerminal() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLines(SCRIPT);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    let lineIndex = 0;
    let charIndex = 0;

    const step = () => {
      if (cancelled) return;

      if (lineIndex >= SCRIPT.length) {
        timer = setTimeout(() => {
          lineIndex = 0;
          charIndex = 0;
          setLines([]);
          step();
        }, 3500);
        return;
      }

      const current = lineIndex;
      const text = SCRIPT[current].slice(0, ++charIndex);
      setLines((previous) => {
        const next = previous.slice(0, current);
        next[current] = text;
        return next;
      });

      if (charIndex >= SCRIPT[current].length) {
        lineIndex++;
        charIndex = 0;
        timer = setTimeout(step, 450);
      } else {
        timer = setTimeout(step, 26);
      }
    };

    timer = setTimeout(step, 400);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="border border-line bg-ink/80 font-mono text-sm shadow-[0_0_48px_-16px_var(--accent-glow)]"
    >
      <div className="border-b border-line px-4 py-2.5 text-xs text-steel">pedang@topup:~</div>
      <div className="min-h-[11rem] px-4 py-4 leading-7">
        {lines.map((line, index) => (
          <div key={index} className={line.startsWith("$") ? "text-fg" : "text-accent"}>
            {renderLine(line)}
            {index === lines.length - 1 && <span className="cursor-blink text-accent">▍</span>}
          </div>
        ))}
        {lines.length === 0 && <span className="cursor-blink text-accent">▍</span>}
      </div>
    </div>
  );
}
