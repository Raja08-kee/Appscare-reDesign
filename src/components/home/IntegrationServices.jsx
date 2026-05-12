import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Lock, Repeat, Box, Zap, ShieldCheck } from 'lucide-react';

const services = [
    {
        title: "Hybrid Cloud Integration",
        desc: "Seamlessly bridge on-premise legacy systems with modern multi-cloud environments via secure, high-speed tunnels.",
        icon: <Share2 className="text-connect" />,
        gradient: "from-blue-500/20 to-transparent"
    },
    {
        title: "API Management & Governance",
        desc: "Centralized control for your API ecosystem. Monitor, secure, and scale your interfaces with enterprise-grade policy enforcement.",
        icon: <Box className="text-flow" />,
        gradient: "from-cyan-500/20 to-transparent"
    },
    {
        title: "Real-time Data Sync",
        desc: "Sub-millisecond synchronization across global enterprise nodes, ensuring data integrity for mission-critical operations.",
        icon: <Repeat className="text-sync" />,
        gradient: "from-purple-500/20 to-transparent"
    },
    {
        title: "Automated Workflows",
        desc: "Eliminate manual overhead by engineering intelligent, self-healing integration pipelines that react to system events in real-time.",
        icon: <Zap className="text-yellow-400" />,
        gradient: "from-yellow-500/10 to-transparent"
    },
    {
        title: "Enterprise Security Layer",
        desc: "Implementing Zero-Trust architectures and end-to-end encryption for every data packet moving through your middleware.",
        icon: <ShieldCheck className="text-emerald-400" />,
        gradient: "from-emerald-500/20 to-transparent"
    },
    {
        title: "Legacy System Modernization",
        desc: "Extracting value from your existing core systems by wrapping them in modern, scalable microservices architectures.",
        icon: <Lock className="text-rose-400" />,
        gradient: "from-rose-500/20 to-transparent"
    }
];

export default function IntegrationServices() {
    return (
        <section className="py-32 bg-[#020617] relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-20">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
                    >
                        ENGINEERING THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-connect to-sync">CONNECTED ENTERPRISE.</span>
                    </motion.h2>
                    <p className="text-slate-400 text-lg">
                        We provide the digital glue that holds modern businesses together.
                        Our middleware solutions are built for speed, security, and absolute reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 overflow-hidden backdrop-blur-sm"
                        >
                            {/* Animated Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-connect transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {service.desc}
                                </p>

                                <div className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-white transition-colors">
                                    <span>Explore Protocol</span>
                                    <div className="h-[1px] w-8 bg-slate-800 group-hover:bg-connect transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}