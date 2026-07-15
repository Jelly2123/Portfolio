import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Layers,
  GitMerge,
  Globe,
  Sliders,
  Smartphone,
  Database,
  Laptop,
  Cpu
} from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Skills() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode':
        return <Code className="text-[#22D3EE]" size={20} />;
      case 'Server':
        return <Server className="text-[#7C3AED]" size={20} />;
      case 'Layers':
        return <Layers className="text-[#7C3AED]" size={20} />;
      case 'GitMerge':
        return <GitMerge className="text-[#7C3AED]" size={20} />;
      case 'Html5':
        return <Globe className="text-[#22D3EE]" size={20} />;
      case 'Code':
        return <Code className="text-[#22D3EE]" size={20} />;
      case 'Wind':
        return <Sliders className="text-[#22D3EE]" size={20} />;
      case 'Smartphone':
        return <Smartphone className="text-[#22D3EE]" size={20} />;
      case 'Database':
        return <Database className="text-[#a855f7]" size={20} />;
      case 'Table':
        return <Sliders className="text-[#a855f7]" size={20} />;
      case 'Github':
        return <GithubIcon size={20} className="text-[#a855f7]" />;
      case 'Laptop':
        return <Laptop className="text-[#a855f7]" size={20} />;
      default:
        return <Cpu className="text-[#94A3B8]" size={20} />;
    }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">Abilities</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Technical Skillset
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: gIdx * 0.15 }}
              className="rounded-2xl border border-white/5 bg-[#0F172A]/10 p-6 md:p-8 backdrop-blur-md shadow-xl flex flex-col justify-start text-left"
            >
              <h3 className="text-xl font-bold text-[#F8FAFC] mb-6 flex items-center gap-2 pb-3 border-b border-white/5 font-display">
                <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                {group.category}
              </h3>

              <div className="flex flex-col gap-6">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-2">
                    
                    {/* Skill Info */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-[#F8FAFC] font-medium">
                        {getIcon(skill.icon)}
                        <span>{skill.name}</span>
                      </div>
                      <span className="font-mono text-[#22D3EE] text-xs font-semibold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden border border-white/5 relative">
                      {/* Animated Glow Progress Bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: sIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
