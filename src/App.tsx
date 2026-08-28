import React, { useState, useEffect, useCallback } from 'react';
import { Home } from './pages/Home';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';

function parseRoute(): { page: 'home' | 'project'; slug?: string; hash?: string } {
  const pathname = window.location.pathname;
  const hash = window.location.hash;

  // 1. Check pathname: e.g. /projects/ticketa
  const matchPath = pathname.match(/^\/projects\/([a-zA-Z0-9_-]+)/);
  if (matchPath && matchPath[1]) {
    return { page: 'project', slug: matchPath[1] };
  }

  // 2. Check hash route fallback: e.g. #/projects/ticketa or #projects/ticketa
  const matchHash = hash.match(/^#\/?projects\/([a-zA-Z0-9_-]+)/);
  if (matchHash && matchHash[1]) {
    return { page: 'project', slug: matchHash[1] };
  }

  return { page: 'home', hash: hash.replace(/^#/, '') };
}

export default function App() {
  const [route, setRoute] = useState(parseRoute);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(parseRoute());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const navigateToHome = useCallback((targetSectionId?: string) => {
    // Clean history update to root
    const targetHash = targetSectionId ? `#${targetSectionId}` : '';
    window.history.pushState({}, '', `/${targetHash}`);
    setRoute({ page: 'home', hash: targetSectionId });

    if (targetSectionId) {
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, []);

  const navigateToProject = useCallback((slug: string) => {
    window.history.pushState({}, '', `/projects/${slug}`);
    setRoute({ page: 'project', slug });
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // Intercept any click on project links with /projects/:slug or #projects/:slug
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Handle project links
      const projectPathMatch = href.match(/^(\/projects\/|#\/?projects\/)([a-zA-Z0-9_-]+)/);
      if (projectPathMatch && projectPathMatch[2]) {
        e.preventDefault();
        navigateToProject(projectPathMatch[2]);
        return;
      }

      // Handle home navigation
      if (href === '#' || href === '/') {
        if (route.page === 'project') {
          e.preventDefault();
          navigateToHome();
        }
        return;
      }

      // Handle anchor links from inside project page (e.g. #services, #portfolio, #cta)
      if (href.startsWith('#') && !href.startsWith('#projects/')) {
        const sectionId = href.replace(/^#/, '');
        if (route.page === 'project') {
          e.preventDefault();
          navigateToHome(sectionId);
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [route.page, navigateToHome, navigateToProject]);

  if (route.page === 'project' && route.slug) {
    return (
      <ProjectDetailsPage
        slug={route.slug}
        onNavigateHome={navigateToHome}
        onNavigateProject={navigateToProject}
      />
    );
  }

  return <Home />;
}
