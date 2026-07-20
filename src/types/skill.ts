export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
}

export type SkillCategory =
  | 'language'
  | 'framework'
  | 'database'
  | 'devops'
  | 'design'
  | 'tool'
  | 'other';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
