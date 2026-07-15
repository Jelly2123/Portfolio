import { useEffect, useRef } from 'react';

export default function Spotlight() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const { clientX, clientY } = e;
      divRef.current.style.background = `radial-gradient(600px circle at ${clientX}px ${clientY}px, rgba(124, 58, 237, 0.07), transparent 80%)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed inset-0 z-30 transition-all duration-150"
      style={{
        background: 'radial-gradient(600px circle at 0px 0px, transparent, transparent)',
      }}
    />
  );
}
