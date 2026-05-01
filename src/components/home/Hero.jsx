import { motion } from 'framer-motion';
/* UPDATED: Added Link import */
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden pt-24">
      
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://appscaretech.com/wp-content/uploads/2023/04/InShot_20230406_134957258-scaled.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/85 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/95"></div>
      </div>

      {/* Tech Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-blob z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[80px] opacity-70 animate-blob animation-delay-2000 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Compact Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-[10px] font-bold text-slate-300 tracking-[0.2em] uppercase">Next-Gen IT Solutions</span>
          </motion.div>

          {/* Scaled Down Typography */}
          <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Empower Your Business with <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Intelligent Tech</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xs md:text-sm text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
            AppsCare Technologies delivers high-performance API integrations, strategic IT consulting, and automated workflows designed for the future of business.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* UPDATED: Changed button to Link for navigation */}
            <Link 
              to="/services"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-[11px] font-bold uppercase tracking-widest hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            
            <button className="w-full sm:w-auto px-6 py-3 bg-white/5 text-slate-200 border border-white/10 backdrop-blur-md rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Talk to an Expert
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}