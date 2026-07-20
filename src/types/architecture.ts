export interface ArchitectureProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  overview: string;
  diagram?: string;
  technologies: string[];
  challenges: string[];
  outcomes: string[];
  images: string[];
  date: string;
}
