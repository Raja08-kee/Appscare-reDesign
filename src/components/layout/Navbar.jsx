import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/10' : 'py-6 bg-transparent'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-sky-500/20">
            <Cpu className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black text-white tracking-tighter uppercase">
            App<span className="text-sky-500">Scare</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Portfolio', 'About', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-white text-xs font-black rounded-full shadow-lg shadow-sky-500/30 transition-all uppercase tracking-widest">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}