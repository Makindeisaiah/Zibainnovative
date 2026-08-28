import React from 'react';
import { CheckCircle2, Sparkles, Layers, Cpu, Users2, Trophy } from 'lucide-react';
import { Container } from '../Container';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '../motion/MotionUtils';
import { ProjectData } from '../../types/project';

interface ProjectContentSectionsProps {
  project: ProjectData;
}

export const ProjectContentSections: React.FC<ProjectContentSectionsProps> = ({ project }) => {
  return (
    <div className="bg-white text-zinc-900 pb-16 sm:pb-24">
      <Container size="default">
        <div className="max-w-3xl mx-auto space-y-14 sm:space-y-20 text-center">
          {/* 1. Project Overview */}
          {project.overview && (
            <RevealOnScroll yOffset={20} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0E1322] tracking-tight">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg md:text-[19px] text-[#475569] leading-relaxed font-normal">
                {project.overview}
              </p>
            </RevealOnScroll>
          )}

          {/* 2. The Challenge */}
          {project.challenge && (
            <RevealOnScroll yOffset={20} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0E1322] tracking-tight">
                The Challenge
              </h2>
              <p className="text-base sm:text-lg md:text-[19px] text-[#475569] leading-relaxed font-normal">
                {project.challenge}
              </p>
            </RevealOnScroll>
          )}

          {/* 3. Our Solution */}
          {project.solution && (
            <RevealOnScroll yOffset={20} className="space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0E1322] tracking-tight">
                Our Solution
              </h2>
              <p className="text-base sm:text-lg md:text-[19px] text-[#475569] leading-relaxed font-normal">
                {project.solution}
              </p>
            </RevealOnScroll>
          )}

          {/* 4. Key Features */}
          {project.features && project.features.length > 0 && (
            <RevealOnScroll yOffset={20} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0E1322] tracking-tight">
                Key Features
              </h2>
              <div className="text-left space-y-4 sm:space-y-4.5 max-w-2xl mx-auto">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-base sm:text-lg text-[#475569] leading-relaxed"
                  >
                    <span className="text-[#22C55E] text-xl leading-none mt-1 shrink-0 font-bold">•</span>
                    <div>
                      <strong className="font-bold text-[#0E1322]">{feature.title}</strong>
                      <span className="text-[#64748B]"> — {feature.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          )}

          {/* 5. Target Audience */}
          {project.targetAudience && project.targetAudience.length > 0 && (
            <RevealOnScroll yOffset={20} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0E1322] tracking-tight">
                Target Audience
              </h2>
              <ul className="text-left space-y-3 max-w-xl mx-auto">
                {project.targetAudience.map((audience, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-base sm:text-lg text-[#475569]"
                  >
                    <span className="text-[#22C55E] text-xl leading-none font-bold shrink-0">•</span>
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          )}

          {/* 6. Results & Impact */}
          {project.results && project.results.length > 0 && (
            <RevealOnScroll yOffset={20} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0E1322] tracking-tight">
                Results &amp; Impact
              </h2>
              <ul className="text-left space-y-3.5 max-w-2xl mx-auto">
                {project.results.map((result, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base sm:text-lg text-[#475569] leading-relaxed"
                  >
                    <span className="text-[#22C55E] text-xl leading-none mt-1 shrink-0 font-bold">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          )}

          {/* 7. Our Role at Ziba Innovative */}
          {project.roles && project.roles.length > 0 && (
            <RevealOnScroll yOffset={20} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0E1322] tracking-tight">
                Our Role at Ziba Innovative
              </h2>
              <ul className="text-left space-y-3 max-w-xl mx-auto">
                {project.roles.map((role, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-base sm:text-lg text-[#475569]"
                  >
                    <span className="text-[#22C55E] text-xl leading-none font-bold shrink-0">•</span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          )}

          {/* 8. Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <RevealOnScroll yOffset={20} className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-[32px] font-extrabold text-[#0E1322] tracking-tight">
                Tech Stack
              </h2>
              <ul className="text-left space-y-3 max-w-xl mx-auto">
                {project.techStack.map((tech, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-base sm:text-lg text-[#475569]"
                  >
                    <span className="text-[#22C55E] text-xl leading-none font-bold shrink-0">•</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          )}
        </div>
      </Container>
    </div>
  );
};
