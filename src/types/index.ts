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
  subtitle: string;
  description: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  collaboration?: string;
  systemArchitecture?: string[];
  highlights?: string[];
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

