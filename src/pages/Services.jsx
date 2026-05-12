import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/utils/SEO';
import { Link } from 'react-router-dom';
import {
  Layers, Activity, RefreshCw, ArrowRight,
  Code2, Network, GraduationCap, Truck,
  Cpu, Shuffle, ArrowLeftRight
} from 'lucide-react';

const servicePillars = [
  {
    title: "New Implementation",
    icon: Layers,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    desc: "Implementing software is a daunting task that can lead to pitfalls and lag time. AppsCare provides a comprehensive plan and an experienced team to safeguard against failure."
  },
  {
    title: "Managed Services",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
    desc: "Providing services across every area of IT, we enable you to maintain complex environments while giving your team the freedom to focus on modernization."
  },
  {
    title: "Upgrades",
    icon: RefreshCw,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    desc: "Outdated software risks potential disaster. Mitigate your company's risk by trusting our specialists to perform seamless, high-security upgrades for your entire stack."
  }
];

const technicalServices = [
  { id: 'it-consulting', name: 'IT Consulting', icon: Network, desc: 'Strategic Roadmap Design.' },
  { id: 'modern-edi', name: 'Modern EDI', icon: Truck, desc: 'Supply Chain Automation.' },
  { id: 'b2b-integration', name: 'B2B Integration', icon: Shuffle, desc: 'External Partner Connectivity.' },
  { id: 'a2a-integration', name: 'A2A Integration', icon: ArrowLeftRight, desc: 'Internal System Synchronization.' },
  { id: 'api-integration', name: 'API Integration', icon: Code2, desc: 'Enterprise Middleware Solutions.' },
  { id: 'middleware', name: 'Middleware', icon: Cpu, desc: 'Robust Data Orchestration.' },
  { id: 'corporate-trainings', name: 'Corporate Trainings', icon: GraduationCap, desc: 'Professional IT Upskilling.' },
];

export default function Services() {
  const montserratStyle = { fontFamily: '"Montserrat", sans-serif' };

  return (
    <div className="w-full bg-white pb-20" style={montserratStyle}>
      <SEO
        title="Enterprise IT Services"
        description="Explore our technical expertise in B2B/A2A Integration, Cloud Infrastructure, and Middleware orchestration."
        path="/services"
      />

      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Technical Background"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Our Expertise</span>
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-6 tracking-tighter leading-tight">
              Comprehensive <span className="text-primary">IT Frameworks</span> <br />
              for the Digital Enterprise
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
              AppsCare Technologies delivers high-performance API integrations, B2B/A2A connectivity, and automated workflows designed for the future of global commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. STRATEGIC SOLUTIONS (Visual Service Pillars) */}
      <section className="container mx-auto px-6 max-w-6xl py-20">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-xs font-black text-slate-400 uppercase italic tracking-[0.3em] shrink-0">Strategic Solutions</h2>
          <div className="h-[1px] bg-slate-100 w-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl border border-slate-100 shadow-sm">
                <img
                  src={pillar.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={pillar.title}
                />
                <div className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-md rounded-lg shadow-sm">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="text-base font-black text-slate-900 uppercase italic mb-3 tracking-tight">{pillar.title}</h3>
              <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed font-medium">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TECHNICAL PROFICIENCY GRID */}
      {/* THIS NOW FOLLOWS IMMEDIATELY AFTER THE PILLARS */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 uppercase italic mb-4 tracking-tighter">Technical Proficiency</h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto font-medium">Specialized engineering across the most critical domains of modern IT infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalServices.map((svc) => (
              <Link
                key={svc.id}
                to={`/service/${svc.id}`}
                className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                    <svc.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="text-sm font-black text-slate-900 mb-1 uppercase italic tracking-tight">{svc.name}</h4>
                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none">{svc.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACTION CTA */}
      <section className="container mx-auto px-6 max-w-5xl mt-24">
        <div className="bg-slate-900 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-md">
            <h3 className="text-white text-2xl font-black uppercase italic mb-2 tracking-tighter">Need a custom technical solution?</h3>
            <p className="text-slate-400 text-sm font-medium">Schedule a deep-dive session with our senior architects to build your technology roadmap.</p>
          </div>
          <Link to="/contact" className="relative z-10 px-8 py-4 bg-primary text-white text-[11px] font-black rounded-lg uppercase italic tracking-[0.2em] hover:bg-sky-400 transition-all shadow-lg shadow-primary/20">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}