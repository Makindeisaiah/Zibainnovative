import React from 'react';
import { ArrowRight, ShieldCheck, Box, Clock, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { smoothEase } from '../components/motion/MotionUtils';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="hero"
      className="relative bg-[#06090c] text-white pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-between"
    >
      {/* Background Lighting & Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Soft radial emerald ambient glow behind the right side */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0.14 } : { opacity: 0, scale: 0.9 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.14 }
              : {
                  opacity: [0.12, 0.18, 0.12],
                  scale: [1, 1.06, 1],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-20 top-1/4 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-[#3bd46c] opacity-[0.14] blur-[120px] transform translate-x-1/4 -translate-y-1/4"
        />
        <div
          className="absolute right-10 bottom-10 w-[400px] h-[400px] rounded-full bg-[#186638] opacity-[0.18] blur-[100px]"
        />

        {/* Wavy Cybernetic / Fiber-optic Emerald Green Mesh Lines */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0.9 } : { opacity: 0, scale: 0.97 }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.9 }
              : {
                  opacity: 0.9,
                  scale: 1,
                  y: [0, -6, 0],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  opacity: { duration: 1, ease: smoothEase },
                  scale: { duration: 1.2, ease: smoothEase },
                  y: { repeat: Infinity, duration: 14, ease: 'easeInOut' },
                }
          }
          className="absolute right-0 top-0 w-full h-full lg:w-[75%]"
        >
          <svg
            className="w-full h-full object-cover object-right"
            viewBox="0 0 1000 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMid slice"
          >
            <defs>
              <linearGradient id="heroGreenGlow" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#49E378" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#34D399" stopOpacity="0.55" />
                <stop offset="80%" stopColor="#059669" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#064e3b" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="brightGreenGlow" x1="100%" y1="30%" x2="20%" y2="90%">
                <stop offset="0%" stopColor="#86EFAC" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#49E378" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
              </linearGradient>
              <radialGradient id="meshCenterGlow" cx="80%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#49E378" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#06090c" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ambient mesh center glow */}
            <rect width="1000" height="800" fill="url(#meshCenterGlow)" />

            {/* Sweeping 3D curved green light ribbons */}
            {Array.from({ length: 28 }).map((_, i) => {
              const startY = -40 + i * 18;
              const ctrl1X = 920 - i * 8;
              const ctrl1Y = 220 + i * 12;
              const ctrl2X = 580 - i * 12;
              const ctrl2Y = 480 + i * 10;
              const endX = 200 - i * 15;
              const endY = 780 + i * 6;
              const strokeWidth = i === 12 || i === 14 || i === 16 ? 2.2 : i % 2 === 0 ? 1.4 : 0.9;
              const opacity = Math.sin((i / 28) * Math.PI) * 0.75 + 0.15;

              return (
                <path
                  key={i}
                  d={`M 1040 ${startY} C ${ctrl1X} ${ctrl1Y}, ${ctrl2X} ${ctrl2Y}, ${endX} ${endY}`}
                  stroke={i >= 10 && i <= 18 ? "url(#brightGreenGlow)" : "url(#heroGreenGlow)"}
                  strokeWidth={strokeWidth}
                  strokeOpacity={opacity}
                  fill="none"
                />
              );
            })}

            {/* Intersecting cross waves for depth and density */}
            {Array.from({ length: 18 }).map((_, i) => {
              const startY = 100 + i * 26;
              const ctrl1X = 850 - i * 6;
              const ctrl1Y = 360 + i * 14;
              const ctrl2X = 450 - i * 14;
              const ctrl2Y = 620 + i * 8;
              const endX = 80 - i * 10;
              const endY = 820;
              const opacity = Math.sin((i / 18) * Math.PI) * 0.55 + 0.1;

              return (
                <path
                  key={`cross-${i}`}
                  d={`M 1020 ${startY} C ${ctrl1X} ${ctrl1Y}, ${ctrl2X} ${ctrl2Y}, ${endX} ${endY}`}
                  stroke="url(#heroGreenGlow)"
                  strokeWidth={i % 3 === 0 ? 1.8 : 1.0}
                  strokeOpacity={opacity}
                  fill="none"
                />
              );
            })}
          </svg>
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <Container size="wide" className="relative z-10 my-auto">
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: smoothEase }}
            className="inline-flex items-center gap-2 rounded-full border border-[#173a25] bg-[#091a11]/90 px-4 py-1.5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(73,227,120,0.12)]"
          >
            <span className="text-[13px] sm:text-[14px] font-medium text-[#49E378] tracking-wide">
              Digital Solutions. Real Impact.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: smoothEase }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[74px] font-extrabold tracking-[-0.035em] leading-[1.08] text-white"
          >
            <span>Building Scalable</span>
            <br />
            <span>Digital Solutions</span>
            <br />
            <span className="text-[#49E378] inline-block drop-shadow-[0_0_35px_rgba(73,227,120,0.4)]">
              For Modern Businesses
            </span>
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: smoothEase }}
            className="mt-6 sm:mt-7 text-base sm:text-lg lg:text-[19px] text-[#9EA7B0] leading-relaxed max-w-2xl font-normal"
          >
            We help business transform complex ideas into secure, scalable, and user-focused digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: smoothEase }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Button
              id="hero-cta-primary"
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              iconPosition="right"
              className="shadow-[0_0_24px_rgba(73,227,120,0.35)] hover:shadow-[0_0_32px_rgba(73,227,120,0.55)] px-7 sm:px-8 py-3.5 sm:py-4 text-[15px] hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Consultation
            </Button>

            <Button
              id="hero-cta-secondary"
              href="#portfolio"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              iconPosition="right"
              className="bg-[#0A1014]/90 hover:bg-[#121B21] border-[#1D2B33] hover:border-[#2F4450] px-7 sm:px-8 py-3.5 sm:py-4 text-[15px] hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Our Work
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Value Propositions Feature Strip */}
      <div className="relative z-10 mt-16 sm:mt-20 lg:mt-24 border-t border-[#16242B]/80 pt-8 sm:pt-10">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
            {/* Feature 1 */}
            <motion.div
              id="feature-secure"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: smoothEase }}
              className="flex items-start gap-3.5 group p-2 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="text-[#49E378] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.9]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[16px] sm:text-[17px] tracking-tight">
                  Secure & Reliable
                </h3>
                <p className="text-sm text-[#87929D] mt-1 leading-snug">
                  Enterprise-grade security you can trust.
                </p>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              id="feature-scalable"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: smoothEase }}
              className="flex items-start gap-3.5 group p-2 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="text-[#49E378] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                <Box className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.9]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[16px] sm:text-[17px] tracking-tight">
                  Scalable Solutions
                </h3>
                <p className="text-sm text-[#87929D] mt-1 leading-snug">
                  Built to grow with your business.
                </p>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              id="feature-delivery"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8, ease: smoothEase }}
              className="flex items-start gap-3.5 group p-2 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="text-[#49E378] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.9]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[16px] sm:text-[17px] tracking-tight">
                  On-Time Delivery
                </h3>
                <p className="text-sm text-[#87929D] mt-1 leading-snug">
                  We deliver on time, every time
                </p>
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              id="feature-team"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9, ease: smoothEase }}
              className="flex items-start gap-3.5 group p-2 rounded-xl transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="text-[#49E378] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.9]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[16px] sm:text-[17px] tracking-tight">
                  Expert Team
                </h3>
                <p className="text-sm text-[#87929D] mt-1 leading-snug">
                  Skilled professionals driving your success.
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  );
};
