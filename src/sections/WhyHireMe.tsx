
import { motion } from 'framer-motion';
import { Server, Brain, Smartphone, Zap, Code, ShieldCheck } from 'lucide-react';
import { whyHireMeCards } from '../data/portfolioData';

export default function WhyHireMe() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="text-[#7C3AED]" size={24} />;
      case 'Brain':
        return <Brain className="text-[#22D3EE]" size={24} />;
      case 'Smartphone':
        return <Smartphone className="text-[#22D3EE]" size={24} />;
      case 'Zap':
        return <Zap className="text-[#7C3AED]" size={24} />;
      case 'Code':
        return <Code className="text-[#7C3AED]" size={24} />;
      case 'ShieldCheck':
        return <ShieldCheck className="text-[#22D3EE]" size={24} />;
      default:
        return <ShieldCheck className="text-[#94A3B8]" size={24} />;
    }
  };

  return (
    <section
      id="why-hire-me"
      className="relative flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden border-b border-white/5"
    >
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#22D3EE]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">Value Proposition</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Why Partner With Me
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyHireMeCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/5 bg-[#0F172A]/20 p-6 md:p-8 backdrop-blur-md shadow-xl text-left flex flex-col transition-all duration-300 hover:border-[#7C3AED]/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(124,58,237,0.1)]"
            >
              {/* Icon frame */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {getIcon(card.icon)}
              </div>

              <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight mb-2 font-display">
                {card.title}
              </h3>
              
              <p className="text-xs md:text-sm text-[#94A3B8] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
