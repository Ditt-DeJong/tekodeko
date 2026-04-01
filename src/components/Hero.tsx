"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-vintage">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 translate-x-1/4 rounded-full blur-[120px]"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className={`md:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent"></span>
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit">
                Est. 2015 • Kota Lama Semarang
              </h2>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-8 text-primary">
              Where History <br /> 
              <span className="italic text-accent ml-4">Meets Coffee.</span>
            </h1>
            
            <p className="text-lg text-text-muted mb-10 max-w-xl leading-relaxed font-light">
              Nikmati harmoni sempurna antara citarasa kopi otentik dan kemegahan arsitektur kolonial. Tekodeko Koffiehuis menyajikan pengalaman yang tak terlupakan di setiap cangkirnya.
            </p>
            
            <div className="flex flex-wrap gap-6">
               <a href="#menu" className="btn btn-primary">Discover Menu</a>
               <a href="#about" className="btn btn-outline">Our Heritage</a>
            </div>

            <div className="mt-16 flex items-center gap-8 opacity-40 grayscale">
              <div className="text-[10px] uppercase tracking-widest font-bold">Featured On</div>
              <div className="flex gap-6 items-center">
                 <span className="font-serif italic text-sm">Traveler Weekly</span>
                 <span className="text-xs">Coffee Culture</span>
                 <span className="font-serif text-sm">Semarang Heritage</span>
              </div>
            </div>
          </div>

          <div className={`md:col-span-5 relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="vintage-frame">
              <div className="img-reveal aspect-4/5 bg-primary/5">
                <Image 
                  src="/images/hero-gambar-1.png" 
                  alt="Tekodeko Heritage Building" 
                  width={800} 
                  height={1000} 
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 text-white shadow-2xl hidden md:block">
                <p className="font-serif italic text-lg leading-snug mb-2">
                  "A timeless escape in the heart of Semarang."
                </p>
                <div className="w-12 h-px bg-accent mb-4"></div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">The Journal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
