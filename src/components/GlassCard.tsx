import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tiltEffect?: boolean;
}

export default function GlassCard({ children, className = '', tiltEffect = true }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const degX = -(mouseY / (height / 2)) * 8;
    const degY = (mouseX / (width / 2)) * 8;

    setRotateX(degX);
    setRotateY(degY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`relative rounded-2xl border border-white/10 bg-[#0F172A]/40 p-6 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-[#7C3AED]/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] ${className}`}
    >
      <div style={{ transform: 'translateZ(15px)' }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}
