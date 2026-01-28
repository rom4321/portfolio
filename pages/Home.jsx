import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Smooth scroll for in-page anchors (#services, #about, etc.) only.
    // Skip #/... links—those are React Router (HashRouter) nav links.
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href') || '';
      if (href.startsWith('#/')) return; // Let router handle navigation
      const targetId = href.slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((a) => a.addEventListener('click', handleAnchorClick));
    return () => anchors.forEach((a) => a.removeEventListener('click', handleAnchorClick));
  }, []);

  return (
    <>
      <Helmet>
        <title>Romedan Abdelhakim | MD & Full Stack Developer</title>
        <meta
          name="description"
          content="Official portfolio of Romedan Abdelhakim, a Medical Doctor and Full Stack Developer specializing in healthcare digital transformation."
        />
      </Helmet>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Hero />
      
      <div id="services">
        <Services />
      </div>
      
      <div id="about" className="relative">
        {/* Section Divider */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
        <About isPartial />
      </div>

      <div id="projects" className="relative bg-slate-50/30 dark:bg-slate-900/10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
        <Projects isPartial />
      </div>

      <div id="contact" className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
        <Contact isPartial />
      </div>
    </>
  );
};

export default Home;
