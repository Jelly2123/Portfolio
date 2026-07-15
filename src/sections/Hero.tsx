import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const roles = ['Laravel Developer', 'PHP Developer', 'Problem Solver'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#050816] px-6 py-20 overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#7C3AED]/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#22D3EE]/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
        
        {/* Main Text Content */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] font-mono text-xs mb-6"
          >
            <Sparkles size={12} className="animate-spin-slow" />
            <span>WELCOME TO MY STORY</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8.5xl font-bold tracking-tight text-[#F8FAFC] leading-none mb-4"
          >
            Hi, I'm <br className="md:hidden" />
            <span className="text-gradient font-extrabold">{personalInfo.name}</span>
          </motion.h1>

          {/* Loop/Rotating Roles */}
          <div className="h-12 md:h-16 flex items-center mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="text-2xl md:text-4xl font-mono text-[#22D3EE] font-medium"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Mini Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-[#94A3B8] max-w-xl mb-10 leading-relaxed"
          >
            {personalInfo.subtitle} specialized in architecting responsive database-driven 
            backends with PHP and Laravel, paired with clean, premium UI designs.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center mb-12 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-[#F8FAFC] font-semibold text-sm shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer interactive"
            >
              View Projects
            </button>
            
            <button
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3.5 rounded-full border border-white/10 bg-[#0F172A]/40 text-[#F8FAFC] font-semibold text-sm hover:border-[#7C3AED]/40 hover:bg-[#7C3AED]/5 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer interactive"
            >
              Contact Me
            </button>
            
            <a
              href={personalInfo.resumeUrl}
              download
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-dashed border-white/20 text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#22D3EE]/50 transition-all duration-300 text-sm cursor-pointer interactive"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-6"
          >
            <span className="text-xs uppercase font-mono tracking-widest text-[#94A3B8]">CONNECT:</span>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/30 bg-[#0F172A]/20 transition-all duration-300 interactive"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/30 bg-[#0F172A]/20 transition-all duration-300 interactive"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/30 bg-[#0F172A]/20 transition-all duration-300 interactive"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Graphic side */}
        <div className="lg:col-span-4 hidden lg:flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative w-80 h-80 flex items-center justify-center"
          >
            {/* Spinning decorative gears/borders */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#7C3AED]/30 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-double border-[#22D3EE]/20 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#7C3AED]/5 to-[#22D3EE]/5 backdrop-blur-3xl" />
            
            {/* Code bracket symbol */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <span className="text-8xl font-mono text-gradient font-bold">&lt;/&gt;</span>
              <span className="text-xs font-mono tracking-widest text-[#94A3B8] mt-2 uppercase">PHP & Laravel</span>
            </div>

            {/* Float dots */}
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#22D3EE] blur-[2px] animate-bounce" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-[#7C3AED] blur-[2px] animate-bounce" style={{ animationDuration: '6s' }} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer" onClick={() => handleScrollTo('about')}>
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#94A3B8]">SCROLL STORY</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="text-[#22D3EE]"
        >
          <ArrowDown size={14} />
        </motion.div>
      </div>
    </section>
  );
}
