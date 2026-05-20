"use client";

import { useEffect, useState } from "react";

// Setiap huruf punya arah datang yang berbeda-beda
const TORE = [
  { char: "T", from: { x: -120, y: -80, rotate: -45 } },
  { char: "O", from: { x: 0, y: -150, rotate: 20 } },
  { char: "R", from: { x: 120, y: -60, rotate: 35 } },
  { char: "E", from: { x: -80, y: 100, rotate: -30 } },
];

const COFFEE = [
  { char: "C", from: { x: 100, y: 120, rotate: 40 } },
  { char: "O", from: { x: -130, y: 60, rotate: -25 } },
  { char: "F", from: { x: 0, y: 160, rotate: -50 } },
  { char: "F", from: { x: 140, y: -100, rotate: 30 } },
  { char: "E", from: { x: -100, y: -130, rotate: 55 } },
  { char: "E", from: { x: 60, y: 140, rotate: -20 } },
];

interface LetterProps {
  char: string;
  from: { x: number; y: number; rotate: number };
  delay: number;
  active: boolean;
}

function Letter({ char, from, delay, active }: LetterProps) {
  return (
    <span
      className="inline-block"
      style={{
        transform: active
          ? "translate(0, 0) rotate(0deg)"
          : `translate(${from.x}px, ${from.y}px) rotate(${from.rotate}deg)`,
        opacity: active ? 1 : 0,
        transition: active
          ? `transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.6s ease ${delay}ms`
          : "none",
      }}
    >
      {char}
    </span>
  );
}

export default function LoadingScreen() {
  const [active, setActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Mulai animasi huruf masuk setelah sedikit delay
    const t1 = setTimeout(() => setActive(true), 100);

    // Mulai fade out keseluruhan loading screen
    const t2 = setTimeout(() => setFadeOut(true), 2200);

    // Hapus loading screen dari DOM
    const t3 = setTimeout(() => setDone(true), 2900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        backgroundColor: "#1A1512",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 70% 60%, #8B4513 0%, transparent 50%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-2 select-none">
        {/* Garis dekoratif atas */}
        <div
          className="w-16 h-px mb-4"
          style={{
            backgroundColor: "#D4AF37",
            opacity: active ? 0.6 : 0,
            transform: active ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.6s ease 800ms, opacity 0.6s ease 800ms",
            transformOrigin: "center",
          }}
        />

        {/* Kata TORE */}
        <div
          className="flex gap-1 md:gap-2"
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "clamp(3rem, 10vw, 6rem)",
            fontWeight: 600,
            color: "#F5E6D3",
            letterSpacing: "0.15em",
          }}
        >
          {TORE.map((item, i) => (
            <Letter
              key={i}
              char={item.char}
              from={item.from}
              delay={i * 80}
              active={active}
            />
          ))}
        </div>

        {/* Kata COFFEE */}
        <div
          className="flex gap-1 md:gap-2"
          style={{
            fontFamily: "'Lora', serif",
            fontSize: "clamp(1.2rem, 4vw, 2.2rem)",
            fontWeight: 400,
            color: "#D4AF37",
            letterSpacing: "0.5em",
          }}
        >
          {COFFEE.map((item, i) => (
            <Letter
              key={i}
              char={item.char}
              from={item.from}
              delay={200 + i * 80}
              active={active}
            />
          ))}
        </div>

        {/* Garis dekoratif bawah */}
        <div
          className="w-16 h-px mt-4"
          style={{
            backgroundColor: "#D4AF37",
            opacity: active ? 0.6 : 0,
            transform: active ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.6s ease 900ms, opacity 0.6s ease 900ms",
            transformOrigin: "center",
          }}
        />

        {/* Tagline kecil */}
        <p
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.4em",
            color: "#6B5E51",
            textTransform: "uppercase",
            marginTop: "0.5rem",
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.6s ease 1000ms, transform 0.6s ease 1000ms",
          }}
        >
          Est. 2024
        </p>
      </div>
    </div>
  );
}
