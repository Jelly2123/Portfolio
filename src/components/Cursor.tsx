import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const outerX = useSpring(mouseX, { damping: 30, stiffness: 150 });
  const outerY = useSpring(mouseY, { damping: 30, stiffness: 150 });

  const innerX = useSpring(mouseX, { damping: 20, stiffness: 450 });
  const innerY = useSpring(mouseY, { damping: 20, stiffness: 450 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const handleHoverEvents = () => {
      const clickables = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .interactive');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    handleHoverEvents();

    const observer = new MutationObserver(handleHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [hidden, mouseX, mouseY]);

  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouch || hidden) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#22D3EE]/70 pointer-events-none z-[9998] mix-blend-screen"
        style={{
          x: outerX,
          y: outerY,
          scale: hovered ? 1.8 : 1,
          backgroundColor: hovered ? 'rgba(34, 211, 238, 0.15)' : 'rgba(34, 211, 238, 0)',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED] pointer-events-none z-[9999]"
        style={{
          x: innerX,
          y: innerY,
          scale: hovered ? 0.5 : 1,
          backgroundColor: hovered ? '#22D3EE' : '#7C3AED',
        }}
      />
    </>
  );
}
