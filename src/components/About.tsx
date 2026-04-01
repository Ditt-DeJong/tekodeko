"use client";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white overflow-hidden py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="vintage-frame p-0 overflow-hidden">
               <div className="img-reveal aspect-3/4">
                  <Image 
                    src="/images/about-gambar-1.png" 
                    alt="Interior Tekodeko Vintage" 
                    width={1000}
                    height={1200}
                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0"
                  />
               </div>
            </div>
            {/* Decorative Label */}
            <div className="absolute top-12 -right-12 bg-white px-10 py-6 border border-primary/10 shadow-xl hidden md:block">
               <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">Heritage Interior</span>
            </div>
          </div>

          <div className="flex flex-col">
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
                Terletak di sebuah gedung peninggalan era kolonial di Jl. Kepodang, Tekodeko Koffiehuis dirancang dengan hati untuk mempertahankan karakter asli bangunan aslinya.
              </p>
              
              <p>
                Lantai yang berderit, balok kayu yang kokoh, dan aroma kopi yang memenuhi ruangan &mdash; semuanya menyambut Anda di rumah kedua Anda di Kota Lama.
              </p>
            </div>

            <div className="mt-16 pt-12 border-t border-primary/5 flex items-center gap-10">
               <div>
                  <div className="text-2xl font-serif text-primary">1920s</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-50 mt-1">Building Era</div>
               </div>
               <div className="w-px h-10 bg-primary/10"></div>
               <div>
                  <div className="text-2xl font-serif text-primary">2015</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-50 mt-1">First Pour</div>
               </div>
               <div className="w-px h-10 bg-primary/10"></div>
               <div>
                  <div className="text-2xl font-serif text-primary">Kota Lama</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-50 mt-1">Location</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
