import React, { useState } from 'react';
import SEO from '../components/utils/SEO';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  // 1. State for form data[cite: 5]
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Handle input changes[cite: 5]
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle form submission[cite: 5]
  const handleSubmit = async (e) => {
    e.preventDefault(); // Critical: stops page refresh[cite: 5]

    console.log("🚀 Sending to Backend:", formData);

    try {
      const response = await fetch("https://appscare-redesign-1.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Success: " + result.message);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset[cite: 5]
      } else {
        alert("❌ Error: " + result.error);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      alert("Server connection failed! Is your backend running?");
    }
  };

  return (
    <div className="w-full bg-slate-50 pt-32 pb-20 min-h-screen">
      <SEO title="Contact Us" description="Expert support for digital enterprises." path="/contact" />
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Info Side */}
          <div>
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">Contact Us</span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Let's build your <br /><span className="text-primary">technical roadmap.</span></h1>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary"><Mail /></div>
                <div><p className="text-[10px] font-bold text-slate-400 uppercase">Email</p><p className="text-sm font-bold text-slate-700">info@appscaretech.com</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary"><Phone /></div>
                <div><p className="text-[10px] font-bold text-slate-400 uppercase">Phone</p><p className="text-sm font-bold text-slate-700">+91 9966727754</p></div>
              </div>
            </div>
          </div>

          {/* Form Side - Logic Added Here */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs" placeholder="John Doe" required />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs" placeholder="john@company.com" required />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs" placeholder="API Integration Inquiry" required />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded text-xs" placeholder="Tell us about your project..." required></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-primary text-white text-xs font-bold rounded uppercase tracking-widest hover:bg-sky-600 transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-3 h-3" />
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}