import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo.png';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Top Section: Newsletter CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-slate-200 mb-16">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Join our innovation newsletter</h3>
            <p className="text-slate-600">Get the latest insights on API architecture, IT consulting, and tech trends.</p>
          </div>
          <div className="w-full md:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-white text-slate-700 shadow-sm"
            />
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-sky-400 transition-colors flex items-center justify-center gap-2 group shadow-sm shrink-0">
              Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

          {/* Brand Column (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 group">
              <img
                src={logo}
                alt="AppsCare Technologies Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.05))' }}
              />
            </Link>
            <p className="text-slate-600 mb-8 leading-relaxed pr-4">
              Empowering forward-thinking businesses with intelligent frameworks, modern web architectures, and scalable IT consulting solutions.
            </p>
            <div className="flex gap-3">
              {/* Custom SVG for Twitter/X */}
              <a href="#" className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              {/* Custom SVG for LinkedIn */}
              <a href="#" className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              {/* Custom SVG for GitHub */}
              <a href="#" className="p-2.5 bg-white border border-slate-200 rounded-lg text-slate-400 hover:text-primary hover:border-primary hover:shadow-md transition-all">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
            </div>
          </div>

          {/* Company Links (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/framework" className="text-slate-600 hover:text-primary transition-colors font-medium">Our Framework</Link></li>
              <li><Link to="/careers" className="text-slate-600 hover:text-primary transition-colors font-medium">Careers</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-primary transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Solutions Links (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Solutions</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="#" className="text-slate-600 hover:text-primary transition-colors font-medium">API Architecture</Link></li>
              <li><Link to="#" className="text-slate-600 hover:text-primary transition-colors font-medium">IT Consulting</Link></li>
              <li><Link to="#" className="text-slate-600 hover:text-primary transition-colors font-medium">Business Process</Link></li>
              <li><Link to="#" className="text-slate-600 hover:text-primary transition-colors font-medium">Cloud Integrations</Link></li>
            </ul>
          </div>

          {/* Contact Details (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Get in Touch</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-slate-600 font-medium leading-relaxed">AppsCare Technologies, 27H No:27-77,Plot no 77/p.<br />Shiva sai nagar Bairagiguda,Hydershakota HYDERABAD, TELANGANA 500091, India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-600 font-medium">+91 9966727754</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-600 font-medium">info@appscaretech.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {currentYear} AppsCare Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">Privacy Policy</Link>
            <Link to="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">Terms of Service</Link>
            <Link to="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-medium">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}