import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { achievementStats } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = document.querySelectorAll('.counter-val');
      
      counters.forEach((counter) => {
        const targetVal = parseInt(counter.getAttribute('data-target') || '0', 10);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: targetVal,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: counter,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            counter.textContent = String(Math.floor(obj.val));
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden border-b border-white/5"
    >
      {/* Background glow ambient circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-[#7C3AED]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">Metrics</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Milestones In Numbers
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Counters grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievementStats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/5 bg-[#0F172A]/10 p-6 md:p-8 backdrop-blur-md shadow-xl text-center flex flex-col justify-center transition-all duration-300 hover:border-[#7C3AED]/20 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]"
            >
              <div className="flex items-baseline justify-center font-display text-4xl md:text-6xl font-extrabold text-gradient-cyan mb-2">
                <span
                  className="counter-val"
                  data-target={stat.value}
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="text-lg md:text-xl font-bold ml-0.5 text-[#22D3EE]">
                    {stat.suffix}
                  </span>
                )}
              </div>

              <h3 className="text-[#F8FAFC] font-semibold text-sm md:text-base mb-1 tracking-tight">
                {stat.title}
              </h3>
              
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
