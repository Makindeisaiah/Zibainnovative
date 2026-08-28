import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import {
  TestimonialCard,
  TestimonialItem,
} from '../components/TestimonialCard';

export const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 'testimonial-1',
      quote:
        'Excellent solution with outstanding support. The team is always responsive and goes above and beyond to ensure our success. Truly a reliable partner!',
      name: 'Michael Brown',
      role: 'Operations Manager',
      company: 'SupplyChain ProLogistics.co',
      avatar:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      rating: 5,
    },
    {
      id: 'testimonial-2',
      quote:
        'We’ve seen a significant increase in productivity since implementing their platform. It’s user-friendly, powerful, and has everything we need to scale',
      name: 'Sarah Jenkins',
      role: 'Operations Manager',
      company: 'SupplyChain ProLogistics.co',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      rating: 5,
    },
  ];

  return (
    <Section
      id="testimonials"
      className="bg-white text-zinc-900 py-20 sm:py-24 lg:py-32 border-t border-[#EEF2F6]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          {/* Eyebrow Label with green decorative dashes */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#22C55E] tracking-[0.18em] uppercase">
              Testimonials
            </span>
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#0E1322] tracking-[-0.03em] leading-[1.18]">
            Trusted by Businesses Across Different Industries
          </h2>

          {/* Supporting Paragraph */}
          <p className="mt-5 text-base sm:text-lg text-[#5F6D7E] leading-relaxed max-w-2xl font-normal">
            See how our solutions are helping companies improve efficiency, scale
            operations, and achieve measurable growth.
          </p>
        </div>

        {/* Testimonial Cards:
            - Desktop: 2 balanced columns
            - Tablet: 2 columns
            - Mobile: 1 column
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
