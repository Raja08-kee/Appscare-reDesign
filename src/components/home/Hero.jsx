import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Activity, Share2, Cloud, Server, Database, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020617] flex items-center pt-20 overflow-hidden">
      {/* Background Infrastructure Layer: Technical Grid */}
      <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-[0.03]" />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-connect/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-sync/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-connect/10 border border-connect/20 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-connect animate-ping" />
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Enterprise Integration Engine</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            UNIFY YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-connect via-flow to-sync">
              DIGITAL CORE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium"
          >
            We architect high-performance middleware solutions that bridge legacy systems with modern cloud infrastructure. Seamless data flow, engineered for scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-5"
          >
            <button className="group flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-connect hover:text-white transition-all shadow-xl shadow-white/5">
              Consult Architecture <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all flex items-center gap-2">
              <Zap size={18} className="text-connect" /> View Solutions
            </button>
          </motion.div>

          {/* Integration Connectivity Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10"
          >
            {[
              { label: 'Latency', val: '< 50ms' },
              { label: 'Integrations', val: '500+' },
              { label: 'Throughput', val: '10GB/s' },
              { label: 'Sync Rate', val: '99.9%' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-black text-white italic">{stat.val}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* NEW: Middleware Architecture Visualization */}
        <div className="hidden lg:flex relative h-[500px] items-center justify-center">
          {/* Central Hub (AppScare Engine) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 border border-connect/20 rounded-full"
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="relative z-20 w-32 h-32 bg-gradient-to-br from-connect to-sync rounded-3xl p-[1px] shadow-[0_0_50px_-10px_rgba(14,165,233,0.5)]"
          >
            <div className="w-full h-full bg-[#020617] rounded-3xl flex items-center justify-center">
              <Share2 size={40} className="text-white" />
            </div>
          </motion.div>

          {/* Animated Connecting Nodes */}
          {[
            { Icon: Cloud, label: "SaaS", color: "text-sky-400", x: -140, y: -120 },
            { Icon: Server, label: "On-Prem", color: "text-purple-400", x: 140, y: -80 },
            { Icon: Database, label: "Legacy", color: "text-cyan-400", x: -120, y: 120 },
            { Icon: Activity, label: "API Hub", color: "text-indigo-400", x: 130, y: 100 }
          ].map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (i * 0.2) }}
              style={{ x: node.x, y: node.y }}
              className="absolute z-10 flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center transition-all group-hover:border-connect/50">
                <node.Icon className={node.color} size={24} />
              </div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{node.label}</span>

              {/* Animated Flow Line to Center */}
              <svg className="absolute top-1/2 left-1/2 -z-10 w-[200px] h-[200px] overflow-visible pointer-events-none">
                <motion.line
                  x1="0" y1="0" x2={-node.x} y2={-node.y}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className={`${node.color} opacity-20`}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}