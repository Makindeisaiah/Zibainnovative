import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import {
  StrategicSolutionCard,
  StrategicSolutionCardProps,
} from '../components/StrategicSolutionCard';

export const StrategicSolutionsSection: React.FC = () => {
  const solutions: StrategicSolutionCardProps[] = [
    {
      id: 'ai-agent-services',
      title: 'AI Agent Services',
      description:
        'Deploy intelligent AI agents that automate customer support, lead generation, appointment scheduling, and internal business operations.',
      features: [
        'Customer Support Agents',
        'WhatsApp AI Assistants',
        'Lead Generation Automation',
        'Appointment Booking Agents',
        'Internal Knowledge Agents',
      ],
    },
    {
      id: 'technology-implementation',
      title: 'Technology Implementation',
      description:
        'We help businesses successfully implement, integrate, and optimize technology solutions that improve efficiency and accelerate growth.',
      features: [
        'CRM Implementation',
        'ERP Deployment',
        'Business Process Automation',
        'System Integration',
        'Staff Onboarding & Training',
      ],
    },
  ];

  return (
    <Section
      id="strategic-solutions"
      className="bg-[#FAFBFC] text-zinc-900 py-20 sm:py-24 lg:py-32 border-t border-[#EEF2F6]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          {/* Eyebrow with green decorative dashes */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#22C55E] tracking-[0.18em] uppercase">
              Strategic Solutions
            </span>
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#0E1322] tracking-[-0.03em] leading-[1.18]">
            AI–Powered Business Transformation
          </h2>

          {/* Supporting Paragraph */}
          <div className="mt-5 space-y-1 text-base sm:text-lg text-[#5F6D7E] leading-relaxed max-w-2xl font-normal">
            <p>We don't just build software.</p>
            <p>
              We help businesses implement, automate, and scale with intelligent
              technology solutions.
            </p>
          </div>
        </div>

        {/* 2-Column Balanced Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-10 max-w-5xl mx-auto">
          {solutions.map((sol) => (
            <StrategicSolutionCard
              key={sol.id}
              id={sol.id}
              title={sol.title}
              description={sol.description}
              features={sol.features}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
