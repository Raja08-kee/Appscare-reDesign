import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ArrowRight, Zap, Shield, Cpu, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceTemplate({ data }) {
  if (!data) return null;

  return (
    <div className="w-full bg-white pt-24 pb-16">
      {/* 1. BREADCRUMBS & HERO */}
      <section className="container mx-auto px-6 max-w-5xl mb-12">
        <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 mb-6 tracking-widest">
          <Link to="/" className="hover:text-primary">HOME</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-primary">SERVICES</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-900 uppercase">{data.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="inline-block px-3 py-1 rounded bg-sky-50 border border-sky-100 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
              {data.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              {data.title} <br />
              <span className="text-primary">{data.subtitle}</span>
            </h1>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              {data.heroDescription}
            </p>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-primary text-white text-xs font-bold rounded hover:bg-sky-600 transition-all shadow-lg shadow-primary/20">
                GET STARTED
              </button>
              <button className="px-5 py-2.5 bg-slate-50 text-slate-700 text-xs font-bold rounded border border-slate-200 hover:bg-slate-100 transition-all">
                VIEW DOCUMENTATION
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <img src={data.heroImage} alt={data.title} className="relative rounded-xl border border-slate-100 shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* 2. TECHNICAL PROCESS (The "How it Works") */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-2">The Methodology</h2>
            <div className="w-12 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {data.process.map((step, idx) => (
              <div key={idx} className="relative p-6 bg-white rounded-lg border border-slate-100 shadow-sm">
                <span className="absolute top-4 right-4 text-3xl font-black text-slate-50">{idx + 1}</span>
                <h4 className="text-xs font-bold text-primary uppercase mb-2">{step.label}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURE GRID */}
      <section className="container mx-auto px-6 max-w-5xl py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Core Capabilities</h3>
            <div className="space-y-6">
              {data.features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded bg-sky-50 flex items-center justify-center text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 mb-1">{f.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 rounded-xl p-8 text-white relative overflow-hidden">
             <Terminal className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5" />
             <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Technical Stack</h4>
             <div className="grid grid-cols-2 gap-4">
               {data.techStack.map(tech => (
                 <div key={tech} className="flex items-center gap-2 p-2 rounded bg-white/5 border border-white/10 text-[10px] font-mono">
                    <Cpu className="w-3 h-3 text-primary" /> {tech}
                 </div>
               ))}
             </div>
             <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded text-[11px] leading-relaxed text-slate-300 italic">
               "Our {data.title} services are built on top-tier industry standards ensuring 99.9% availability."
             </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="container mx-auto px-6 max-w-5xl pb-20">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary blur-[100px] rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to modernize your infrastructure?</h2>
          <p className="text-sm text-slate-400 mb-8 max-w-lg mx-auto">
            Schedule a technical consultation with our lead architects to discuss your specific requirements.
          </p>
          <button className="px-8 py-3 bg-white text-slate-900 text-xs font-bold rounded uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
            Consult an Expert
          </button>
        </div>
      </section>
    </div>
  );
}