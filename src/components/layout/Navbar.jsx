import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { navLinks } from '../../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Cpu className="text-primary w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            AppsCare<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary relative ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-primary transition-colors shadow-lg shadow-slate-900/20">
            Get Started
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}