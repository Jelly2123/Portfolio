import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please write a message.');
      return;
    }

    setLoading(true);

    // Simulate sending message API
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Trigger premium confetti burst!
      confetti({
        particleCount: 140,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#7C3AED', '#22D3EE', '#F8FAFC']
      });

      // Clear success notification after 5s
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center bg-[#050816] px-6 py-24 overflow-hidden"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#7C3AED]/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#22D3EE]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-20">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-[#22D3EE] tracking-[0.3em] uppercase">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-[#F8FAFC]">
            Contact Me
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] mx-auto mt-4" />
        </div>

        {/* Contact Split Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: CTA & Info */}
          <div className="lg:col-span-5 text-left flex flex-col justify-start">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-6 font-display">
              Let's Build Something <span className="text-gradient">Amazing</span> Together
            </h3>
            
            <p className="text-base text-[#94A3B8] leading-relaxed mb-8">
              Whether you want to discuss a new Laravel backend role, review a database schema, 
              or simply say hello—feel free to reach out. I will get back to you within 24 hours.
            </p>

            {/* Direct details */}
            <div className="flex flex-col gap-4 mb-8">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-[#22D3EE] transition-colors font-mono"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <span>{personalInfo.email}</span>
              </a>
            </div>

            {/* Links and Resume */}
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase font-mono tracking-widest text-[#94A3B8]">Social Networks</span>
              
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 hover:border-[#22D3EE]/30 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-all interactive"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F172A] border border-white/10 hover:border-[#22D3EE]/30 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] transition-all interactive"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED]/20 to-[#22D3EE]/20 border border-white/10 hover:border-[#22D3EE]/30 text-xs font-mono text-[#F8FAFC] hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all interactive"
                >
                  <FileText size={14} />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#0F172A]/20 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative">
              
              <h4 className="text-xs font-mono text-[#22D3EE] tracking-widest uppercase text-left mb-6">
                Send A Message
              </h4>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                
                {/* Floating Labels Inputs */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xs font-mono text-[#94A3B8]">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#050816]/50 text-[#F8FAFC] text-sm focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] transition-all"
                    placeholder="Enter name..."
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-xs font-mono text-[#94A3B8]">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#050816]/50 text-[#F8FAFC] text-sm focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] transition-all"
                    placeholder="Enter email..."
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xs font-mono text-[#94A3B8]">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-[#050816]/50 text-[#F8FAFC] text-sm focus:border-[#7C3AED] focus:outline-none focus:ring-1 focus:ring-[#7C3AED] transition-all resize-none"
                    placeholder="Type details..."
                  />
                </div>

                {/* Feedback overlays */}
                <AnimatePresence mode="wait">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-xs"
                    >
                      <AlertCircle size={14} className="shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}

                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3 rounded-lg bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-xs"
                    >
                      <CheckCircle size={14} className="shrink-0" />
                      <span>Message received successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#22D3EE] text-[#F8FAFC] font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] disabled:opacity-50 transition-all duration-300 transform active:scale-[0.98] cursor-pointer interactive"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
