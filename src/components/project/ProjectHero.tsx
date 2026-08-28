import React from 'react';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Container } from '../Container';
import { RevealOnScroll } from '../motion/MotionUtils';
import { ProjectData } from '../../types/project';

interface ProjectHeroProps {
  project: ProjectData;
  onNavigateBack: () => void;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ project, onNavigateBack }) => {
  return (
    <div className="pt-8 sm:pt-10 pb-12 sm:pb-16 bg-white text-zinc-900">
      <Container size="default">
        {/* Contextual Navigation Link: Back to Portfolio */}
        <RevealOnScroll yOffset={10} delay={0.05} className="mb-8 sm:mb-12">
          <button
            id="back-to-portfolio-hero"
            type="button"
            onClick={onNavigateBack}
            className="group inline-flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-[#475569] hover:text-[#22C55E] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] rounded-md px-1 py-0.5 -ml-1"
          >
            <ArrowLeft className="w-4 h-4 text-[#64748B] group-hover:text-[#22C55E] group-hover:-translate-x-1 transition-all duration-200" />
            <span>Back to Portfolio</span>
          </button>
        </RevealOnScroll>

        {/* Project Header: Title, Category & Live Link */}
        <RevealOnScroll yOffset={16} delay={0.1} className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          {/* Main Project Display Title */}
          <h1
            id="project-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black text-[#0E1322] tracking-[-0.03em] leading-[1.1] mb-4"
          >
            {project.title}
          </h1>

          {/* Tagline / Subtitle */}
          <p
            id="project-tagline"
            className="text-xl sm:text-2xl md:text-[26px] font-bold text-[#0E1322] tracking-tight leading-snug mb-5"
          >
            {project.tagline}
          </p>

          {/* Live Project Link if available */}
          {project.liveUrl && (
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-[#475569]">
              <span>Live Project:</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#22C55E] hover:text-[#16A34A] hover:underline font-bold transition-colors"
              >
                <span>{project.liveUrl.replace(/^https?:\/\//, '')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </RevealOnScroll>

        {/* Hero Visual Mockup Preview */}
        <RevealOnScroll yOffset={24} delay={0.2} className="w-full max-w-5xl mx-auto">
          <div id="project-hero-preview" className="w-full">
            {project.heroVisual}
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  );
};
