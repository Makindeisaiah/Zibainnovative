import React from 'react';
import { Globe } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt?: string;
  isBlackAndWhite?: boolean;
  avatarShape?: 'square-cutout' | 'circle';
  socials?: {
    linkedin?: string;
    website?: string;
    twitter?: string;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div
      id={`team-member-${member.id}`}
      className="group bg-white rounded-[24px] sm:rounded-[28px] border border-[#E5E9EB] hover:border-[#22C55E]/50 transition-all duration-300 shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden h-full"
    >
      {/* Top Image Container with Dark Backdrop */}
      <div className="w-full aspect-square rounded-[18px] sm:rounded-[20px] bg-black relative overflow-hidden flex items-center justify-center">
        {member.avatarShape === 'circle' ? (
          <div className="w-[86%] h-[86%] rounded-full bg-[#E5E9F0] overflow-hidden flex items-center justify-center shadow-inner">
            <img
              src={member.image}
              alt={member.imageAlt || member.name}
              className={`w-full h-full object-cover object-center ${
                member.isBlackAndWhite ? 'grayscale contrast-110' : ''
              } transition-transform duration-500 group-hover:scale-105`}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : (
          <img
            src={member.image}
            alt={member.imageAlt || member.name}
            className={`w-full h-full object-cover object-top ${
              member.isBlackAndWhite ? 'grayscale contrast-110' : ''
            } transition-transform duration-500 group-hover:scale-105`}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      {/* Content Area */}
      <div className="pt-6 pb-4 px-3 flex flex-col items-center text-center">
        {/* Name */}
        <h3 className="text-xl sm:text-[22px] font-bold text-[#0E1322] tracking-tight group-hover:text-[#22C55E] transition-colors duration-200">
          {member.name}
        </h3>

        {/* Role */}
        <p className="mt-1 text-sm sm:text-[15px] font-normal text-[#64748B]">
          {member.role}
        </p>

        {/* Green Accent Line */}
        <div className="w-8 h-[2.5px] bg-[#22C55E] rounded-full my-3.5 transition-all duration-300 group-hover:w-12" />

        {/* Social Icons Row */}
        <div className="flex items-center justify-center gap-2.5 mt-1">
          {/* LinkedIn */}
          <a
            href={member.socials?.linkedin || '#'}
            aria-label={`${member.name} LinkedIn`}
            className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#22C55E] hover:bg-[#EBFDF2] hover:text-[#22C55E] hover:scale-110 text-[#0F172A] flex items-center justify-center transition-all duration-200 text-xs font-bold font-sans"
          >
            in
          </a>

          {/* Dribbble / Web */}
          <a
            href={member.socials?.website || '#'}
            aria-label={`${member.name} Website / Portfolio`}
            className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#22C55E] hover:bg-[#EBFDF2] hover:text-[#22C55E] hover:scale-110 text-[#0F172A] flex items-center justify-center transition-all duration-200"
          >
            <Globe className="w-4 h-4 stroke-[2]" />
          </a>

          {/* X (Twitter) */}
          <a
            href={member.socials?.twitter || '#'}
            aria-label={`${member.name} X (Twitter)`}
            className="w-9 h-9 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#22C55E] hover:bg-[#EBFDF2] hover:text-[#22C55E] hover:scale-110 text-[#0F172A] flex items-center justify-center transition-all duration-200 text-xs font-bold font-sans"
          >
            𝕏
          </a>
        </div>
      </div>
    </div>
  );
};
