import { motion } from 'framer-motion';
import { GraduationCap, Brain, Briefcase, Cpu } from 'lucide-react';
import { experienceRoadmap } from '../data/portfolioData';

export default function Journey() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="text-[#22D3EE]" size={18} />;
      case 'learning':
        return <Brain className="text-[#7C3AED]" size={18} />;
      case 'internship':
        return <Briefcase className="text-[#22D3EE]" size={18} />;
      case 'development':
        return <Cpu className="text-[#7C3AED]" size={18} />;
      default:
        return <Cpu className="text-[#94A3B8]" size={18} />;
    }
  };

  const getBorderColor = (type: string) => {
    return type === 'education' || type === 'internship'
      ? 'border-[#22D3EE]/30 hover:border-[#22D3EE]'
      : 'border-[#7C3AED]/30 hover:border-[#7C3AED]';
  };

  return (
    <section
      id="journey-roadmap"
      className="relative min-h-screen flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-20">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Career & Learning Journey
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Timeline Roadmap */}
        <div className="relative border-l border-white/10 md:border-l-0 max-w-4xl mx-auto pl-8 md:pl-0">
          
          {/* Vertical spine in center (Desktop) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          {/* Roadmap Milestones */}
          <div className="flex flex-col gap-12">
            {experienceRoadmap.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start justify-between relative md:gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Circle (aligned with spine) */}
                  <div className="absolute left-[-41px] md:left-1/2 w-6 h-6 rounded-full bg-[#050816] border-2 border-white/20 flex items-center justify-center -translate-x-1/2 z-10">
                    <span className={`w-2 h-2 rounded-full ${
                      milestone.type === 'education' || milestone.type === 'internship' ? 'bg-[#22D3EE]' : 'bg-[#7C3AED]'
                    }`} />
                  </div>

                  {/* Empty spacer side (Desktop) */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Interactive Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className={`w-full md:w-[45%] rounded-2xl border bg-[#0F172A]/10 p-6 backdrop-blur-md text-left transition-all duration-300 ${getBorderColor(
                      milestone.type
                    )}`}
                  >
                    {/* Header info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                          {getIcon(milestone.type)}
                        </div>
                        <span className="font-mono text-xs text-[#22D3EE] font-bold uppercase tracking-wider">
                          {milestone.type}
                        </span>
                      </div>
                      
                      <span className="font-mono text-xs text-[#94A3B8] font-bold bg-[#0F172A] border border-white/10 px-2.5 py-1 rounded">
                        {milestone.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight mb-2 font-display">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
