import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  tags: string;
  categoryFilter: string[];
  description: string;
  imageBg: string;
  renderVisual: React.ReactNode;
}

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      id={`project-card-${project.slug}`}
      href={`/projects/${project.slug}`}
      className="group block rounded-[24px] bg-[#0A0E1A] border border-[#1E293B]/80 hover:border-[#22C55E]/50 overflow-hidden transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 flex flex-col cursor-pointer"
    >
      {/* Top Preview Image Container */}
      <div
        className={`w-full aspect-[16/11] sm:aspect-[16/10] ${project.imageBg} relative overflow-hidden flex items-center justify-center p-6 sm:p-8 transition-transform duration-500 group-hover:scale-[1.02]`}
      >
        {project.renderVisual}
        
        {/* Floating View Project Indicator */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight className="w-4 h-4 text-[#22C55E]" />
        </div>
      </div>

      {/* Bottom Content Container */}
      <div className="p-6 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between bg-[#0A0E1A]">
        <div>
          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#22C55E] transition-colors">
            {project.title}
          </h3>

          {/* Category Tags */}
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#22C55E]">
            {project.categories.map((cat, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-[#334155]">•</span>}
                <span>{cat}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-5 pt-4 border-t border-[#162032]">
          <p className="text-[14px] sm:text-[15px] text-[#94A3B8] leading-relaxed font-normal">
            {project.description}
          </p>
        </div>
      </div>
    </a>
  );
};
