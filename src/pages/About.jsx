import SEO from '../components/utils/SEO';
import { motion } from 'framer-motion';

import { ShieldCheck, Zap, TrendingDown, Award, CheckCircle2 } from 'lucide-react';

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Certified Professionals',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop',
    desc: 'Expert teams backed by industry-leading certifications and deep technical knowledge.'
  },
  {
    icon: Zap,
    title: 'Speed Innovation',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
    desc: 'Accelerate your digital transformation with agile methodologies and cutting-edge tech.'
  },
  {
    icon: TrendingDown,
    title: 'Optimize & Save',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=600&auto=format&fit=crop',
    desc: 'Reduce operational budgets while maximizing system availability and performance.'
  },
  {
    icon: Award,
    title: 'True Confidence',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    desc: 'Delivering robust, secure solutions that give you peace of mind.'
  },
];

const sections = [
  {
    id: 'a2a',
    title: 'A2A (Application-to-Application)',
    subtitle: 'Seamless Data Exchange',
    content: 'Application-to-Application integration refers to the process of connecting two or more separate software applications to exchange data and work together seamlessly. The goal of A2A integration is to streamline business processes, automate tasks, and improve overall efficiency.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'b2b',
    title: 'B2B (Business-to-Business)',
    subtitle: 'External Partner Integration',
    content: 'B2B integration involves the automated exchange of data and documents between different organizations. We enable your business to communicate securely and efficiently with external partners, suppliers, and customers, standardizing workflows across your entire supply chain.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'experience',
    title: 'Technical Experience',
    subtitle: 'Broad Industry Expertise',
    content: 'We are well-versed in a variety of operating systems, networks, and databases. We use this deep, multi-disciplinary expertise to help our customers navigate complex challenges and successfully deliver a wide variety of small to mid-sized enterprise projects.',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'satisfaction',
    title: 'Satisfaction Guaranteed',
    subtitle: 'Tailored to Your Needs',
    content: "That's why our goal is to provide an experience that is tailored specifically to your company's unique needs. No matter the budget or the complexity, we pride ourselves on providing highly professional customer service and unwavering support.",
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'webmethods',
    title: 'WebMethods Architecture',
    subtitle: 'Enterprise Middleware',
    content: 'We design and implement robust middleware solutions using WebMethods architecture to ensure reliable, scalable, and secure data flow across your entire enterprise ecosystem, bridging the gap between legacy systems and modern cloud environments.',
    image: 'https://www.tnation.eu/wp-content/uploads/2025/01/business-integration-with-modern-technology-1024x585.jpg',
  }
];

export default function About() {
  return (
    <div className="w-full bg-slate-50 pb-16">
      <SEO
        title="Innovating IT Architecture & A2A Integration"
        description="Learn how AppsCare Technologies speeds innovation and reduces IT budgets through expert WebMethods architecture and seamless A2A data exchange."
        path="/about"
      />

      {/* 1. Immersive Hero - Replacing Text-Only Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-16 md:mb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="AppsCare Innovation"
          />
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-3 md:mb-4 block">About AppsCare</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 md:mb-6 tracking-tight leading-tight">
              Innovating at the <span className="text-primary">Speed of Business</span>
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We help companies reduce budgets while simultaneously speeding innovation, bolstering quality, maximizing availability, and strengthening security.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Visual Core Values Grid */}
      <section className="container mx-auto px-6 max-w-6xl mb-20 md:mb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="relative h-32 mb-5 rounded-md overflow-hidden border border-slate-100">
                <img
                  src={value.image}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={value.title}
                />
                <div className="absolute top-3 left-3 p-1.5 bg-white/90 backdrop-blur-sm rounded-md shadow-sm">
                  <value.icon className="w-4 h-4 text-primary" />
                </div>
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Alternating Content Sections - Constrained & Neat */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col gap-12 md:gap-20">
          {sections.map((section, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={section.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-12`}>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full md:w-[45%] relative group"
                >
                  {/* Subtle color highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500 opacity-10"></div>
                  <img
                    src={section.image}
                    alt={section.title}
                    className="relative w-full h-[200px] md:h-[280px] object-cover rounded-lg shadow-md z-10"
                  />
                </motion.div>

                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="w-full md:w-[55%]"
                >
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-sky-50 border border-sky-100 text-primary text-[10px] font-bold uppercase tracking-widest mb-3">
                    <CheckCircle2 className="w-3 h-3" /> {section.subtitle}
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-5">
                    {section.content}
                  </p>
                  <button className="text-primary font-bold hover:text-blue-700 transition-colors flex items-center gap-1.5 group text-xs">
                    Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}