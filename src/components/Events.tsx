"use client";
import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const EVENT_ITEMS = [
  "Intimate Weddings & Preweddings",
  "Corporate Meetings & Gathering",
  "Art Workshops & Music Nights",
];

export default function Events() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="events"
      ref={sectionRef}
      className="bg-[#1A1512] text-text-light py-32 overflow-hidden relative"
    >
      {/* Decorative Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Gambar — zoom masuk dari kiri */}
          <div
            className="order-2 lg:order-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0) scale(1)" : "translateX(-80px) scale(0.92)",
              transition: "opacity 1s ease 0.1s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          >
            <div className="vintage-frame border-white/10 p-0 overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/layer3.png"
                  alt="Private Events at Tero"
                  fill
                  className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 scale-105"
                />
              </div>
            </div>
          </div>

          {/* Teks — slide dari kanan */}
          <div className="order-1 lg:order-2 flex flex-col items-start">
            <h2
              className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            >
              Host Your Moments
            </h2>

            <h1
              className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-white italic"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                transition: "opacity 0.7s ease 0.32s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.32s",
              }}
            >
              Abadikan <br /> Kenangan Anda.
            </h1>

            <p
              className="text-text-light/60 font-light leading-relaxed mb-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(60px)",
                transition: "opacity 0.7s ease 0.44s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.44s",
              }}
            >
              Dari intimate wedding hingga workshop kreatif, Tekodeko Koffiehuis menyediakan ruang yang inspiratif dengan sentuhan arsitektur kolonial yang autentik.
            </p>

            {/* List items — slide satu per satu dari kanan */}
            <ul className="space-y-4 text-xs tracking-widest uppercase font-bold text-accent mb-12">
              {EVENT_ITEMS.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(80px)",
                    transition: `opacity 0.6s ease ${0.55 + i * 0.15}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.55 + i * 0.15}s`,
                  }}
                >
                  <span
                    className="bg-accent h-px"
                    style={{
                      width: isVisible ? "24px" : "0px",
                      transition: `width 0.4s ease ${0.7 + i * 0.15}s`,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="flex flex-wrap gap-6 mt-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 1s, transform 0.6s ease 1s",
              }}
            >
              <a
                href="#contact"
                className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-black"
              >
                Inquire About Booking
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
