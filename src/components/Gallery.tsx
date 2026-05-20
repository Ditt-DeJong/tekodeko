"use client";
import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const GALLERY_IMAGES = [
  { src: "/images/sudut1.png", alt: "Tore Exterior", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/sudut2.png", alt: "Vintage Interior", span: "" },
  { src: "/images/sudut4.png", alt: "Specialty Coffee", span: "" },
  { src: "/images/sudut3.png", alt: "Cozy Corner", span: "md:col-span-2" },
];

export default function Gallery() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="gallery" className="bg-white py-32">
      <div className="container">

        {/* Header — fade + slide down */}
        <div
          ref={headerRef}
          className="text-center mb-24"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(-40px)",
            transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-6">
            Visual Journey
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">
            Sudut <span className="italic">Favorit.</span>
          </h1>
          <div
            className="w-12 h-px bg-accent mx-auto"
            style={{
              transform: headerVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.6s ease 0.4s",
              transformOrigin: "center",
            }}
          />
        </div>

        {/* Grid — tiap gambar jatuh dari atas dengan stagger */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          style={{ gridAutoRows: "300px" }}
        >
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group vintage-frame p-0 ${img.span}`}
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0) scale(1)" : "translateY(-60px) scale(0.95)",
                transition: `opacity 0.7s ease ${idx * 0.12}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${idx * 0.12}s`,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <div className="text-white text-[10px] uppercase tracking-[0.3em] font-bold border-b border-white pb-2 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
