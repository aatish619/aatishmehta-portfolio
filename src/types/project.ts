export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  links: ProjectLinks;
  featured: boolean;
  date: string;
  status: ProjectStatus;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  case_study?: string;
}

export type ProjectCategory =
  | 'web'
  | 'mobile'
  | 'ai'
  | 'architecture'
  | 'open-source'
  | 'other';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';
