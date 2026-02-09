import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import content from '../data/portfolio-content.json';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import amazonImg from '../assets/images/Amazon.jpeg';
import netflixImg from '../assets/images/Netfilix.jpeg';
import appleImg from '../assets/images/Apple.jpeg';
import evangadiImg from '../assets/images/Evangadi-forum.jpeg';

const projectImages = {
  amazon: amazonImg,
  netflix: netflixImg,
  apple: appleImg,
  evangadi: evangadiImg,
};


const Projects = ({ isPartial = false }) => {
  const { projects } = content;
  const items = projects.items;
  const pageContent = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-primary-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">{projects.sectionLabel}</h2>
          <p className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            {projects.headline} <span className="text-slate-400">{projects.headlineAccent}</span>
          </p>
        </div>
        {!isPartial && (
          <p className="max-w-sm text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            {projects.subtext}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-3xl hover:shadow-primary-600/10 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={projectImages[project.image]}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 hover:bg-primary-600 hover:text-white transition-all hover:rotate-12">
                  <ExternalLink size={20} />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 hover:bg-primary-600 hover:text-white transition-all hover:-rotate-12">
                  <Github size={20} />
                </a>
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 glass rounded-xl text-[10px] font-black uppercase tracking-widest text-white shadow-xl">{projects.healthTechTag}</span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight size={20} className="text-slate-300 group-hover:text-primary-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center gap-3 mb-6">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-xl font-semibold hover:opacity-90 transition">
                    <ExternalLink size={16} />
                    <span>Live</span>
                  </a>
                )}

                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-900 rounded-xl font-semibold hover:bg-slate-200 transition border border-slate-200">
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[11px] font-bold rounded-xl uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isPartial && (
        <div className="mt-16 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:gap-4 transition-all">
            {projects.seeAllCta} <ArrowUpRight size={20} />
          </Link>
        </div>
      )}
    </div>
  );

  if (isPartial) return <section className="py-24">{pageContent}</section>;

  return (
    <div className="pt-32 pb-32">
      <Helmet>
        <title>{content.meta.projects.title}</title>
      </Helmet>
      {pageContent}
    </div>
  );
};

export default Projects;
