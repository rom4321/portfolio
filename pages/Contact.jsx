import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

const ContactInfo = ({ icon, title, content, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="group flex items-center gap-5 p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-primary-500/30 transition-all"
  >
    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 text-primary-600 flex items-center justify-center flex-shrink-0 shadow-sm transition-transform group-hover:scale-110">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{title}</h4>
      <p className="text-slate-900 dark:text-white font-bold">{content}</p>
    </div>
  </motion.div>
);

const Contact = ({ isPartial = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', message: 'Message encrypted & sent. I will respond within 24 hours.' });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus({ type: null, message: '' }), 5000);
    }, 1500);
  };

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-2/5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 text-center lg:text-left">Inquiries</h2>
            <p className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight mb-8 text-center lg:text-left">
              Secure a <br />
              <span className="text-slate-400">Consultation.</span>
            </p>
            <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed text-center lg:text-left font-light">
              Available for high-impact health-tech engineering, clinical consultation, and full-stack development contracts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <ContactInfo icon={<MapPin size={22} />} title="HQ Location" content="Addis Ababa, Ethiopia" delay={0.1} />
              <ContactInfo icon={<Mail size={22} />} title="Primary Email" content="romioalhakim@gmail.com" delay={0.2} />
              <ContactInfo icon={<Phone size={22} />} title="Direct Line" content="+251-9XX-XXX-XXX" delay={0.3} />
            </div>
            
            <div className="mt-12 p-8 rounded-[2rem] bg-primary-600 text-white flex items-center gap-6 shadow-2xl shadow-primary-500/20">
              <Sparkles size={40} className="text-primary-200" />
              <p className="text-sm font-bold leading-relaxed">Currently prioritizing projects in <span className="underline decoration-white/50 underline-offset-4">Precision Medicine</span> and <span className="underline decoration-white/50 underline-offset-4">Patient Workflow Automation</span>.</p>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-10 md:p-14 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 blur-[50px] rounded-full group-hover:scale-150 transition-transform"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all outline-none text-slate-900 dark:text-white font-semibold"
                    placeholder="Dr. John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all outline-none text-slate-900 dark:text-white font-semibold"
                    placeholder="john@hospital.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message / Inquiry Details</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 rounded-2xl focus:ring-4 focus:ring-primary-500/10 focus:border-primary-500 transition-all outline-none text-slate-900 dark:text-white font-semibold resize-none"
                  placeholder="How can my clinical-technical background help your team?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-12 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-black shadow-xl shadow-primary-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 group/btn"
              >
                {isSubmitting ? 'Processing...' : 'Dispatch Message'}
                <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex items-center gap-3 p-5 rounded-2xl ${
                    status.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle2 size={24} /> : <AlertCircle size={24} />}
                  <span className="font-bold text-sm">{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );

  if (isPartial) return <section className="py-32">{content}</section>;

  return (
    <div className="pt-32 pb-32">
      <Helmet>
        <title>Consultation | Romedan Abdelhakim</title>
      </Helmet>
      {content}
    </div>
  );
};

export default Contact;
