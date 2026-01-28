import React from 'react';
import { motion } from 'framer-motion';
import { Code2, HeartPulse, Laptop, BrainCircuit, Activity, Microscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Medical Software Engineering",
      description: "Custom-built Electronic Health Records (EHR), patient portals, and specialized clinical software designed with MD insight.",
      icon: <HeartPulse className="text-red-500" size={32} />
    },
    {
      title: "Healthcare Data Visualization",
      description: "Transforming complex patient data and clinical metrics into intuitive, real-time dashboards for better decision-making.",
      icon: <Activity className="text-primary-500" size={32} />
    },
    {
      title: "Full Stack Ecosystems",
      description: "End-to-end development of modern web applications using React, Node.js, and robust cloud infrastructures.",
      icon: <Code2 className="text-blue-500" size={32} />
    },
    {
      title: "Clinical AI Solutions",
      description: "Implementing NLP and Machine Learning tools for medical document summarization and diagnostic assistance.",
      icon: <BrainCircuit className="text-teal-500" size={32} />
    },
    {
      title: "UI/UX for Clinicians",
      description: "Research-driven design focused on reducing clinician burnout by minimizing cognitive load and interface friction.",
      icon: <Laptop className="text-indigo-500" size={32} />
    },
    {
      title: "Tech-Clinical Strategy",
      description: "Consultancy for hospitals and health-tech startups to bridge the communication gap between engineers and medical staff.",
      icon: <Microscope className="text-orange-500" size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Service Excellence</h2>
            <p className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
              Specialized Expertise in <span className="text-slate-400">Digital Health.</span>
            </p>
          </div>
          <p className="max-w-xs text-slate-500 dark:text-slate-400 text-lg">
            Leveraging dual-domain mastery to create products that are medically accurate and technically superior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-primary-500/5 hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-white dark:bg-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {service.description}
              </p>
              
              <div className="absolute top-6 right-10 text-slate-200 dark:text-slate-800 font-black text-5xl opacity-50 group-hover:text-primary-200/30 transition-colors pointer-events-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
