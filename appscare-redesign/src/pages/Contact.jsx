import SEO from '../components/utils/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-slate-50 pt-32 pb-20 min-h-screen">
      <SEO
        title="Contact Our Senior IT Architects"
        description="Schedule a technical consultation for your API orchestration, cloud migration, or managed IT needs. Expert support for digital-first enterprises."
        path="/contact"
      />
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Contact Us</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Let's build your <br /><span className="text-primary">technical roadmap.</span></h1>
            <p className="text-sm text-slate-500 mb-10 leading-relaxed">Our senior architects are available for technical consultations regarding API orchestration, cloud migration, and managed IT operations.</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary"><Mail className="w-5 h-5" /></div>
                <div><p className="text-[10px] font-bold text-slate-400 uppercase">Email</p><p className="text-sm font-bold text-slate-700">info@appscaretech.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary"><Phone className="w-5 h-5" /></div>
                <div><p className="text-[10px] font-bold text-slate-400 uppercase">Phone</p><p className="text-sm font-bold text-slate-700">+91 9966727754</p></div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label><input type="text" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:border-primary" placeholder="John Doe" /></div>
                <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label><input type="email" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:border-primary" placeholder="john@company.com" /></div>
              </div>
              <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase">Subject</label><input type="text" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:border-primary" placeholder="API Integration Inquiry" /></div>
              <div className="space-y-1"><label className="text-[10px] font-bold text-slate-400 uppercase">Message</label><textarea rows="4" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs focus:outline-none focus:border-primary" placeholder="Tell us about your project..."></textarea></div>
              <button className="w-full py-3 bg-primary text-white text-xs font-bold rounded uppercase tracking-widest hover:bg-sky-600 transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-3 h-3" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}