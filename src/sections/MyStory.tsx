import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Terminal, Calendar, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  icon: React.ReactNode;
  content: string;
  bullets: string[];
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: 'The Spark',
    subtitle: 'Diploma in Computer Science & Engineering',
    period: '2021 - 2023',
    icon: <GraduationCap className="text-[#7C3AED]" size={24} />,
    content: 'My coding journey sparked during my Computer Science diploma. Here, I was introduced to structured data representation, object-oriented concepts, and relational databases. Writing my first PHP script felt like magic—turning abstract logic into active web interfaces.',
    bullets: [
      'Gained solid foundational knowledge in OOP and Relational Database designs (DBMS).',
      'Coded my initial academic projects in raw PHP and MySQL.',
      'Graduated with honors, ranking in the top tier of the CSE batch.'
    ]
  },
  {
    id: 2,
    title: 'Professional Immersion',
    subtitle: 'Web Development Internship at Softpro India',
    period: 'Summer 2024',
    icon: <Terminal className="text-[#7C3AED]" size={24} />,
    content: 'To transition from student to developer, I completed a 6-week intensive internship at Softpro India. I was immersed in enterprise MVC systems, routing schemas, and database transactions under professional supervision.',
    bullets: [
      'Learned structured Laravel development methodology and API routing.',
      'Collaborated on git repositories and fixed version conflicts.',
      'Built and deployed clean frontends hooked to database backends.'
    ]
  },
  {
    id: 3,
    title: 'Solving Actual Problems',
    subtitle: 'Production Applications Developed',
    period: '2025 - Present',
    icon: <BookOpen className="text-[#22D3EE]" size={24} />,
    content: 'I set out to build solutions for real institutional friction. The Grievance Redressal Portal and Canteen Token Scheduling System were born from actual needs, teaching me security practices and concurrent state handling.',
    bullets: [
      'Engineered safe departmental authentication middleware.',
      'Designed transactional database tables with structured foreign constraints.',
      'Integrated mobile-friendly templates for kitchen/administrative displays.'
    ]
  },
  {
    id: 4,
    title: 'The Next Chapter',
    subtitle: 'A Future of Scalable Systems',
    period: 'Future',
    icon: <Calendar className="text-[#7C3AED]" size={24} />,
    content: 'The journey of a developer is never complete. I am constantly upgrading my skills, learning Tailwind v4, modern Javascript patterns, and full-stack integration protocols. I am ready to join a forward-thinking dev team as a Laravel engineer.',
    bullets: [
      'Expanding horizons into Next.js, advanced GSAP layouts, and cloud servers.',
      'Advocating clean code formatting, PSR compliance, and thin controllers.',
      'Ready to contribute to scalable commercial web platforms.'
    ]
  }
];

export default function MyStory() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const activeChapter = chapters[activeChapterIndex];

  const handleNext = () => {
    setActiveChapterIndex((prev) => (prev + 1) % chapters.length);
  };

  const handlePrev = () => {
    setActiveChapterIndex((prev) => (prev - 1 + chapters.length) % chapters.length);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">My Story</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Every Developer Starts Somewhere
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Narrative / Overview Text */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-[#94A3B8] leading-relaxed text-base md:text-lg">
            {personalInfo.aboutText}
          </p>
        </div>

        {/* Story Journal Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Bookmark ribbons sidebar (Desktop) */}
          <div className="absolute -left-12 top-8 hidden lg:flex flex-col gap-3">
            {chapters.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => setActiveChapterIndex(idx)}
                className={`relative px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-l-md border-r-2 ${
                  activeChapterIndex === idx
                    ? 'bg-[#7C3AED]/20 border-[#22D3EE] text-[#F8FAFC] translate-x-1'
                    : 'bg-[#0F172A]/40 border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
                } cursor-pointer interactive`}
              >
                Ch {idx + 1}
              </button>
            ))}
          </div>

          {/* Main Book Frame */}
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F172A]/60 to-[#050816]/80 p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
            
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#22D3EE]/5 blur-3xl pointer-events-none" />

            {/* Book Spine Overlay (visual separator in center) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 hidden md:block" />

            {/* Page flip animation container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, rotateY: 30, transformOrigin: 'center left' }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -30 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full text-left"
              >
                {/* Left Page: Chapter Title & Info */}
                <div className="flex flex-col justify-start">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      {activeChapter.icon}
                    </div>
                    <div>
                      <span className="font-mono text-xs text-[#22D3EE]">CHAPTER 0{activeChapter.id}</span>
                      <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight">{activeChapter.title}</h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] mb-6">
                    <Calendar size={14} />
                    <span>{activeChapter.period}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-[#F8FAFC] mb-4 border-l-2 border-[#7C3AED] pl-3 italic">
                    {activeChapter.subtitle}
                  </h4>

                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                    {activeChapter.content}
                  </p>
                </div>

                {/* Right Page: Key Milestones/Bullet points */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#22D3EE] mb-6">Key Takeaways</h4>
                  <ul className="flex flex-col gap-4">
                    {activeChapter.bullets.map((bullet, idx) => (
                      <motion.li
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                        <span className="text-[#94A3B8] text-sm leading-relaxed">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8">
              <span className="text-xs font-mono text-[#94A3B8]">
                Page {activeChapter.id} of {chapters.length}
              </span>
              
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/30 bg-[#0F172A]/20 transition-all cursor-pointer interactive"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/30 bg-[#0F172A]/20 transition-all cursor-pointer interactive"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Mobile chapter indicators */}
          <div className="flex justify-center gap-2 mt-6 lg:hidden">
            {chapters.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapterIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  activeChapterIndex === idx ? 'bg-[#22D3EE] w-6' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
