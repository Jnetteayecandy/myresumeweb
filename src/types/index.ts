export type WindowId = 'pil' | 'terminal' | 'resume' | 'contact' | 'skills';

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
}

export interface Project {
  id: string;
  title: string;
  titleTh?: string;
  subtitle: string;
  subtitleTh?: string;
  description: string;
  descriptionTh?: string;
  tags: string[];
  tagsTh?: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  collaboration?: string;
  collaborationTh?: string;
  systemArchitecture?: string[];
  systemArchitectureTh?: string[];
  highlights?: string[];
  highlightsTh?: string[];
  imageUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 1-100
    icon?: string;
    description: string;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  achievements: string[];
  techStack: string[];
}

