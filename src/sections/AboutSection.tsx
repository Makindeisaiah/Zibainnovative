import React from 'react';
import {
  CheckCircle2,
  FileText,
  Users,
  Globe,
  Calendar,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import {
  smoothEase,
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
} from '../components/motion/MotionUtils';

export const AboutSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const checklist = [
    'Scalable Digital Solutions',
    'Strategic Technology Consulting',
    'Product-Focused Innovation',
    'Long-Term Business Growth',
  ];

  const stats = [
    {
      icon: <FileText className="w-6 h-6 text-[#22C55E] stroke-[2.2]" />,
      number: '120+',
      label: 'Project Delivered',
    },
    {
      icon: <Users className="w-6 h-6 text-[#22C55E] stroke-[2.2]" />,
      number: '40+',
      label: 'Business Clients',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#22C55E] stroke-[2.2]" />,
      number: '10+',
      label: 'Industries Served',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#22C55E] stroke-[2.2]" />,
      number: '5+',
      label: 'Years Experience',
    },
  ];

  return (
    <Section
      id="about"
      className="bg-white text-zinc-900 py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-[#EEF2F6]"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column: Visual Image with Floating Overlay Card */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll delay={0.1} yOffset={24} xOffset={-12}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Team Photo Container */}
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.1)] aspect-[4/5] sm:aspect-[4/4.8] w-full bg-zinc-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                    alt="Ziba Innovative diverse tech team collaborating over a laptop"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Floating Bottom Card: People. Purpose. Progress. */}
                <motion.div
                  id="about-floating-badge"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.25, ease: smoothEase }}
                  className="relative sm:absolute sm:-bottom-8 sm:-left-6 sm:right-6 lg:-bottom-10 lg:-left-8 lg:right-4 mt-6 sm:mt-0 bg-white rounded-2xl p-5 sm:p-6 shadow-[0_14px_45px_rgba(0,0,0,0.12)] border border-[#E9ECEF] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.16)]"
                >
                  <div className="flex items-start gap-4">
                    {/* Green Icon Box */}
                    <div className="w-11 h-11 rounded-xl bg-[#EBFDF2] flex items-center justify-center text-[#22C55E] shrink-0 mt-0.5 shadow-sm">
                      <Users className="w-5 h-5 stroke-[2.4]" />
                    </div>

                    {/* Text Content */}
                    <div>
                      <h4 className="text-[17px] sm:text-[18px] font-bold text-[#0E1322] tracking-tight mb-1.5">
                        People. Purpose. Progress.
                      </h4>
                      <p className="text-[13px] sm:text-[13.5px] text-[#5F6D7E] leading-relaxed font-normal">
                        We are a team of problem-solvers, thinkers, and builders passionate
                        about creating meaningful digital solutions that make an impact.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Content, Checklist, and Metrics */}
          <div className="lg:col-span-7 flex flex-col justify-center pt-4 lg:pt-0">
            {/* Eyebrow with green dashes */}
            <RevealOnScroll delay={0.05} yOffset={16}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
                <span className="text-[12px] sm:text-[13px] font-bold text-[#22C55E] tracking-[0.18em] uppercase">
                  About Us
                </span>
                <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
              </div>
            </RevealOnScroll>

            {/* Main Headline */}
            <RevealOnScroll delay={0.12} yOffset={20}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] font-extrabold text-[#0E1322] tracking-[-0.035em] leading-[1.15] max-w-2xl">
                Your Technology Partner for Modern Digital Growth
              </h2>
            </RevealOnScroll>

            {/* Supporting Description */}
            <RevealOnScroll delay={0.18} yOffset={18}>
              <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#5F6D7E] leading-relaxed max-w-2xl font-normal">
                We help businesses build scalable digital products, optimize operations, and
                accelerate growth through modern software solutions and strategic technology
                services.
              </p>
            </RevealOnScroll>

            {/* Feature Checklist with Stagger */}
            <StaggerContainer
              staggerDelay={0.07}
              delayChildren={0.2}
              className="mt-8 sm:mt-9 space-y-3.5 sm:space-y-4"
            >
              {checklist.map((item, idx) => (
                <StaggerItem key={idx} yOffset={12} className="flex items-center gap-3.5 group">
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 stroke-[2.2] transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-[15px] sm:text-[16px] font-semibold text-[#1E293B] tracking-tight">
                    {item}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Bottom 4-Column Stats Grid with Stagger */}
            <StaggerContainer
              id="about-metrics-grid"
              staggerDelay={0.08}
              delayChildren={0.3}
              className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-[#EEF2F6] grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 lg:gap-6"
            >
              {stats.map((stat, idx) => (
                <StaggerItem
                  key={idx}
                  yOffset={16}
                  className="flex flex-col items-start pr-2 sm:pr-4 group"
                >
                  {/* Stat Icon */}
                  <div className="mb-3.5 p-2 rounded-lg bg-[#F0FDF4] inline-flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    {stat.icon}
                  </div>

                  {/* Stat Value */}
                  <div className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-[#0E1322] tracking-tight leading-none group-hover:text-[#22C55E] transition-colors duration-200">
                    {stat.number}
                  </div>

                  {/* Stat Label */}
                  <div className="mt-2 text-[13px] sm:text-[14px] font-medium text-[#64748B] tracking-normal leading-snug">
                    {stat.label}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </Section>
  );
};
