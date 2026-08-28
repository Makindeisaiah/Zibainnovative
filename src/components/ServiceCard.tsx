import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface ServiceCardProps {
  idNumber: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  illustration: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  idNumber,
  icon,
  title,
  description,
  features,
  illustration,
}) => {
  return (
    <div
      id={`service-card-${idNumber}`}
      className="group bg-white rounded-2xl border border-[#E5E9EB] hover:border-[#3ED579]/50 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.07)] hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden h-full"
    >
      {/* Top Main Content */}
      <div className="p-6 sm:p-7 lg:p-8 flex-1 flex flex-col">
        {/* Header Row: ID Number and Category Icon */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="text-[17px] font-bold text-[#3ED579] tracking-tight">
            {idNumber}
          </span>
          <div className="w-11 h-11 rounded-xl bg-[#EBFDF2] flex items-center justify-center text-[#22C55E] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#dcfce7]">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-[22px] lg:text-[23px] font-bold text-[#0E1322] tracking-tight leading-[1.25] mb-4 group-hover:text-[#15803D] transition-colors duration-200">
          {title}
        </h3>

        {/* Description & Graphic Row */}
        <div className="flex items-end justify-between gap-4 mt-auto pt-2">
          <p className="text-[14px] sm:text-[15px] text-[#5F6D7E] leading-relaxed max-w-[62%] font-normal">
            {description}
          </p>

          {/* Visual Illustration Graphic */}
          <div className="w-[36%] max-w-[140px] flex items-center justify-end shrink-0 select-none pointer-events-none transition-transform duration-500 group-hover:scale-105">
            {illustration}
          </div>
        </div>
      </div>

      {/* Bottom Feature Checklist Strip */}
      <div className="border-t border-[#F0F3F5] bg-[#FCFDFD] px-6 sm:px-7 lg:px-8 py-5 sm:py-6">
        <ul className="space-y-3.5">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 group/item">
              <CheckCircle2 className="w-[19px] h-[19px] text-[#22C55E] shrink-0 stroke-[2.2] transition-transform duration-200 group-hover/item:scale-110" />
              <span className="text-[14px] sm:text-[14.5px] font-medium text-[#334155] tracking-normal">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
