"use client";
import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const INSTA_IMAGES = [
  "/images/kopi1.png",
  "/images/kopi2.png",
  "/images/kopi3.png",
  "/images/kopi4.png",
  "/images/kopi5.png",
  "/images/kopi6.png",
];

// Ripple dari tengah: urutan jarak dari pusat grid (index 2 & 3 paling tengah)
const RIPPLE_ORDER = [2, 3, 1, 4, 0, 5];

export default function Instagram() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="social" className="bg-white py-32 border-t border-primary/5">
      <div className="container">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24"
        >
          <div
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(40px)",
              transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-6">
              Connect With Us
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">
              Ikuti <span className="italic">Lini Masa.</span>
            </h1>
            <div
              className="w-12 h-px bg-accent"
              style={{
                transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.6s ease 0.4s",
                transformOrigin: "left",
              }}
            />
          </div>

          <div
            className="mt-10 md:mt-0"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
            }}
          >
            <a
              href="https://instagram.com/torees"
              target="_blank"
              className="btn btn-primary inline-flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Follow @torees
            </a>
          </div>
        </div>

        {/* Grid — ripple dari tengah */}
        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {INSTA_IMAGES.map((src, i) => {
            const rippleDelay = RIPPLE_ORDER.indexOf(i) * 0.1;
            return (
              <div
                key={i}
                className="aspect-square relative group overflow-hidden bg-primary/5 cursor-pointer"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? "scale(1)" : "scale(0.7)",
                  transition: `opacity 0.5s ease ${rippleDelay}s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${rippleDelay}s`,
                }}
              >
                <Image
                  src={src}
                  alt={`Instagram Post ${i + 1}`}
                  fill
                  className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 border border-white flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
