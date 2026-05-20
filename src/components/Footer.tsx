"use client";
import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const COLUMNS = [
  { delay: 0 },
  { delay: 0.1 },
  { delay: 0.2 },
  { delay: 0.3 },
];

export default function Footer() {
  const { ref: footerRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <footer id="contact" ref={footerRef} className="bg-bg-dark text-text-light py-6 overflow-hidden relative">
      <div className="container relative z-10 pt-12">
        <div className="grid md:grid-cols-12 gap-16 mb-24">

          {/* Col 1 — Brand */}
          <div
            className="md:col-span-5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              transition: `opacity 0.7s ease ${COLUMNS[0].delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${COLUMNS[0].delay}s`,
            }}
          >
            <div className="flex items-center gap-3 mb-10 group">
              <div className="w-10 h-10 border border-text-light/20 flex items-center justify-center rounded-full transition-all group-hover:bg-accent group-hover:text-primary">
                <span className="font-bold text-xl font-serif">T</span>
              </div>
              <span className="text-xl font-bold tracking-[0.2em] text-white font-serif uppercase">Tore Coffee</span>
            </div>
            <p className="text-sm opacity-50 leading-loose max-w-sm font-light mb-10">
              Mendedikasikan diri untuk melestarikan rasa dan sejarah melalui seduhan kopi yang tulus di kawasan Kota Lama Semarang.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Hours */}
          <div
            className="md:col-span-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              transition: `opacity 0.7s ease ${COLUMNS[1].delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${COLUMNS[1].delay}s`,
            }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent mb-10 font-bold">Hours</h4>
            <div className="text-sm opacity-60 space-y-6 font-light">
              <div>
                <span className="block opacity-40 text-[9px] uppercase tracking-widest mb-1">Mon - Thu</span>
                <span className="font-medium text-white">09:00 - 22:00</span>
              </div>
              <div>
                <span className="block opacity-40 text-[9px] uppercase tracking-widest mb-1">Fri - Sun</span>
                <span className="font-medium text-white">09:00 - 23:00</span>
              </div>
            </div>
          </div>

          {/* Col 3 — Location */}
          <div
            className="md:col-span-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              transition: `opacity 0.7s ease ${COLUMNS[2].delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${COLUMNS[2].delay}s`,
            }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent mb-10 font-bold">Location</h4>
            <p className="text-sm opacity-60 mb-8 font-light leading-loose">
              Jl. Pisang Goreng No.34, Purwanata,<br />
              Kec. Semarang Tenggara,<br />
              Kota Semarang, Jawa Tengah 50137
            </p>
            <a
              href="https://goo.gl/NVG5r7xHdmt8mT1s7"
              target="_blank"
              className="text-accent text-[10px] font-bold underline underline-offset-8 uppercase tracking-[0.2em] hover:text-white transition-all"
            >
              Get Directions
            </a>
          </div>

          {/* Col 4 — Inquiries */}
          <div
            className="md:col-span-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              transition: `opacity 0.7s ease ${COLUMNS[3].delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${COLUMNS[3].delay}s`,
            }}
          >
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent mb-10 font-bold">Inquiries</h4>
            <div className="space-y-8">
              <div>
                <p className="text-[9px] opacity-40 uppercase tracking-widest mb-1">WhatsApp</p>
                <a href="https://wa.me/6282324213885" target="_blank" className="text-lg font-serif italic hover:text-accent transition-all text-white">
                  0858 7559 5727
                </a>
              </div>
              <div>
                <p className="text-[9px] opacity-40 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:hello@teroos.com" className="text-sm font-medium hover:text-accent transition-all text-white">
                  hello@coffee.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] opacity-30"
          style={{
            opacity: isVisible ? 0.3 : 0,
            transition: "opacity 0.8s ease 0.5s",
          }}
        >
          <p>&copy; 2024 Tore. All Rights Reserved.</p>
          <div className="flex gap-10 mt-6 md:mt-0 font-bold">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
