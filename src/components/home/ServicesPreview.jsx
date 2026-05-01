import { motion } from 'framer-motion';
/* UPDATED: Imported Link for navigation */
import { Link } from 'react-router-dom';
import { Network, Code2, Workflow, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'api',
    title: 'API Architecture',
    icon: Code2,
    description: 'APIs are essential for building modern software applications. We create secure, modular, and scalable endpoints that easily integrate your cloud computing and microservices with any external system.',
  },
  {
    id: 'consulting',
    title: 'IT Consulting',
    icon: Network,
    description: 'Transform at lightning speed for a digital-first world. Our consulting practice helps business leaders leverage new technologies to drive operations, optimize infrastructure, and empower people.',
  },
  {
    id: 'process',
    title: 'Business Process',
    icon: Workflow,
    description: 'Combine core industry-specific processes with analytics and deep insights. We support and automate critical enterprise domains including finance, HR, and advanced supply chain management.',
  }
];

export default function ServicesPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden z-10">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center justify-center gap-4">
              <span className="w-8 h-[2px] bg-primary/30"></span>
              Where innovation meets excellence
              <span className="w-8 h-[2px] bg-primary/30"></span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight"
          >
            Intelligent Solutions for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Digital World</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base leading-relaxed"
          >
            We are a full-service tech agency designing and building the architecture, integrations, and experiences that power modern enterprises.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group flex"
            >
              <div className="relative w-full bg-white border border-slate-100 rounded-xl p-6 lg:p-8 flex flex-col items-start shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-3 rounded-lg bg-sky-50 border border-sky-100 mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* UPDATED: Changed from button to Link component pointing to /services */}
                <Link 
                  to="/services"
                  className="flex items-center gap-2 text-xs font-bold text-primary mt-auto group-hover:gap-3 transition-all uppercase tracking-wide cursor-pointer"
                >
                  Discover more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}