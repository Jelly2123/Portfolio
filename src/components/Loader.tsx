import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.loader-container', {
          opacity: 0,
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete: onComplete,
        });
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 2.0,
      ease: 'power2.out',
      onUpdate: () => {
        setPercent(Math.floor(obj.val));
      },
    });

    // Stagger letter animations
    gsap.fromTo(
      '.loader-text span',
      { y: 60, opacity: 0, rotateX: -45 },
      { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out' }
    );

    gsap.fromTo(
      '.loader-sub',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );
  }, [onComplete]);

  return (
    <div className="loader-container fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] text-[#F8FAFC]">
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow ambient circle */}
        <div className="absolute w-72 h-72 rounded-full bg-[#7C3AED]/15 blur-3xl -translate-y-4" />

        <h1 className="loader-text text-5xl md:text-7xl font-bold tracking-widest mb-3 font-display relative z-10 flex select-none">
          <span className="inline-block">P</span>
          <span className="inline-block">R</span>
          <span className="inline-block">A</span>
          <span className="inline-block">G</span>
          <span className="inline-block">Y</span>
          <span className="inline-block">A</span>
        </h1>
        
        <p className="loader-sub text-xs md:text-sm tracking-[0.4em] uppercase text-[#22D3EE] font-mono mb-8 relative z-10">
          Laravel Developer Portfolio
        </p>

        {/* Premium loader progress bar */}
        <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative z-10 mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#7C3AED] via-[#22D3EE] to-[#7C3AED] transition-all duration-75"
            style={{ width: `${percent}%` }}
          />
        </div>

        <span className="loader-sub text-xs font-mono text-[#94A3B8] relative z-10">
          {percent}%
        </span>
      </div>
    </div>
  );
}
