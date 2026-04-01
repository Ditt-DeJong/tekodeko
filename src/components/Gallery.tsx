"use client";
import React from 'react';
import Image from 'next/image';

const GALLERY_IMAGES = [
  { src: "/images/gallery-gambar-1.png", alt: "Tekodeko Exterior", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/gallery-gambar-2.png", alt: "Vintage Interior", span: "" },
  { src: "/images/gallery-gambar-3.png", alt: "Specialty Coffee", span: "" },
  { src: "/images/gallery-gambar-4.png", alt: "Cozy Corner", span: "md:col-span-2" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-32">
      <div className="container">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-6">
            Visual Journey
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">
            Sudut <span className="italic">Favorit.</span>
          </h1>
          <div className="w-12 h-px bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6" style={{ gridAutoRows: '300px' }}>
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden group vintage-frame p-0 ${img.span} reveal-up active`}
              style={{ transitionDelay: `${idx * 150}ms` }}
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
