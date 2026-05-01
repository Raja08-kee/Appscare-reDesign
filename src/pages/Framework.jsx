import { motion } from 'framer-motion';
import SEO from '../components/utils/SEO';
import { Box, Lock, Cpu, Network, ArrowRight } from 'lucide-react';

export default function Framework() {
  return (
    <div className="w-full min-h-screen bg-slate-950 pt-32 pb-20 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Technical SEO */}
      <SEO 
        title="The AppsCare Framework | Coming Soon"
        description="We are documenting our proprietary A2A integration blueprint and cloud modernization framework. Stay tuned for a deep dive into our technical methodology."
        path="/framework"
      />

      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(circle, #0ea5e9 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <section className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Status: Initializing Framework</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">
            Our Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Blueprint is Loading.</span>
          </h1>

          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
            We are currently documenting our proprietary A2A Orchestration Framework—a standardized methodology for seamless enterprise data flow and legacy modernization.
          </p>

          {/* Methodology Preview (Blurred/Locked) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 opacity-40 grayscale pointer-events-none">
            {[
              { icon: Cpu, label: "Core Logic" },
              { icon: Network, label: "Sync Engine" },
              { icon: Box, label: "Containerization" }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl flex flex-col items-center gap-4">
                <item.icon className="w-6 h-6 text-slate-500" />
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Waitlist CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <input 
              type="email" 
              placeholder="Enter email for early access"
              className="w-full md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-primary transition-all"
            />
            <button className="w-full md:w-auto px-6 py-2.5 bg-primary text-white text-[10px] font-bold rounded-lg uppercase tracking-widest hover:bg-sky-400 transition-all flex items-center justify-center gap-2">
              Notify Me <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Floating Design Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
    </div>
  );
}