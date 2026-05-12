import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import logo from '../../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // --- Newsletter Logic ---
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // 1. Client-side Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    try {
      // IMPORTANT: Ensure this URL matches your actual live domain path
      const response = await fetch('https://appscaretech.com/api/subscribe.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail(''); // Clear input on success
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Cannot connect to server. Please check your internet.');
    }
  };

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* Top Section: Newsletter CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-16 border-b border-slate-200 mb-16">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Join our innovation newsletter</h3>
            <p className="text-slate-600">Get the latest insights on API architecture, IT consulting, and tech trends.</p>
          </div>

          <div className="w-full md:w-auto flex-1 max-w-md">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-white text-slate-700 shadow-sm disabled:bg-slate-100 disabled:cursor-not-allowed"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-sky-400 transition-colors flex items-center justify-center gap-2 group shadow-sm shrink-0 disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>Subscribe <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                <CheckCircle2 className="w-4 h-4" /> {message}
              </div>
            )}
            {status === 'error' && (
              <div className="mt-3 flex items-center gap-2 text-red-500 text-sm font-medium animate-in fade-in slide-in-from-top-1">
                <AlertCircle className="w-4 h-4" /> {message}
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6 group">
              <img src={logo} alt="AppsCare Technologies" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-slate-600 mb-8 leading-relaxed pr-4">
              Empowering forward-thinking businesses with intelligent frameworks, modern web architectures, and scalable IT consulting solutions.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/about" className="text-slate-600 hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-primary transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-slate-900 mb-6 uppercase tracking-wider">Get in Touch</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-600 font-medium text-sm">AppsCare Technologies,<br />
                  H No:27-77,<br />
                  Shiva Sai Nagar,<br />
                  Hydershakota,<br />
                  Hyderabad, Telangana - 500091,<br />
                  India</span>
              </li>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />

                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919966727754"
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    +91 9966727754
                  </a>

                  <a
                    href="tel:+919700475707"
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    +91 9700475707
                  </a>
                </div>
              </div>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-slate-600 font-medium text-sm">info@appscaretech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-medium">&copy; {currentYear} AppsCare Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}