"use client";
import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="about" ref={sectionRef} className="bg-white overflow-hidden py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-24 items-center">

          {/* Gambar — slide dari kiri */}
          <div
            className="relative group"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-80px)",
              transition: "opacity 0.9s ease 0.1s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          >
            <div className="vintage-frame p-0 overflow-hidden">
              <div className="img-reveal aspect-3/4">
                <Image
                  src="/images/layer2.png"
                  alt="Interior Tero Vintage"
                  width={1000}
                  height={1200}
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            {/* Decorative Label */}
            <div
              className="absolute top-12 -right-12 bg-white px-10 py-6 border border-primary/10 shadow-xl hidden md:block"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
              }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Heritage Interior</span>
            </div>
          </div>

          {/* Teks — slide dari kanan */}
          <div
            className="flex flex-col"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(80px)",
              transition: "opacity 0.9s ease 0.25s, transform 0.9s cubic-bezier(0.16,1,0.3,1) 0.25s",
            }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-8">
              The Heritage Story
            </h2>

            <h1 className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-primary">
              Lebih dari Sekadar <br />
              <span className="italic">Cangkir Kopi.</span>
            </h1>

            <div className="space-y-8 text-text-muted leading-relaxed font-light">
              <p className="text-xl italic font-serif opacity-80 border-l-2 border-accent pl-8 py-2">
                &quot;Kami percaya setiap tegukan kopi bercerita tentang sejarah panjang Semarang. Kami hanya perantaranya.&quot;
              </p>
              <p>
                Terletak di sebuah gedung peninggalan era kolonial di Jl. Kepodang, Tero Coffee dirancang dengan hati untuk mempertahankan karakter asli bangunan aslinya.
              </p>
              <p>
                Lantai yang berderit, balok kayu yang kokoh, dan aroma kopi yang memenuhi ruangan &mdash; semuanya menyambut Anda di rumah kedua Anda di Kota Lama.
              </p>
            </div>

            {/* Stats — muncul satu per satu */}
            <div className="mt-16 pt-12 border-t border-primary/5 flex items-center gap-10">
              {[
                { value: "1920s", label: "Building Era" },
                { value: "2015", label: "First Pour" },
                { value: "Kota Lama", label: "Location" },
              ].map((stat, i) => (
                <React.Fragment key={i}>
                  {i > 0 && <div className="w-px h-10 bg-primary/10" />}
                  <div
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.6s ease ${0.5 + i * 0.15}s, transform 0.6s ease ${0.5 + i * 0.15}s`,
                    }}
                  >
                    <div className="text-2xl font-serif text-primary">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-widest opacity-50 mt-1">{stat.label}</div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
