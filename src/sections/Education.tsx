
import { GraduationCap, BookOpen, Landmark, Award } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';

export default function Education() {
  const getIcon = (degree: string) => {
    if (degree.includes('B.Sc')) return <GraduationCap className="text-[#22D3EE]" size={22} />;
    if (degree.includes('Diploma')) return <Award className="text-[#7C3AED]" size={22} />;
    return <Landmark className="text-[#94A3B8]" size={22} />;
  };

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden border-b border-white/5"
    >
      {/* Decorative ambient highlights */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#7C3AED]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#22D3EE]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">Qualifications</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Educational Journey
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Grid Layout of Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((item, idx) => (
            <GlassCard
              key={idx}
              tiltEffect={true}
              className="flex flex-col justify-between border-white/5 bg-[#0F172A]/20 backdrop-blur-md"
            >
              <div>
                {/* Header info */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getIcon(item.degree)}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight">{item.degree}</h3>
                      <p className="text-xs font-mono text-[#94A3B8]">{item.institution}</p>
                    </div>
                  </div>
                  
                  {/* Score badge */}
                  {item.score && (
                    <span className="px-2.5 py-1 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/5 text-[#22D3EE] text-[10px] font-mono tracking-widest uppercase">
                      {item.score}
                    </span>
                  )}
                </div>

                {/* Duration/Timeline */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] mb-4 text-left">
                  <BookOpen size={12} />
                  <span>Timeline: {item.duration}</span>
                </div>

                {/* Details list */}
                <ul className="flex flex-col gap-3 text-left">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-[#94A3B8] leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#7C3AED] shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
