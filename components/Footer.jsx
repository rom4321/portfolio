import React from 'react';
import { Github, Linkedin, Mail, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold">R</div>
              <span className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">Romedan</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed text-lg mb-8">
              A clinical practitioner turned software engineer. I'm on a mission to improve patient outcomes through high-performance software and user-centric clinical design.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/romedan" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/romedan" },
                { icon: <Mail size={20} />, href: "mailto:romioalhakim@gmail.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary-500 hover:text-primary-600 transition-all flex items-center justify-center shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-8 tracking-tight">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map(link => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} 
                    className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5">
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-8 tracking-tight">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <p className="text-slate-600 dark:text-slate-400">Addis Ababa, Ethiopia<br/><span className="text-sm opacity-60">Professional Medical Practice & Tech Studio</span></p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">romioalhakim@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Romedan Abdelhakim. Licensed Medical Professional & Full Stack Engineer.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> & Professional Precision
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
