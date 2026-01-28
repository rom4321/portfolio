import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileDown, Stethoscope, Code, Target, Zap, BookOpen } from 'lucide-react';
import content from '../data/portfolio-content.json';
import profileImg from '../assets/images/profile.png';




const SkillCard = ({ icon, title, description, skills }) => (
  <div className="group p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary-500/50 transition-all duration-300">
    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
      {description}
    </p>
    <ul className="space-y-3">
      {skills.map(skill => (
        <li key={skill} className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const About = ({ isPartial = false }) => {
  const { profile, about } = content;
  const pageContent = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-20">
        <div className="lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <img
  src={profileImg} 
  alt={profile.name}
  className="w-48 h-48 sm:w-56 sm:h-56 rounded-[2rem] object-cover shadow-2xl border-4 border-white dark:border-slate-800 ring-4 ring-primary-500/20"
/>

            </div>
            <h2 className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">{about.sectionLabel}</h2>
            <p className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
              {about.headline} <br />
              <span className="text-slate-400">{about.headlineAccent}</span>
            </p>
            <div className="space-y-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:bg-primary-600 dark:hover:bg-primary-400 dark:hover:text-white transition-all shadow-xl shadow-slate-900/10 dark:shadow-none">
                <FileDown size={22} /> {about.cvButton}
              </a>
              <div className="flex -space-x-3 items-center ml-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                    <Zap size={14} className="text-primary-600" />
                  </div>
                ))}
                <span className="pl-6 text-sm font-bold text-slate-500 uppercase tracking-widest">{about.globalCollaborations}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <SkillCard
                icon={<Stethoscope className="text-red-500" />}
                title={about.skillCards[0].title}
                description={about.skillCards[0].description}
                skills={about.skillCards[0].skills}
              />
              <SkillCard
                icon={<Code className="text-blue-500" />}
                title={about.skillCards[1].title}
                description={about.skillCards[1].description}
                skills={about.skillCards[1].skills}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-8 sm:mt-12"
            >
              <SkillCard
                icon={<Target className="text-orange-500" />}
                title={about.skillCards[2].title}
                description={about.skillCards[2].description}
                skills={about.skillCards[2].skills}
              />
              <SkillCard
                icon={<BookOpen className="text-teal-500" />}
                title={about.skillCards[3].title}
                description={about.skillCards[3].description}
                skills={about.skillCards[3].skills}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isPartial) return <section className="py-24">{pageContent}</section>;

  return (
    <div className="pt-32 pb-32">
      <Helmet>
        <title>{content.meta.about.title}</title>
      </Helmet>
      {pageContent}
    </div>
  );
};

export default About;
