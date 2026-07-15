import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, Info, ShieldAlert, Award, X, Sparkles } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectImage = (imageName: string) => {
    if (imageName === 'grievance_system') return '/grievance.png';
    if (imageName === 'canteen_system') return '/canteen.png';
    return '/placeholder.png';
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">Showcase</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Featured Projects
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {projectsData.map((project, idx) => (
            <GlassCard
              key={idx}
              tiltEffect={true}
              className="flex flex-col justify-between h-full bg-[#0F172A]/20 border-white/5"
            >
              <div className="flex flex-col h-full justify-between">
                
                {/* Project Image Mockup */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-white/10 group">
                  <img
                    src={getProjectImage(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />
                </div>

                {/* Info and Stack */}
                <div className="text-left flex-grow">
                  <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight mb-2 font-display">{project.title}</h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed mb-6 h-12 overflow-hidden text-ellipsis">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-[#94A3B8]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive buttons */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-mono text-[#22D3EE] hover:text-[#F8FAFC] transition-colors cursor-pointer interactive"
                  >
                    <Info size={14} />
                    <span>View System Specs</span>
                  </button>

                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors interactive"
                    >
                      <GithubIcon size={18} />
                    </a>
                    {project.liveUrl && project.liveUrl !== '#' && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors interactive"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}

          {/* Future Placeholder Card */}
          <GlassCard
            tiltEffect={false}
            className="flex flex-col items-center justify-center border-dashed border-white/10 bg-transparent text-center group min-h-[360px]"
          >
            <div className="flex flex-col items-center justify-center p-6">
              <div className="w-12 h-12 rounded-full border border-dashed border-white/20 flex items-center justify-center mb-4 text-[#94A3B8] group-hover:border-[#22D3EE]/50 group-hover:text-[#22D3EE] transition-colors">
                <Sparkles size={20} className="animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC] font-display">Future Project Placeholder</h3>
              <p className="text-xs text-[#94A3B8] max-w-[200px] mt-2 leading-relaxed">
                Currently designing a highly scalable CRM platform and RESTful service schemas.
              </p>
              <span className="mt-4 px-3 py-1 rounded bg-white/5 text-[10px] font-mono text-[#22D3EE] uppercase tracking-wider">
                Under Design Phase
              </span>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Project Spec Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#050816]/90 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#0F172A] to-[#050816] p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[85vh] text-left z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-[#94A3B8] hover:text-[#F8FAFC] transition-colors p-1"
              >
                <X size={20} />
              </button>

              {/* Title & Badge */}
              <div className="flex flex-col gap-1.5 mb-6 pr-6">
                <span className="font-mono text-xs text-[#22D3EE] tracking-widest uppercase">System Specifications</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] font-display">{selectedProject.title}</h3>
              </div>

              {/* Details Body */}
              <div className="flex flex-col gap-6">
                
                {/* Long description */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-[#22D3EE] mb-2">Scope & Overview</h4>
                  <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-6">
                  
                  {/* Architecture & Stack */}
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#22D3EE] mb-3 flex items-center gap-1.5">
                      <Cpu size={14} />
                      <span>Architecture & Core Stack</span>
                    </h4>
                    <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed mb-4">
                      {selectedProject.architecture}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-[#F8FAFC]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#22D3EE] mb-3 flex items-center gap-1.5">
                      <Award size={14} />
                      <span>Key Features Built</span>
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {selectedProject.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-[#94A3B8] leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/5 pt-6">
                  
                  {/* Challenges */}
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#EF4444] mb-2 flex items-center gap-1.5">
                      <ShieldAlert size={14} />
                      <span>Technical Challenge Faced</span>
                    </h4>
                    <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>

                  {/* Lessons learned */}
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-widest text-[#22C55E] mb-2 flex items-center gap-1.5">
                      <Award size={14} />
                      <span>Lessons & Knowledge Gained</span>
                    </h4>
                    <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
                      {selectedProject.lessonsLearned}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex justify-end gap-4 border-t border-white/5 pt-6 mt-4">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 hover:border-white/20 text-xs font-semibold text-[#F8FAFC] transition-colors interactive"
                    >
                      <GithubIcon size={14} />
                      <span>Explore Codebase</span>
                    </a>
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-xs font-semibold text-[#F8FAFC] transition-all duration-300 shadow-[0_0_15px_rgba(124,58,237,0.2)] interactive"
                    >
                      <ExternalLink size={14} />
                      <span>Open Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
