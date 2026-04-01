"use client";
import React from 'react';
import Image from 'next/image';

const INSTA_IMAGES = [
  "/images/instagram-gambar-1.png",
  "/images/instagram-gambar-2.png",
  "/images/instagram-gambar-3.png",
  "/images/instagram-gambar-4.png",
  "/images/instagram-gambar-5.png",
  "/images/instagram-gambar-6.png",
];

export default function Instagram() {
  return (
    <section id="social" className="bg-white py-32 border-t border-primary/5">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
           <div>
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-6">
                Connect With Us
              </h2>
              <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">
                Ikuti <span className="italic">Lini Masa.</span>
              </h1>
              <div className="w-12 h-px bg-accent"></div>
           </div>
           <div className="mt-10 md:mt-0">
              <a href="https://instagram.com/torees" target="_blank" className="btn btn-primary inline-flex items-center gap-3">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                 Follow @torees
              </a>
           </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
           {INSTA_IMAGES.map((src, i) => (
             <div key={i} className="aspect-square relative group overflow-hidden bg-primary/5 cursor-pointer reveal-up active" style={{ transitionDelay: `${i * 100}ms` }}>
                <Image 
                  src={src} 
                  alt={`Instagram Post ${i + 1}`} 
                  fill
                  className="object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="w-10 h-10 border border-white flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
