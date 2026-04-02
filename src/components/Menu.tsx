"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const MENU_CATEGORIES = ["Signature", "Traditional", "Main Course", "Light Bites"];

const MENU_ITEMS = [
  {
    name: "Kopi Gula Asem",
    category: "Signature",
    price: "32K",
    desc: "Perpaduan rasa kopi khas Semarang dengan segarnya asam jawa asli."
  },
  {
    name: "Java Coffee",
    category: "Signature",
    price: "30K",
    desc: "Kopi murni biji pilihan dari perkebunan terbaik di Jawa Tengah."
  },
  {
    name: "Teh Wangi",
    category: "Traditional",
    price: "28K",
    desc: "Disajikan dalam teko keramik klasik, aroma yang menenangkan."
  },
  {
    name: "Nasi Campur Toreore",
    category: "Main Course",
    price: "45K",
    desc: "Nasi hangat dengan lauk pauk khas rumahan yang menggugah selera."
  },
  {
    name: "Singkong Keju Goreng",
    category: "Light Bites",
    price: "25K",
    desc: "Empuk di dalam, renyah di luar dengan taburan keju melimpah."
  },
  {
    name: "Roti Bakar Kepodang",
    category: "Light Bites",
    price: "25K",
    desc: "Roti tebal dengan olesan selai srikaya buatan sendiri."
  }
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("Signature");

  return (
    <section id="menu" className="bg-bg-vintage relative">
      {/* Subtle Texture/Pattern could go here */}
      <div className="container">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold font-outfit mb-6">
            The Selection
          </h2>
          <h1 className="text-4xl md:text-6xl font-serif mb-8 text-primary">
            Menu <span className="italic">Unggulan.</span>
          </h1>
          <div className="w-12 h-px bg-accent mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mb-20 border-b border-primary/5 pb-8">
          {MENU_CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all relative py-2 ${
                activeTab === cat ? 'text-primary' : 'text-primary/30 hover:text-primary/60'
              }`}
            >
              {cat}
              {activeTab === cat && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent animate-in fade-in transition-all"></span>
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-20 items-start">
           <div className="lg:col-span-2 grid md:grid-cols-2 gap-x-20 gap-y-12">
              {MENU_ITEMS.filter(item => item.category === activeTab).map((item, idx) => (
                <div key={idx} className="menu-item group cursor-default">
                  <div className="flex justify-between items-baseline mb-3">
                    <h4 className="text-xl font-serif text-primary group-hover:text-accent transition-colors duration-500">
                       {item.name}
                    </h4>
                    <div className="flex-1 mx-4 border-b border-dotted border-primary/10"></div>
                    <div className="price-tag text-lg">{item.price}</div>
                  </div>
                  <p className="text-sm text-text-muted font-light leading-relaxed max-w-[85%]">
                     {item.desc}
                  </p>
                </div>
              ))}
           </div>
           
           <div className="hidden lg:block">
              <div className="vintage-frame p-0 group overflow-hidden relative aspect-3/4">
                 <Image 
                   src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800"
                   alt="Featured Specialty"
                   fill
                   className="object-cover group-hover:scale-110 transition-all duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-linear-to-t from-primary/80 to-transparent"></div>
                 <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Editor's Pick</p>
                    <h3 className="text-2xl font-serif">Try our signature manual brew with local heritage beans.</h3>
                 </div>
              </div>
           </div>
        </div>

        <div className="mt-24 text-center">
            <a href="https://qr.io/r/aWKL3E" target="_blank" className="btn btn-outline border-primary/20 text-primary hover:bg-primary hover:text-white">
               View Full Collection
            </a>
        </div>
      </div>
    </section>
  );
}
