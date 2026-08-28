import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '../Container';
import { ProjectData } from '../../types/project';

interface ProjectNavigationProps {
  project: ProjectData;
  onNavigateBack: () => void;
  onNavigateProject: (slug: string) => void;
}

export const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  project,
  onNavigateBack,
  onNavigateProject,
}) => {
  return (
    <div className="bg-white border-t border-[#EEF2F6] py-10 sm:py-14 text-zinc-900">
      <Container size="default">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          {/* Back to Portfolio (Left or Previous) */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <button
              id="bottom-back-to-portfolio"
              type="button"
              onClick={onNavigateBack}
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#E2E8F0] hover:border-[#22C55E] bg-[#FAFBFD] hover:bg-[#E6FAF4] text-sm font-bold text-[#0E1322] hover:text-[#00A87E] transition-all duration-200 cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              <ArrowLeft className="w-4 h-4 text-[#64748B] group-hover:text-[#22C55E] group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Portfolio</span>
            </button>

            {project.previousProject && (
              <button
                id="bottom-prev-project"
                type="button"
                onClick={() => onNavigateProject(project.previousProject!.slug)}
                className="group hidden md:inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#22C55E] transition-colors cursor-pointer"
              >
                <span>Previous: {project.previousProject.title}</span>
              </button>
            )}
          </div>

          {/* Next Project (Right) */}
          {project.nextProject && (
            <button
              id="bottom-next-project"
              type="button"
              onClick={() => onNavigateProject(project.nextProject!.slug)}
              className="group w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-5 py-3 rounded-2xl bg-[#0E1322] hover:bg-black text-white hover:text-[#22C55E] border border-slate-800 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-[#94A3B8] block leading-none mb-1">
                  Next Project
                </span>
                <span className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#22C55E] transition-colors">
                  {project.nextProject.title}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#22C55E]/20 flex items-center justify-center text-white group-hover:text-[#22C55E] transition-colors shrink-0">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};
