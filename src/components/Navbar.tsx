"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 glass-nav ${isScrolled ? 'scrolled' : 'py-6'}`}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-9 h-9 border border-primary flex items-center justify-center rounded-full group-hover:bg-primary transition-all duration-500">
             <span className="text-primary group-hover:text-white font-bold text-lg font-serif">T</span>
          </div>
          <span className="text-lg font-bold tracking-widest text-primary font-serif uppercase">Tore Coffee</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">
          <a href="#hero" className="hover:text-primary transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#about" className="hover:text-primary transition-colors relative group">
            Heritage
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#menu" className="hover:text-primary transition-colors relative group">
            Menu
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#contact" className="hover:text-primary transition-colors relative group">
            Visit
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:block btn btn-outline py-2 px-6 text-xs">Reservasi</a>
          <button className="md:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
