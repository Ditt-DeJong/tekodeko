"use client";
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 glass-nav ${isScrolled || isOpen ? 'scrolled bg-[rgba(255,252,249,0.95)]' : 'py-8'}`}>
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
            <button onClick={toggleMenu} className="md:hidden text-primary focus:outline-none z-50" aria-label="Toggle menu">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[rgba(253,252,249,0.98)] backdrop-blur-md transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-8 text-lg font-serif text-primary uppercase tracking-[0.2em] font-medium">
          <a href="#hero" onClick={closeMenu} className="hover:text-accent transition-colors py-2">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-accent transition-colors py-2">Heritage</a>
          <a href="#menu" onClick={closeMenu} className="hover:text-accent transition-colors py-2">Menu</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-accent transition-colors py-2">Visit</a>
          <a href="#contact" onClick={closeMenu} className="btn btn-outline mt-6 py-3 px-8 text-[10px]">Reservasi</a>
        </div>
      </div>
    </>
  );
}
