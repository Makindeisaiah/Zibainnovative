import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface StrategicSolutionCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export const StrategicSolutionCard: React.FC<StrategicSolutionCardProps> = ({
  id,
  title,
  description,
  features,
}) => {
  return (
    <div
      id={`strategic-card-${id}`}
      className="group bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9EB] hover:border-[#22C55E]/50 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.06)] p-8 sm:p-10 lg:p-12 flex flex-col justify-between"
    >
      <div>
        {/* Card Title */}
        <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold text-[#0E1322] tracking-tight mb-4">
          {title}
        </h3>

        {/* Card Description */}
        <p className="text-[15px] sm:text-[16px] text-[#5F6D7E] leading-relaxed font-normal mb-8 sm:mb-10">
          {description}
        </p>

        {/* Feature List */}
        <ul className="space-y-4 sm:space-y-5">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3.5 group/item">
              <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 stroke-[2.2] transition-transform duration-200 group-hover/item:scale-110" />
              <span className="text-[15px] sm:text-[15.5px] font-medium text-[#334155] tracking-tight">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
