import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import content from '../data/portfolio-content.json';
import myProfileImg from '../assets/images/myprofile.png';


const Hero = () => {
  const { profile, hero } = content;
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-50">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-primary-200/40 dark:bg-primary-900/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[70%] bg-indigo-200/40 dark:bg-indigo-900/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-[1.2] text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-white dark:bg-slate-900 text-primary-600 dark:text-primary-400 mb-8 border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary-600 mr-2 animate-ping"></span>
              {hero.badge}
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
              {hero.headline} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-500">{hero.headlineAccent}</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {hero.subtext}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
              <Link 
                to="/projects" 
                className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold shadow-2xl shadow-primary-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-3 group"
              >
                {hero.ctaProjects} 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 text-slate-900 dark:text-white rounded-2xl font-bold transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                {hero.ctaContact}
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8">
              {[
                { icon: <Github size={22} />, href: profile.socials.github },
                { icon: <Linkedin size={22} />, href: profile.socials.linkedin },
                { icon: <Mail size={22} />, href: profile.socials.email }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative group"
          >
            <div className="relative z-10 w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] mx-auto">
              {/* Photo Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-indigo-500 rounded-[3rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform"></div>
              <div className="relative w-full h-full overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white dark:border-slate-900 transition-all group-hover:-translate-y-2">
              <img 
  src={myProfileImg} 
  alt={profile.name} 
  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
/>

              </div>

              {/* Float Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 md:top-10 md:-right-10 z-20 glass p-5 rounded-3xl border border-white/50 dark:border-slate-800/50 shadow-2xl flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center text-green-600 dark:text-green-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400">{hero.verifiedBadge}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{hero.verifiedTitle}</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-6 md:bottom-10 md:-left-16 z-20 glass p-5 rounded-3xl border border-white/50 dark:border-slate-800/50 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-black text-primary-600">{hero.experienceYears}</span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-tight">{hero.experienceLabelLine1} <br /> {hero.experienceLabelLine2}</span>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700"></div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
