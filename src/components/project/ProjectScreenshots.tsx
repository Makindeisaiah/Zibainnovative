import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { Container } from '../Container';
import { RevealOnScroll, StaggerContainer, StaggerItem } from '../motion/MotionUtils';
import { ProjectScreenshot } from '../../types/project';
import { ProjectLightbox } from './ProjectLightbox';

interface ProjectScreenshotsProps {
  screenshots: ProjectScreenshot[];
}

export const ProjectScreenshots: React.FC<ProjectScreenshotsProps> = ({ screenshots }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <div className="bg-[#FAFBFD] border-y border-[#EEF2F6] py-16 sm:py-24 text-zinc-900">
      <Container size="default">
        {/* Section Header */}
        <RevealOnScroll yOffset={20} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6FAF4] text-[#00A87E] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00D09C]" />
            <span>Product Interface Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E1322] tracking-tight">
            Key Screens &amp; Dashboards
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-3">
            Explore the specialized user journeys and purpose-built dashboards designed for scale.
          </p>
        </RevealOnScroll>

        {/* Gallery Stack */}
        <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
          {screenshots.map((screen, idx) => (
            <RevealOnScroll key={screen.id} yOffset={24} delay={idx * 0.1}>
              <div
                id={`project-screenshot-${screen.id}`}
                className="group bg-white rounded-2xl md:rounded-3xl border border-[#EEF2F6] shadow-[0_12px_40px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:border-[#22C55E]/40"
              >
                {/* Header label & expand button */}
                <div className="px-5 sm:px-7 py-4 bg-white border-b border-[#F1F5F9] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#22C55E] uppercase tracking-wider">
                      {screen.category || 'Screen'}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0E1322] tracking-tight">
                      {screen.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F8FAFC] group-hover:bg-[#E6FAF4] text-[#475569] group-hover:text-[#00A87E] text-xs font-semibold border border-[#E2E8F0] transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand</span>
                  </button>
                </div>

                {/* Screenshot Visual Body with Click Trigger */}
                <div
                  className="p-3 sm:p-5 lg:p-6 bg-[#F8FAFC] cursor-pointer relative"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="transition-transform duration-300 group-hover:scale-[1.005]">
                    {screen.renderVisual}
                  </div>
                </div>

                {/* Caption / Description */}
                {screen.caption && (
                  <div className="px-5 sm:px-7 py-3.5 bg-white border-t border-[#F1F5F9] text-xs sm:text-sm text-[#64748B]">
                    <p>{screen.caption}</p>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Lightbox Modal */}
        <ProjectLightbox
          isOpen={lightboxIndex !== null}
          currentIndex={lightboxIndex ?? 0}
          screenshots={screenshots}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => {
            if (lightboxIndex !== null) {
              setLightboxIndex((prev) => ((prev ?? 0) - 1 + screenshots.length) % screenshots.length);
            }
          }}
          onNext={() => {
            if (lightboxIndex !== null) {
              setLightboxIndex((prev) => ((prev ?? 0) + 1) % screenshots.length);
            }
          }}
        />
      </Container>
    </div>
  );
};
