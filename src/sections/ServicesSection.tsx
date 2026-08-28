import React from 'react';
import {
  Code2,
  Cloud,
  Layers,
  ShoppingBag,
  Users2,
  UserCheck,
  TrendingUp,
} from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
} from '../components/motion/MotionUtils';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      idNumber: '01',
      icon: <Code2 className="w-5 h-5 stroke-[2.2]" />,
      title: 'Custom Software Development',
      description:
        'We build powerful, scalable, software tailored to your unique business needs.',
      features: [
        'Scalable Digital Solutions',
        'Strategic Technology Consulting',
        'Product-Focused Innovation',
      ],
      illustration: (
        <div className="relative w-28 h-24 flex items-center justify-center">
          {/* Laptop Base */}
          <svg viewBox="0 0 120 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Screen frame */}
            <rect x="18" y="12" width="84" height="54" rx="4" fill="#1E293B" />
            <rect x="22" y="16" width="76" height="46" rx="2" fill="#0F172A" />
            {/* Code Lines inside screen */}
            <line x1="28" y1="24" x2="48" y2="24" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="52" y1="24" x2="68" y2="24" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="32" x2="60" y2="32" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="64" y1="32" x2="84" y2="32" stroke="#F472B6" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="40" x2="72" y2="40" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="48" x2="50" y2="48" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
            {/* Laptop Base / Keyboard */}
            <path d="M10 66L110 66L102 74L18 74L10 66Z" fill="#CBD5E1" />
            <rect x="48" y="66" width="24" height="3" rx="1.5" fill="#94A3B8" />
          </svg>
          {/* Green Code Badge */}
          <div className="absolute -bottom-1 right-0 bg-[#22C55E] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow">
            &lt;/&gt;
          </div>
        </div>
      ),
    },
    {
      idNumber: '02',
      icon: <Cloud className="w-5 h-5 stroke-[2.2]" />,
      title: 'Cloud Infrastructure Solutions',
      description:
        'We design, migrate, and manage cloud systems that ensure performance, security, and cost efficiency.',
      features: [
        'Cloud Migration',
        'Scalable Infrastructure',
        '24/7 Monitoring & Support',
      ],
      illustration: (
        <div className="relative w-28 h-24 flex items-center justify-center">
          <svg viewBox="0 0 120 100" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Green connected grid nodes */}
            <line x1="25" y1="78" x2="60" y2="78" stroke="#86EFAC" strokeWidth="2" />
            <line x1="60" y1="78" x2="95" y2="78" stroke="#86EFAC" strokeWidth="2" />
            <circle cx="25" cy="78" r="4" fill="#22C55E" />
            <circle cx="95" cy="78" r="4" fill="#22C55E" />
            {/* Isometric Server Tower */}
            <rect x="42" y="38" width="36" height="42" rx="4" fill="#0F172A" />
            {/* Server Slots */}
            <rect x="46" y="44" width="28" height="6" rx="1.5" fill="#334155" />
            <circle cx="50" cy="47" r="1.5" fill="#22C55E" />
            <circle cx="54" cy="47" r="1.5" fill="#38BDF8" />
            <rect x="46" y="54" width="28" height="6" rx="1.5" fill="#334155" />
            <circle cx="50" cy="57" r="1.5" fill="#22C55E" />
            <circle cx="54" cy="57" r="1.5" fill="#F59E0B" />
            <rect x="46" y="64" width="28" height="6" rx="1.5" fill="#334155" />
            <circle cx="50" cy="67" r="1.5" fill="#22C55E" />
            {/* Cloud on Top with Upload Arrow */}
            <path
              d="M50 32C46 32 43 35 43 39C41 40 40 42 40 44C40 47 43 49 46 49H74C77 49 80 47 80 44C80 41 78 39 75 39C75 34 70 30 65 30C62 30 59 31 58 33C56 32 53 32 50 32Z"
              fill="#F8FAFC"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
            <path
              d="M60 44L60 36M60 36L56 40M60 36L64 40"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ),
    },
    {
      idNumber: '03',
      icon: <Layers className="w-5 h-5 stroke-[2.2]" />,
      title: 'SaaS Product Development',
      description:
        'We create innovation, SaaS product that are reliable secure, and built to scale.',
      features: [
        'MVP Development',
        'Scalable SaaS Solutions',
        'Continuous Improvement',
      ],
      illustration: (
        <div className="relative w-28 h-24 flex items-center justify-center">
          <svg viewBox="0 0 120 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Dashboard Surface */}
            <rect
              x="16"
              y="14"
              width="88"
              height="62"
              rx="6"
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            {/* Left sidebar nav */}
            <rect x="20" y="18" width="16" height="54" rx="3" fill="#0F172A" />
            <circle cx="28" cy="26" r="2.5" fill="#22C55E" />
            <circle cx="28" cy="36" r="2" fill="#64748B" />
            <circle cx="28" cy="44" r="2" fill="#64748B" />
            <circle cx="28" cy="52" r="2" fill="#64748B" />
            {/* Stat Cards */}
            <rect x="42" y="22" width="26" height="16" rx="2" fill="#F8FAFC" stroke="#E2E8F0" />
            <line x1="46" y1="28" x2="58" y2="28" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
            <line x1="46" y1="33" x2="62" y2="33" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="72" y="22" width="26" height="16" rx="2" fill="#F8FAFC" stroke="#E2E8F0" />
            <line x1="76" y1="28" x2="88" y2="28" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
            <line x1="76" y1="33" x2="92" y2="33" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
            {/* Bar Charts */}
            <rect x="44" y="54" width="6" height="14" rx="1.5" fill="#E2E8F0" />
            <rect x="54" y="48" width="6" height="20" rx="1.5" fill="#22C55E" />
            <rect x="64" y="44" width="6" height="24" rx="1.5" fill="#3B82F6" />
            <rect x="74" y="50" width="6" height="18" rx="1.5" fill="#22C55E" />
            <rect x="84" y="42" width="6" height="26" rx="1.5" fill="#0F172A" />
          </svg>
        </div>
      ),
    },
    {
      idNumber: '04',
      icon: <ShoppingBag className="w-5 h-5 stroke-[2.2]" />,
      title: 'Intelligent Commerce Solutions',
      description:
        'We build smart eCommerce platform that drive sales and enhance customer experiences.',
      features: [
        'Customer eCommerce',
        'Secure Payments',
        'Conversion Optimization',
      ],
      illustration: (
        <div className="relative w-28 h-24 flex items-center justify-center">
          <svg viewBox="0 0 120 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Green Wire Shopping Cart */}
            <path
              d="M16 30H26L34 56H68L74 38H30"
              stroke="#22C55E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="38" cy="64" r="3.5" fill="#0F172A" />
            <circle cx="64" cy="64" r="3.5" fill="#0F172A" />
            {/* Mobile Phone Mockup */}
            <rect
              x="62"
              y="14"
              width="40"
              height="64"
              rx="6"
              fill="#FFFFFF"
              stroke="#0F172A"
              strokeWidth="2"
            />
            {/* Phone Screen Elements */}
            <rect x="68" y="20" width="28" height="22" rx="3" fill="#F1F5F9" />
            {/* Product outline in phone */}
            <path
              d="M74 32C78 28 84 28 88 32"
              stroke="#22C55E"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Price tag & add button */}
            <rect x="68" y="46" width="16" height="3" rx="1.5" fill="#0F172A" />
            <rect x="68" y="52" width="22" height="3" rx="1.5" fill="#94A3B8" />
            <rect x="68" y="60" width="28" height="10" rx="3" fill="#22C55E" />
          </svg>
        </div>
      ),
    },
    {
      idNumber: '05',
      icon: <Users2 className="w-5 h-5 stroke-[2.2]" />,
      title: 'Technology Consulting',
      description:
        'We help you make the right technology decisions to accelerate growth and reduce risks.',
      features: [
        'IT Strategy & Roadmap',
        'Digital Transformation',
        'Risks & Performance Analysis',
      ],
      illustration: (
        <div className="relative w-28 h-24 flex items-center justify-center">
          <svg viewBox="0 0 120 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Analytical Graph Board */}
            <rect x="48" y="16" width="56" height="42" rx="4" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
            <path
              d="M56 46L68 38L80 42L94 28"
              stroke="#22C55E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="94" cy="28" r="3" fill="#22C55E" />
            {/* Speech bubble */}
            <rect x="22" y="18" width="22" height="14" rx="4" fill="#EBFDF2" />
            <circle cx="28" cy="25" r="1" fill="#22C55E" />
            <circle cx="33" cy="25" r="1" fill="#22C55E" />
            <circle cx="38" cy="25" r="1" fill="#22C55E" />
            {/* Figures */}
            <circle cx="36" cy="50" r="7" fill="#94A3B8" />
            <path d="M22 72C22 62 28 58 36 58C44 58 50 62 50 72H22Z" fill="#CBD5E1" />
            <circle cx="56" cy="46" r="8" fill="#22C55E" />
            <path d="M42 72C42 60 48 56 56 56C64 56 70 60 70 72H42Z" fill="#16A34A" />
            <circle cx="76" cy="52" r="6.5" fill="#94A3B8" />
            <path d="M64 72C64 63 69 59 76 59C83 59 88 63 88 72H64Z" fill="#CBD5E1" />
          </svg>
        </div>
      ),
    },
    {
      idNumber: '06',
      icon: <UserCheck className="w-5 h-5 stroke-[2.2]" />,
      title: 'HR Management Software',
      description:
        'Streamline your HR operations with smart tools for hiring management, and employee engagement.',
      features: [
        'Recruitment Management',
        'Employee Management',
        'Performance Tracking',
      ],
      illustration: (
        <div className="relative w-28 h-24 flex items-center justify-center">
          <svg viewBox="0 0 120 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Profile Document Card */}
            <rect
              x="26"
              y="14"
              width="68"
              height="64"
              rx="6"
              fill="#FFFFFF"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            {/* Avatar inside card */}
            <circle cx="44" cy="30" r="8" fill="#FEE2E2" />
            <circle cx="44" cy="28" r="4" fill="#EF4444" />
            <path d="M38 36C38 33 41 32 44 32C47 32 50 33 50 36H38Z" fill="#EF4444" />
            {/* Candidate details lines */}
            <rect x="58" y="24" width="28" height="4" rx="2" fill="#0F172A" />
            <rect x="58" y="32" width="20" height="3" rx="1.5" fill="#94A3B8" />
            {/* HR Checklist rows */}
            <rect x="34" y="44" width="52" height="6" rx="2" fill="#F8FAFC" />
            <circle cx="40" cy="47" r="1.5" fill="#22C55E" />
            <line x1="46" y1="47" x2="78" y2="47" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />

            <rect x="34" y="53" width="52" height="6" rx="2" fill="#F8FAFC" />
            <circle cx="40" cy="56" r="1.5" fill="#22C55E" />
            <line x1="46" y1="56" x2="72" y2="56" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />

            <rect x="34" y="62" width="52" height="6" rx="2" fill="#F8FAFC" />
            <circle cx="40" cy="65" r="1.5" fill="#22C55E" />
            <line x1="46" y1="65" x2="80" y2="65" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },
    {
      idNumber: '07',
      icon: <TrendingUp className="w-5 h-5 stroke-[2.2]" />,
      title: 'Sales Funnel Design for Software & Digital Products',
      description:
        'We design high-converting funnels that turn visitors into loyal customers.',
      features: [
        'Funnel Strategy',
        'Landing Page Optimization',
        'Conversion Tracking',
      ],
      illustration: (
        <div className="relative w-28 h-24 flex items-center justify-center">
          <svg viewBox="0 0 120 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Top visitor dots/icons */}
            <circle cx="46" cy="18" r="2.5" fill="#22C55E" />
            <circle cx="60" cy="16" r="2.5" fill="#22C55E" />
            <circle cx="74" cy="18" r="2.5" fill="#22C55E" />
            {/* Layered Funnel Sections */}
            {/* Top Layer */}
            <path d="M32 26H88L80 38H40L32 26Z" fill="#3B82F6" />
            {/* Middle Layer */}
            <path d="M40 40H80L74 52H46L40 40Z" fill="#1D4ED8" />
            {/* Bottom Layer */}
            <path d="M46 54H74L68 64H52L46 54Z" fill="#22C55E" />
            {/* Spout */}
            <rect x="56" y="64" width="8" height="6" fill="#16A34A" />
            {/* Dollar / Conversion coin badge */}
            <circle cx="60" cy="76" r="6.5" fill="#15803D" stroke="#86EFAC" strokeWidth="1.5" />
            <text x="60" y="80" fill="#FFFFFF" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
              $
            </text>
          </svg>
        </div>
      ),
    },
  ];

  return (
    <Section
      id="services"
      className="bg-[#FAFBFC] text-zinc-900 py-20 sm:py-24 lg:py-28 border-t border-[#EEF2F6]"
    >
      <Container size="wide">
        {/* Section Header */}
        <RevealOnScroll delay={0.05} yOffset={20} className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Eyebrow Label with decorative dashes */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#22C55E] tracking-[0.18em] uppercase">
              Our Services
            </span>
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-[#0E1322] tracking-[-0.03em] leading-[1.16]">
            <span>Save Time Managing </span>
            <br className="hidden sm:inline" />
            <span>Your Business With Our </span>
            <span className="text-[#22C55E] inline-block">Best Service</span>
          </h2>

          {/* Supporting Paragraph */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#5F6D7E] leading-relaxed max-w-2xl font-normal">
            We provide end-to-end digital solutions to help you streamline operations,
            improve productivity, and scale your business with confidence.
          </p>
        </RevealOnScroll>

        {/* Services Grid:
            - Desktop (1200px+): 3 columns
            - Tablet (768px - 1199px): 2 columns
            - Mobile (<768px): 1 column
        */}
        <StaggerContainer
          staggerDelay={0.08}
          delayChildren={0.15}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 lg:gap-8"
        >
          {services.map((service) => {
            return (
              <StaggerItem key={service.idNumber} yOffset={24} className="h-full">
                <ServiceCard
                  idNumber={service.idNumber}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  illustration={service.illustration}
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
};
