import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    Terminal,
    Zap,
    GraduationCap,
    Layers,
    Workflow,
    ArrowLeftRight, // For A2A
    Building2 // For B2B
} from 'lucide-react';

const middlewareTopics = [
    { title: "IT Consulting", icon: <Users size={40} />, color: "text-blue-400" },
    { title: "B2B Integration", icon: <Building2 size={40} />, color: "text-indigo-400" },
    { title: "Modern EDI", icon: <Terminal size={40} />, color: "text-cyan-400" },
    { title: "A2A Connectivity", icon: <ArrowLeftRight size={40} />, color: "text-purple-400" },
    { title: "API Integration", icon: <Zap size={40} />, color: "text-sky-400" },
    { title: "Corporate Trainings", icon: <GraduationCap size={40} />, color: "text-blue-500" },
    { title: "Middleware Solutions", icon: <Layers size={40} />, color: "text-indigo-500" },
    { title: "Enterprise Workflow", icon: <Workflow size={40} />, color: "text-cyan-500" },
];

export default function MiddlewareMarquee() {
    // Duplicate the list to create a seamless infinite loop
    const duplicatedTopics = [...middlewareTopics, ...middlewareTopics];

    return (
        <section className="py-20 bg-[#020617] overflow-hidden border-y border-white/5">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">
                    Powering the <span className="text-blue-500">Digital Frontier</span>
                </h2>
                {/* Added technical perspectives sub-header */}
                <p className="text-slate-500 text-xs mt-4 uppercase tracking-[0.5em] font-bold">
                    B2B • A2A • API • EDI • ETL
                </p>
            </div>

            <div className="relative flex">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 35, // Slightly slower duration to account for more items
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedTopics.map((item, i) => (
                        <div key={i} className="flex-shrink-0 w-80 group cursor-pointer">
                            <div className="relative h-48 rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-blue-500/50">

                                {/* Background Glow Effect */}
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className={`${item.color} group-hover:scale-110 transition-transform duration-500`}>
                                    {item.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight italic uppercase">
                                        {item.title}
                                    </h3>
                                    {/* Subtle animated border bottom */}
                                    <div className="h-0.5 w-0 bg-blue-500 mt-2 group-hover:w-full transition-all duration-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Seamless Edge Fading */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />
            </div>
        </section>
    );
}