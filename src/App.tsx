import { useEffect, useState } from 'react';
import Lenis from 'lenis';

// Global Overlay Components
import Cursor from './components/Cursor';
import Spotlight from './components/Spotlight';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

// Section Components
import Hero from './sections/Hero';
import MyStory from './sections/MyStory';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Internship from './sections/Internship';
import Projects from './sections/Projects';
import Journey from './sections/Journey';
import Achievements from './sections/Achievements';
import WhyHireMe from './sections/WhyHireMe';
import Contact from './sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (loading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#050816] text-[#f8fafc] overflow-hidden antialiased">
      {/* Background & Interactive Layers */}
      <Particles />
      <Spotlight />
      <Cursor />
      
      {/* Navigation Header */}
      <Navbar />

      {/* Narrative Section Segments */}
      <main className="relative z-20 w-full">
        {/* Home */}
        <Hero />
        
        {/* About Segments */}
        <MyStory />
        <WhyHireMe />
        <Education />
        
        {/* Journey & Practice */}
        <Internship />
        <Journey />
        
        {/* Abilities & Milestones */}
        <Skills />
        <Achievements />
        
        {/* Projects */}
        <Projects />
        
        {/* Contact */}
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer className="relative z-20 border-t border-white/5 bg-[#050816] py-10 px-6 text-center text-xs font-mono text-[#94A3B8]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Pragya Kashyap. All Rights Reserved.</p>
          <p>
            Designed & Engineered with{' '}
            <span className="text-[#7C3AED]">Laravel</span> principles &{' '}
            <span className="text-[#22D3EE]">Vite+React</span> speed.
          </p>
        </div>
      </footer>
    </div>
  );
}
