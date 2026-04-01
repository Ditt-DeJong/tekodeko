"use client";
import React, { useState, useEffect } from 'react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
       <div className="flex flex-col gap-4">
          <a 
            href="https://wa.me/6282324213885" 
            target="_blank" 
            className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-accent group transition-all duration-500 scale-100 hover:scale-110"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
             <span className="absolute right-full mr-4 bg-primary text-white text-[9px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Reservasi Sekarang
             </span>
          </a>
          
          <a 
            href="https://gofood.link/a/tekodeko" 
            target="_blank" 
            className="w-14 h-14 bg-accent text-primary rounded-full flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white group transition-all duration-500 scale-100 hover:scale-110"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
             <span className="absolute right-full mr-4 bg-accent text-primary text-[9px] uppercase tracking-widest px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Pesan via GoFood
             </span>
          </a>
       </div>
    </div>
  );
}
