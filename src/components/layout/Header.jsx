import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, ChevronDown, Code2, Shield, Cloud, Settings, Network, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';
const services = [
  { name: 'API Integration', path: '/service/api-integration', icon: Code2, desc: 'Connect software ecosystems seamlessly.' },
  { name: 'Managed IT', path: '/service/managed-it', icon: Settings, desc: '24/7 proactive infrastructure support.' },
  { name: 'Cloud Infrastructure', path: '/service/cloud-infrastructure', icon: Cloud, desc: 'Secure and scalable global cloud ops.' },
  { name: 'Cybersecurity', path: '/service/cybersecurity', icon: Shield, desc: 'Advanced threat protection & recovery.' },
  { name: 'IT Consulting', path: '/service/it-consulting', icon: Network, desc: 'Strategic tech roadmap development.' },
];

const navLinks = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT APPSCARE', path: '/about' },
  { name: 'OUR SERVICES', path: '/services', hasDropdown: true },
  { name: 'FRAMEWORK', path: '/framework' },
  { name: 'CONTACT US', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setMobileSubmenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-white py-5'
      }`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-7xl">

        {/* Brand Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="AppsCare Technologies"
            className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${scrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'
              }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
            >
              <Link
                to={link.path}
                className={`flex items-center gap-1 text-[11px] font-bold tracking-widest transition-colors hover:text-primary py-2 ${location.pathname.includes(link.path) && link.path !== '/' ? 'text-primary' : 'text-slate-600'
                  }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Desktop Dropdown Picklist */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-white border border-slate-100 shadow-2xl rounded-xl mt-1 overflow-hidden"
                    >
                      <div className="p-2">
                        {services.map((svc) => (
                          <Link
                            key={svc.name}
                            to={svc.path}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-8 h-8 rounded-md bg-sky-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                              <svc.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">{svc.name}</div>
                              <div className="text-[10px] text-slate-500 leading-none mt-1">{svc.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* "What We Do" Button */}
                      <Link
                        to="/services"
                        className="flex items-center justify-center gap-2 py-3 bg-slate-50 border-t border-slate-100 text-[10px] font-bold text-primary hover:bg-primary hover:text-white transition-all uppercase tracking-widest"
                      >
                        What We Do <ArrowRight className="w-3 h-3" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="py-6 px-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      className="text-xs font-bold text-slate-700 tracking-wider"
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <button
                        onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                        className="p-2 bg-slate-50 rounded-md border border-slate-100"
                      >
                        <ChevronRight className={`w-4 h-4 text-primary transition-transform ${mobileSubmenuOpen ? 'rotate-90' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu Accordion */}
                  {link.hasDropdown && mobileSubmenuOpen && (
                    <div className="mt-4 ml-4 flex flex-col gap-3 border-l-2 border-sky-100 pl-4">
                      {services.map((svc) => (
                        <Link key={svc.name} to={svc.path} className="text-[11px] font-medium text-slate-500 hover:text-primary">
                          {svc.name}
                        </Link>
                      ))}
                      <Link to="/services" className="text-[11px] font-bold text-primary flex items-center gap-2 mt-2">
                        WHAT WE DO <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}