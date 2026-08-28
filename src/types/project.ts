import React from 'react';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectScreenshot {
  id: string;
  title: string;
  caption?: string;
  category?: string;
  renderVisual: React.ReactNode;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categories: string[];
  liveUrl?: string;
  heroVisual: React.ReactNode;
  overview?: string;
  challenge?: string;
  solution?: string;
  features?: ProjectFeature[];
  targetAudience?: string[];
  results?: string[];
  roles?: string[];
  techStack?: string[];
  screenshots?: ProjectScreenshot[];
  previousProject?: {
    slug: string;
    title: string;
  };
  nextProject?: {
    slug: string;
    title: string;
  };
}
