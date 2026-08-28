import React from 'react';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { TeamMemberCard, TeamMember } from '../components/TeamMemberCard';

export const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 'mahadi-hassan',
      name: 'Mahadi Hassan',
      role: 'Founder & CEO',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      avatarShape: 'square-cutout',
      socials: {
        linkedin: '#',
        website: '#',
        twitter: '#',
      },
    },
    {
      id: 'nzabera-mike',
      name: 'Nzabera Mike',
      role: 'Software Engineer',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      avatarShape: 'circle',
      socials: {
        linkedin: '#',
        website: '#',
        twitter: '#',
      },
    },
    {
      id: 'iradukunda-bertin',
      name: 'Iradukunda Bertin',
      role: 'Software Engineer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      avatarShape: 'circle',
      isBlackAndWhite: true,
      socials: {
        linkedin: '#',
        website: '#',
        twitter: '#',
      },
    },
    {
      id: 'manzi-cedrick',
      name: 'Manzi Cedrick',
      role: 'Software Engineer',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
      avatarShape: 'circle',
      isBlackAndWhite: true,
      socials: {
        linkedin: '#',
        website: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <Section
      id="team"
      className="bg-[#FAFBFC] text-zinc-900 py-20 sm:py-24 lg:py-32 border-t border-[#EEF2F6]"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16 lg:mb-20">
          {/* Eyebrow with green decorative dashes */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
            <span className="text-[12px] sm:text-[13px] font-bold text-[#22C55E] tracking-[0.18em] uppercase">
              Our Team
            </span>
            <span className="w-6 h-[2px] bg-[#22C55E] rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#0E1322] tracking-[-0.03em] leading-[1.18]">
            Meet the Experts Behind Our Solutions
          </h2>

          {/* Supporting Paragraph */}
          <p className="mt-5 text-base sm:text-lg text-[#5F6D7E] leading-relaxed max-w-2xl font-normal">
            A passionate team of designers, developers, and strategists dedicated to
            building impactful digital experience.
          </p>
        </div>

        {/* Team Members Grid:
            - Desktop (1200px+): 4 columns
            - Tablet (640px - 1199px): 2 columns
            - Mobile (<640px): 1 column
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
