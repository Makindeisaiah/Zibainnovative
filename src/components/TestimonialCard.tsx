import React from 'react';
import { Star } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating?: number;
}

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
}) => {
  const rating = testimonial.rating || 5;

  return (
    <div
      id={`testimonial-card-${testimonial.id}`}
      className="group bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9EB] hover:border-[#22C55E]/50 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.07)] p-8 sm:p-10 flex flex-col justify-between"
    >
      <div>
        {/* Top: Mint Green Quote Pill */}
        <div className="w-12 h-12 rounded-2xl bg-[#EBFDF2] flex items-center justify-center text-[#22C55E] mb-6 shadow-sm">
          <span className="font-serif font-black text-2xl leading-none select-none">
            &ldquo;
          </span>
        </div>

        {/* 5-Star Rating */}
        <div className="flex items-center gap-1 mb-6 text-[#22C55E]">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#22C55E] text-[#22C55E]"
            />
          ))}
        </div>

        {/* Quote Content */}
        <p className="text-[15.5px] sm:text-[16.5px] text-[#334155] leading-[1.65] font-normal mb-8">
          {testimonial.quote}
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center gap-4 pt-6 border-t border-[#F1F5F9] mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-100 border border-slate-200">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-full h-full object-cover object-center"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h4 className="text-[16px] sm:text-[17px] font-bold text-[#0E1322] tracking-tight">
            {testimonial.name}
          </h4>
          <p className="text-[13px] sm:text-[13.5px] text-[#64748B] font-normal leading-snug">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};
