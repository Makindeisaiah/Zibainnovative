import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';

export const TrustedCompanies: React.FC = () => {
  return (
    <Section
      id="trusted-companies"
      className="bg-white text-zinc-900 py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      <Container size="wide" className="flex flex-col items-center text-center">
        {/* Eyebrow Pill Badge */}
        <div
          id="trusted-companies-badge"
          className="inline-flex items-center gap-2 rounded-full bg-black px-4 sm:px-5 py-2 mb-8 sm:mb-10 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#49E378] animate-pulse" aria-hidden="true" />
          <span className="text-[11px] sm:text-[12px] font-bold text-[#49E378] uppercase tracking-[0.14em]">
            Trusted by Innovative Companies
          </span>
        </div>

        {/* Main Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.14] text-[#0E1322] max-w-4xl">
          <span>Over </span>
          <span className="text-[#3ED579]">32K+</span>
          <span> software businesses</span>
          <br className="hidden sm:inline" />
          <span> growing with Ziba Innovatives</span>
        </h2>

        {/* Supporting Description */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-[18px] text-[#5F6D7E] leading-relaxed max-w-2xl font-normal">
          We partner with forward-thinking companies and startups to build technology that drives real results.
        </p>

        {/* Company Logos Grid */}
        <div
          id="trusted-logos-list"
          className="mt-16 sm:mt-20 w-full flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-14 lg:gap-20 xl:gap-24 opacity-85 hover:opacity-100 transition-opacity duration-300"
        >
          {/* 1. OpenZeppelin */}
          <div className="flex items-center gap-2.5 h-10 px-2 group transition-transform duration-200 hover:scale-105 select-none" title="OpenZeppelin">
            <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8L28 8L18 18L28 18L28 24L4 24L14 14L4 14L4 8Z" fill="#4E75FF" />
            </svg>
            <span className="font-semibold text-base sm:text-lg text-[#64748B] tracking-tight group-hover:text-[#334155] transition-colors">
              OpenZeppelin
            </span>
          </div>

          {/* 2. ORACLE */}
          <div className="flex items-center h-10 px-2 group transition-transform duration-200 hover:scale-105 select-none" title="Oracle">
            <span className="font-extrabold text-xl sm:text-2xl text-[#8E9BAE] tracking-[0.22em] uppercase font-mono group-hover:text-[#475569] transition-colors">
              ORACLE
            </span>
          </div>

          {/* 3. MORPHEUS */}
          <div className="flex items-center gap-2.5 h-10 px-2 group transition-transform duration-200 hover:scale-105 select-none" title="Morpheus">
            <svg className="w-8 h-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="17" fill="#F87171" fillOpacity="0.18" />
              <path
                d="M8 20L13 14L18 20L23 14L28 20"
                stroke="#60A5FA"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-bold text-base sm:text-lg text-[#7BAEED] tracking-[0.16em] uppercase group-hover:text-[#3B82F6] transition-colors">
              MORPHEUS
            </span>
          </div>

          {/* 4. SAMSUNG */}
          <div className="flex items-center h-10 px-2 group transition-transform duration-200 hover:scale-105 select-none" title="Samsung">
            <span className="font-extrabold text-lg sm:text-xl text-[#7C8BA1] tracking-[0.2em] uppercase font-sans group-hover:text-[#334155] transition-colors">
              SAMSUNG
            </span>
          </div>

          {/* 5. monday */}
          <div className="flex items-center gap-2 h-10 px-2 group transition-transform duration-200 hover:scale-105 select-none" title="Monday.com">
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-4 rounded-full bg-[#FB7185] rotate-[-12deg]" />
              <span className="w-2.5 h-4 rounded-full bg-[#FBBF24] rotate-[-6deg]" />
              <span className="w-2.5 h-4 rounded-full bg-[#34D399] rotate-[6deg]" />
            </div>
            <span className="font-bold text-xl sm:text-2xl text-[#64748B] tracking-tight lowercase group-hover:text-[#334155] transition-colors">
              monday
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};
