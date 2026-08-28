import React, { useState } from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { CheckCircle2 } from 'lucide-react';
import { RevealOnScroll } from '../components/motion/MotionUtils';

export const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <Section
      id="cta"
      className="bg-[#FAFBFC] text-zinc-900 py-20 sm:py-24 lg:py-28"
    >
      <Container size="default">
        {/* White Bordered Form Card with Scroll Reveal */}
        <RevealOnScroll
          yOffset={28}
          duration={0.7}
          className="bg-white rounded-[28px] sm:rounded-[36px] border border-[#E5E9EB] shadow-[0_8px_32px_rgba(0,0,0,0.04)] px-6 sm:px-12 md:px-16 py-14 sm:py-16 md:py-20 text-center max-w-4xl mx-auto"
        >
          <div id="cta-card">
            {/* Eyebrow Label with green decorative dashes */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
              <span className="text-[12px] sm:text-[13px] font-bold text-[#22C55E] tracking-[0.18em] uppercase">
                Let Build Together
              </span>
              <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
            </div>

            {/* Main Display Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#0E1322] tracking-[-0.03em] leading-[1.18] mb-5">
              Ready to Transform Your Business?
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#5F6D7E] leading-relaxed max-w-2xl mx-auto font-normal mb-10 sm:mb-12">
              See how our solutions are helping companies improve efficiency, scale
              operations, and achieve measurable growth.
            </p>

            {/* Submission Form */}
            {submitted ? (
              <div className="bg-[#EBFDF2] border border-[#86EFAC] rounded-2xl p-6 max-w-md mx-auto flex items-center justify-center gap-3 text-[#15803D] animate-fade-in">
                <CheckCircle2 className="w-6 h-6 shrink-0 text-[#22C55E]" />
                <p className="text-sm sm:text-base font-semibold">
                  Thank you! We will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-left">
                <div className="mb-4">
                  <label
                    htmlFor="cta-email"
                    className="block text-xs sm:text-sm font-medium text-[#475569] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@framer.com"
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-[#F1F3F5] text-[#0E1322] placeholder-[#94A3B8] border border-transparent focus:border-[#22C55E] focus:bg-white focus:outline-none transition-all duration-200 text-sm sm:text-base shadow-sm focus:shadow-md"
                  />
                </div>

                <button
                  id="cta-submit-button"
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl bg-[#27272A] hover:bg-[#18181B] active:scale-[0.99] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all duration-200 cursor-pointer mt-2"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </RevealOnScroll>
      </Container>
    </Section>
  );
};
