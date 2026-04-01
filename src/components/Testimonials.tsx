"use client";
import React from 'react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: "Andini Putri",
    role: "Local Explorer",
    content: "Salah satu tempat terbaik di Kota Lama. Kopinya (Gula Asem) unik banget dan suasananya bener-bener bawa kita balik ke masa lalu. Sangat estetik!",
    avatar: "/images/testimonial-user-1.png"
  },
  {
    name: "Rizky Wijaya",
    role: "Architect",
    content: "Restorasi bangunannya luar biasa. Detail kolonialnya masih terjaga baik. Tempat yang sangat nyaman untuk kerja atau sekadar kontemplasi sambil ngopi.",
    avatar: "/images/testimonial-user-2.png"
  },
  {
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    content: "The best manual brew in Semarang. I love how they preserve the heritage while serving top-notch coffee quality. A must visit for everyone!",
    avatar: "/images/testimonial-user-3.png"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#FAF9F6] py-32 overflow-hidden">
      <div className="container">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-6">
            Guest Experiences
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">
            Kata <span className="italic">Mereka.</span>
          </h1>
          <div className="w-12 h-px bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-12 border border-primary/5 hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl group"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-muted italic leading-relaxed mb-10 font-serif">
                &quot;{item.content}&quot;
              </p>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/5 border border-primary/10">
                    {/* Placeholder for avatar */}
                    <div className="w-full h-full flex items-center justify-center text-primary font-bold text-xs uppercase">
                      {item.name.charAt(0)}
                    </div>
                 </div>
                 <div>
                    <h5 className="font-bold text-sm text-primary uppercase tracking-widest">{item.name}</h5>
                    <p className="text-[10px] text-accent font-outfit uppercase tracking-wider mt-1">{item.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
