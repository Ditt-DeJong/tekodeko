"use client";
import React from 'react';
import Image from 'next/image';

export default function Events() {
  return (
    <section id="events" className="bg-[#1A1512] text-text-light py-32 overflow-hidden relative">
      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
           <div className="order-2 lg:order-1">
              <div className="vintage-frame border-white/10 p-0 overflow-hidden reveal-up active">
                 <div className="aspect-[4/3] relative">
                    <Image 
                      src="/images/event-gambar-1.png" 
                      alt="Private Events at Tero" 
                      fill
                      className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 scale-105"
                    />
                 </div>
              </div>
           </div>

           <div className="order-1 lg:order-2 flex flex-col items-start">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-8">
                Host Your Moments
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif mb-10 leading-tight text-white italic">
                Abadikan <br /> Kenangan Anda.
              </h1>
              
              <div className="space-y-8 text-text-light/60 font-light leading-relaxed mb-12">
                 <p>
                    Dari intimate wedding hingga workshop kreatif, Tekodeko Koffiehuis menyediakan ruang yang inspiratif dengan sentuhan arsitektur kolonial yang autentik.
                 </p>
                 <ul className="space-y-4 text-xs tracking-widest uppercase font-bold text-accent">
                    <li className="flex items-center gap-3">
                       <span className="w-6 h-px bg-accent"></span>
                       Intimate Weddings & Preweddings
                    </li>
                    <li className="flex items-center gap-3">
                       <span className="w-6 h-px bg-accent"></span>
                       Corporate Meetings & Gathering
                    </li>
                    <li className="flex items-center gap-3">
                       <span className="w-6 h-px bg-accent"></span>
                       Art Workshops & Music Nights
                    </li>
                 </ul>
              </div>

              <div className="flex flex-wrap gap-6 mt-6">
                 <a href="#contact" className="btn btn-outline border-white/20 text-white hover:bg-white hover:text-black">
                    Inquire About Booking
                 </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
