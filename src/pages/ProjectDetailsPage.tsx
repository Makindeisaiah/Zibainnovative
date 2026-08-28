import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { FinalCTA } from '../sections/FinalCTA';
import { ProjectHero } from '../components/project/ProjectHero';
import { ProjectContentSections } from '../components/project/ProjectContentSections';
import { ProjectScreenshots } from '../components/project/ProjectScreenshots';
import { ProjectNavigation } from '../components/project/ProjectNavigation';
import { projectsData } from '../data/projectsData';
import { Container } from '../components/Container';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailsPageProps {
  slug: string;
  onNavigateHome: (hash?: string) => void;
  onNavigateProject: (slug: string) => void;
}

export const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({
  slug,
  onNavigateHome,
  onNavigateProject,
}) => {
  const project = projectsData[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <Navbar />
        <Container size="default" className="py-24 text-center">
          <h1 className="text-3xl font-black text-[#0E1322] mb-4">Project Not Found</h1>
          <p className="text-slate-600 mb-8">The project you are looking for does not exist or has been moved.</p>
          <button
            type="button"
            onClick={() => onNavigateHome('portfolio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#22C55E] text-white font-bold text-sm shadow-sm hover:bg-[#16A34A] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>
        </Container>
        <Footer />
      </div>
    );
  }

  return (
    <div id={`project-details-${slug}`} className="min-h-screen bg-white flex flex-col font-sans">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Project Details Content */}
      <main className="flex-1">
        {/* Project Hero */}
        <ProjectHero
          project={project}
          onNavigateBack={() => onNavigateHome('portfolio')}
        />

        {/* Narrative Content: Overview, Challenge, Solution, Features, Audience, Results, Role, Tech */}
        <ProjectContentSections project={project} />

        {/* Key Dashboards & Screenshots Gallery (Click to expand lightbox) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <ProjectScreenshots screenshots={project.screenshots} />
        )}

        {/* Final CTA Section */}
        <FinalCTA />

        {/* Bottom Project Navigation (Back to Portfolio & Next Project) */}
        <ProjectNavigation
          project={project}
          onNavigateBack={() => onNavigateHome('portfolio')}
          onNavigateProject={onNavigateProject}
        />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};
