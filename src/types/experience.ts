export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
  startDate: string;
  endDate?: string;
  current: boolean;
  logo?: string;
  url?: string;
  location?: string;
}
