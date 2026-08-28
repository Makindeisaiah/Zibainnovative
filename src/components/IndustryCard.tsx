import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export interface IndustryCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  illustration: React.ReactNode;
  href?: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  id,
  icon,
  title,
  description,
  features,
  illustration,
  href = '#contact',
}) => {
  return (
    <div
      id={`industry-card-${id}`}
      className="group bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9EB] hover:border-[#22C55E]/50 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] p-7 sm:p-8 lg:p-9 flex flex-col justify-between relative overflow-hidden"
    >
      <div>
        {/* Header: Mint Green Icon Pill */}
        <div className="w-12 h-12 rounded-2xl bg-[#EBFDF2] flex items-center justify-center text-[#22C55E] mb-6 transition-transform duration-300 group-hover:scale-105 shadow-sm">
          {icon}
        </div>

        {/* Industry Title */}
        <h3 className="text-2xl sm:text-[26px] font-bold text-[#0E1322] tracking-tight mb-3">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-[14.5px] sm:text-[15.5px] text-[#5F6D7E] leading-relaxed font-normal mb-7">
          {description}
        </p>

        {/* Key Features Checklist */}
        <ul className="space-y-3.5 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 group/item">
              <CheckCircle2 className="w-[18px] h-[18px] text-[#22C55E] shrink-0 stroke-[2.2]" />
              <span className="text-[14.5px] sm:text-[15px] font-medium text-[#334155] tracking-tight">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer: Learn More Link + Floating Illustration */}
      <div className="flex items-end justify-between pt-4 border-t border-[#F0F3F5] mt-auto">
        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#22C55E] hover:text-[#16A34A] transition-colors group/link pb-1"
        >
          <span>Learn more</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>

        {/* Bottom Right 3D Illustration Graphic */}
        <div className="relative shrink-0 max-w-[130px] sm:max-w-[145px] h-20 sm:h-24 flex items-end justify-end pointer-events-none select-none">
          {illustration}
        </div>
      </div>
    </div>
  );
};
