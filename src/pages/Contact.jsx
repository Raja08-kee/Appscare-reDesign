import React, { useState } from 'react';
import SEO from '../components/utils/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    /**
     * CHANGE 1: Use the absolute URL for local development.
     * This allows your localhost to talk to your Hostinger backend.
     */
    const API_URL = "https://appscaretech.com/api/contact.php";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        mode: "cors", // CHANGE 2: Explicitly set CORS mode
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      /**
       * CHANGE 3: Improved response handling.
       * We check if the response is JSON before parsing to avoid "Unexpected token" errors.
       */
      const result = await response.json();

      if (response.ok && result.status === "success") {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        // Show the specific error message returned by your PHP script
        alert("❌ Server Error: " + (result.message || result.error || "Something went wrong"));
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("❌ Connection Failed: The frontend cannot reach the backend. Ensure your PHP file is uploaded and CORS is enabled.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#f8fafc] pt-32 pb-20 min-h-screen font-sans">
      <SEO title="Contact Us | Appscare" description="Expert technical support and inquiries." path="/contact" />

      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Information Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Let's talk about <br />
                <span className="text-primary italic">your next project.</span>
              </h1>
              <p className="mt-6 text-slate-600 text-lg">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <Mail className="text-primary" />
                <span className="text-slate-700 font-medium text-sm md:text-base">info@appscaretech.com</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                <Phone className="text-primary" />
                <div className="flex flex-col">
                  <span className="text-slate-700 font-medium text-sm md:text-base">+91 9966727754</span>
                  <span className="text-slate-700 font-medium text-sm md:text-base">+91 9700475707</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-slate-100"
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white rounded-[2rem] text-center p-6"
                >
                  <CheckCircle2 size={60} className="text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                  <p className="text-slate-500 mt-2">Thank you for reaching out. We will contact you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary outline-none transition-all" placeholder="Enter your name" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 uppercase ml-1">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary outline-none transition-all" placeholder="email@example.com" required />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary outline-none transition-all" placeholder="How can we help?" required />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-primary outline-none transition-all resize-none" placeholder="Your message..." required></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all active:scale-95 disabled:bg-slate-300"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}