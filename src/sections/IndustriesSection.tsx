import React from 'react';
import {
  HeartPulse,
  Truck,
  GraduationCap,
  Users2,
} from 'lucide-react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { IndustryCard, IndustryCardProps } from '../components/IndustryCard';

export const IndustriesSection: React.FC = () => {
  const industries: IndustryCardProps[] = [
    {
      id: 'healthcare',
      icon: <HeartPulse className="w-6 h-6 stroke-[2.2]" />,
      title: 'Healthcare',
      description:
        'Secure and efficient healthcare systems that improve patient care and streamline operations.',
      features: [
        'Scalable Digital Solutions',
        'Strategic Technology Consulting',
        'Product-Focused Innovation',
      ],
      illustration: (
        <div className="relative w-28 sm:w-32 h-20 sm:h-22 flex items-center justify-end">
          <svg viewBox="0 0 130 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Medical Clipboard */}
            <rect x="52" y="12" width="60" height="70" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" />
            <rect x="70" y="8" width="24" height="8" rx="2" fill="#94A3B8" />
            <circle cx="82" cy="12" r="2" fill="#475569" />
            {/* Green Cross */}
            <rect x="77" y="24" width="10" height="18" rx="1.5" fill="#22C55E" />
            <rect x="73" y="28" width="18" height="10" rx="1.5" fill="#22C55E" />
            {/* Notes rows */}
            <rect x="62" y="48" width="40" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="62" y="55" width="34" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="62" y="62" width="28" height="3" rx="1.5" fill="#E2E8F0" />
            <rect x="62" y="69" width="36" height="3" rx="1.5" fill="#E2E8F0" />

            {/* Medicine Bottle */}
            <rect x="22" y="42" width="24" height="36" rx="4" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
            <rect x="26" y="36" width="16" height="7" rx="2" fill="#22C55E" />
            {/* Bottle Label */}
            <rect x="24" y="50" width="20" height="18" rx="2" fill="#EBFDF2" />
            <circle cx="34" cy="59" r="4" fill="#22C55E" />

            {/* Stethoscope Tubing Curved */}
            <path
              d="M14 74C14 84 26 86 44 86C64 86 86 84 94 76"
              stroke="#64748B"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="94" cy="76" r="6" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="94" cy="76" r="2.5" fill="#22C55E" />
          </svg>
        </div>
      ),
    },
    {
      id: 'logistics',
      icon: <Truck className="w-6 h-6 stroke-[2.2]" />,
      title: 'Logistics',
      description:
        'Smart logistics and tracking solutions built for speed, accuracy, and efficiency.',
      features: [
        'Real-time Tracking',
        'Route Optimization',
        'Inventory Management',
      ],
      illustration: (
        <div className="relative w-28 sm:w-32 h-20 sm:h-22 flex items-center justify-end">
          <svg viewBox="0 0 130 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Route Map dashed arc & pin */}
            <path
              d="M30 40C50 20 85 24 110 38"
              stroke="#86EFAC"
              strokeWidth="2"
              strokeDasharray="3 3"
            />
            {/* Map Pin */}
            <path
              d="M108 26C108 21.5 111.5 18 116 18C120.5 18 124 21.5 124 26C124 31 116 38 116 38C116 38 108 31 108 26Z"
              fill="#22C55E"
            />
            <circle cx="116" cy="26" r="2.5" fill="#FFFFFF" />

            {/* Delivery Truck Body */}
            {/* Green Cargo Box */}
            <rect x="22" y="32" width="56" height="34" rx="3" fill="#16A34A" />
            <rect x="25" y="35" width="50" height="28" rx="1.5" fill="#22C55E" />
            <line x1="42" y1="35" x2="42" y2="63" stroke="#16A34A" strokeWidth="1.5" />
            <line x1="58" y1="35" x2="58" y2="63" stroke="#16A34A" strokeWidth="1.5" />

            {/* White Truck Cab */}
            <path
              d="M78 40H94L102 52V66H78V40Z"
              fill="#F8FAFC"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            {/* Cab Window */}
            <path d="M82 43H92L97 50H82V43Z" fill="#0F172A" />
            {/* Wheels */}
            <circle cx="36" cy="68" r="6.5" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="36" cy="68" r="2" fill="#E2E8F0" />
            <circle cx="68" cy="68" r="6.5" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="68" cy="68" r="2" fill="#E2E8F0" />
            <circle cx="92" cy="68" r="6.5" fill="#0F172A" stroke="#94A3B8" strokeWidth="2" />
            <circle cx="92" cy="68" r="2" fill="#E2E8F0" />

            {/* Cardboard Boxes on side */}
            <rect x="104" y="56" width="12" height="12" rx="1.5" fill="#D97706" stroke="#B45309" strokeWidth="1" />
            <line x1="104" y1="62" x2="116" y2="62" stroke="#B45309" strokeWidth="1" />
            <rect x="114" y="60" width="10" height="10" rx="1.5" fill="#F59E0B" stroke="#D97706" strokeWidth="1" />
          </svg>
        </div>
      ),
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-6 h-6 stroke-[2.2]" />,
      title: 'Education',
      description:
        'Engaging e-learning platforms and digital tools that empower learners and educators.',
      features: [
        'Online Learning',
        'Course Management',
        'Student Analytics',
      ],
      illustration: (
        <div className="relative w-28 sm:w-32 h-20 sm:h-22 flex items-center justify-end">
          <svg viewBox="0 0 130 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Stack of Books */}
            {/* Bottom Green Book */}
            <rect x="12" y="66" width="34" height="8" rx="2" fill="#16A34A" />
            <path d="M12 66H46V74H12Z" fill="#22C55E" />
            <rect x="14" y="68" width="4" height="4" fill="#FFFFFF" />
            {/* Middle Slate Book */}
            <rect x="16" y="58" width="30" height="8" rx="2" fill="#0F172A" />
            {/* Top Blue Book */}
            <rect x="14" y="50" width="32" height="8" rx="2" fill="#2563EB" />

            {/* Graduation Cap */}
            <polygon points="28,34 10,41 28,48 46,41" fill="#0F172A" />
            <rect x="20" y="43" width="16" height="7" rx="1" fill="#1E293B" />
            {/* Cap Tassel */}
            <line x1="28" y1="41" x2="38" y2="46" stroke="#F59E0B" strokeWidth="1.5" />
            <circle cx="38" cy="48" r="1.5" fill="#F59E0B" />

            {/* Laptop with E-Learning Dashboard */}
            <rect x="46" y="24" width="68" height="46" rx="4" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
            <rect x="49" y="27" width="62" height="40" rx="2" fill="#F8FAFC" />
            {/* Dashboard UI elements in laptop */}
            <rect x="52" y="31" width="16" height="3" rx="1" fill="#22C55E" />
            <rect x="52" y="37" width="24" height="12" rx="2" fill="#EBFDF2" />
            <circle cx="58" cy="43" r="3" fill="#22C55E" />
            <rect x="80" y="37" width="27" height="12" rx="2" fill="#EFF6FF" />
            <rect x="52" y="53" width="55" height="3" rx="1" fill="#E2E8F0" />
            <rect x="52" y="59" width="40" height="3" rx="1" fill="#22C55E" />

            {/* Laptop Base */}
            <path d="M40 70L120 70L112 76L48 76L40 70Z" fill="#CBD5E1" />
            <rect x="72" y="70" width="16" height="2" rx="1" fill="#94A3B8" />

            {/* Little Plant */}
            <path d="M116 66C116 60 120 56 122 56C124 56 128 60 128 66H116Z" fill="#22C55E" />
            <rect x="118" y="66" width="8" height="8" rx="1" fill="#D97706" />
          </svg>
        </div>
      ),
    },
    {
      id: 'hr-recruit',
      icon: <Users2 className="w-6 h-6 stroke-[2.2]" />,
      title: 'HR Recruit',
      description:
        'End-to-end recruitment and HR solutions to help you find, manage, and grow talent.',
      features: [
        'Talent Sourcing',
        'Applicant Tracking',
        'HR Management',
      ],
      illustration: (
        <div className="relative w-28 sm:w-32 h-20 sm:h-22 flex items-center justify-end">
          <svg viewBox="0 0 130 90" fill="none" className="w-full h-auto drop-shadow-md">
            {/* Stack of Folders on Left */}
            <rect x="18" y="44" width="8" height="30" rx="2" fill="#3B82F6" />
            <rect x="28" y="40" width="8" height="34" rx="2" fill="#22C55E" />

            {/* Candidate Resume Profile Card */}
            <rect x="42" y="16" width="66" height="60" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            {/* Candidate Avatar */}
            <circle cx="56" cy="30" r="7" fill="#E2E8F0" />
            <circle cx="56" cy="28" r="3.5" fill="#22C55E" />
            <path d="M50 36C50 33 52.5 32 56 32C59.5 32 62 33 62 36H50Z" fill="#22C55E" />

            {/* Candidate Details */}
            <rect x="68" y="24" width="32" height="4" rx="2" fill="#0F172A" />
            <rect x="68" y="31" width="22" height="3" rx="1.5" fill="#94A3B8" />

            {/* 5 Star Rating */}
            <g transform="translate(48, 40) scale(0.7)">
              <polygon points="10,1 13,7 19,7 14,11 16,17 10,13 4,17 6,11 1,7 7,7" fill="#F59E0B" />
              <polygon points="25,1 28,7 34,7 29,11 31,17 25,13 19,17 21,11 16,7 22,7" fill="#F59E0B" />
              <polygon points="40,1 43,7 49,7 44,11 46,17 40,13 34,17 36,11 31,7 37,7" fill="#F59E0B" />
              <polygon points="55,1 58,7 64,7 59,11 61,17 55,13 49,17 51,11 46,7 52,7" fill="#F59E0B" />
              <polygon points="70,1 73,7 79,7 74,11 76,17 70,13 64,17 66,11 61,7 67,7" fill="#F59E0B" />
            </g>

            {/* Resume Lines */}
            <rect x="48" y="55" width="54" height="3" rx="1.5" fill="#F1F5F9" />
            <rect x="48" y="61" width="46" height="3" rx="1.5" fill="#F1F5F9" />
            <rect x="48" y="67" width="38" height="3" rx="1.5" fill="#F1F5F9" />

            {/* Magnifying Glass */}
            <circle cx="102" cy="66" r="11" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2.5" />
            <circle cx="102" cy="66" r="7" fill="#EBFDF2" />
            <path d="M100 66L102 68L106 64" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="110" y1="74" x2="120" y2="84" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <Section
      id="industries"
      className="bg-white text-zinc-900 py-20 sm:py-24 lg:py-32 border-t border-[#EEF2F6]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          {/* Eyebrow Label with green decorative dashes */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#22C55E] tracking-[0.18em] uppercase">
              Industries We Serve
            </span>
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#0E1322] tracking-[-0.03em] leading-[1.18]">
            Digital Solution Built for Modern Industries
          </h2>

          {/* Supporting Paragraph */}
          <p className="mt-5 text-base sm:text-lg text-[#5F6D7E] leading-relaxed max-w-2xl font-normal">
            We help businesses across multiple industries streamline operations, improve
            efficiency, and scale through innovative digital solutions.
          </p>
        </div>

        {/* 2x2 Responsive Grid:
            - Desktop: 2 columns
            - Tablet: 2 columns
            - Mobile: 1 column
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 lg:gap-10">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.id}
              id={industry.id}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              features={industry.features}
              illustration={industry.illustration}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
