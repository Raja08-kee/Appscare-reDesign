import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Terminal,
    Zap,
    GraduationCap,
    Layers,
    ChevronRight,
    Network
} from 'lucide-react';

const services = [
    {
        title: "IT Consulting",
        desc: "Strategic technology consulting solutions for enterprise digital transformation and scalable IT infrastructure.",
        icon: <Users size={32} />,
        color: "from-blue-500/20",
        glow: "shadow-blue-500/20"
    },
    {
        title: "Modern EDI",
        desc: "Secure and modern Electronic Data Interchange solutions for seamless business communication and automation.",
        icon: <Terminal size={32} />,
        color: "from-indigo-500/20",
        glow: "shadow-indigo-500/20"
    },
    {
        title: "API Integration",
        desc: "Robust API integration services connecting enterprise applications, cloud systems, and third-party platforms.",
        icon: <Zap size={32} />,
        color: "from-cyan-500/20",
        glow: "shadow-cyan-500/20"
    },
    {
        title: "Corporate Trainings",
        desc: "Professional middleware and enterprise technology training programs designed for corporate teams.",
        icon: <GraduationCap size={32} />,
        color: "from-purple-500/20",
        glow: "shadow-purple-500/20"
    },
    {
        title: "Middleware Solutions",
        desc: "Advanced middleware architectures enabling system integration, workflow automation, and real-time data synchronization.",
        icon: <Layers size={32} />,
        color: "from-sky-500/20",
        glow: "shadow-sky-500/20"
    }
];

export default function MiddlewareServices() {
    return (
        <section className="py-24 bg-[#020617] relative overflow-hidden">
            {/* Background Tech Elements */}
            <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <span className="h-px w-8 bg-blue-500" />
                        <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-[10px]">Solutions Architecture</span>
                        <span className="h-px w-8 bg-blue-500" />
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic">
                        Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Digital Frontier</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className={`group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/[0.05] ${service.glow} hover:shadow-2xl`}
                        >
                            {/* Animated Data Flow Line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent group-hover:w-full transition-all duration-700" />

                            {/* Service Icon */}
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-white/10 to-transparent text-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase italic">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-8 group-hover:text-slate-200 transition-colors">
                                {service.desc}
                            </p>

                            {/* Interaction Hint */}
                            <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                                Contact Specialist <ChevronRight size={14} />
                            </div>
                        </motion.div>
                    ))}

                    {/* Infrastructure Stats Card */}
                    <motion.div
                        className="p-8 rounded-3xl bg-gradient-to-br from-blue-600/20 to-indigo-900/40 border border-blue-500/30 flex flex-col justify-center items-center text-center"
                    >
                        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                            <Network className="text-blue-400 animate-pulse" size={32} />
                        </div>
                        <div className="text-3xl font-black text-white mb-1">99.9%</div>
                        <div className="text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-4">System Uptime</div>
                        <button className="px-6 py-2 bg-blue-500 text-white font-black text-[10px] rounded-full uppercase tracking-tighter hover:bg-blue-400 transition-colors">
                            Request Demo
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}