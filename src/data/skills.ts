export type ExpertiseLevel = 'Expert' | 'Advanced' | 'Intermediate';

export interface Skill {
  id: string;
  category: 'Mobile' | 'Backend' | 'Architecture' | 'Cloud' | 'AI' | 'Tools' | 'DevOps';
  name: string;
  level: ExpertiseLevel;
}

export const TECHNICAL_EXPERTISE: Skill[] = [
  // Mobile
  { id: 'flutter', category: 'Mobile', name: 'Flutter', level: 'Expert' },
  { id: 'dart', category: 'Mobile', name: 'Dart', level: 'Expert' },
  { id: 'swift', category: 'Mobile', name: 'Swift / iOS', level: 'Advanced' },
  { id: 'kotlin', category: 'Mobile', name: 'Kotlin / Android', level: 'Advanced' },
  
  // Backend
  { id: 'python', category: 'Backend', name: 'Python', level: 'Advanced' },
  { id: 'rest', category: 'Backend', name: 'REST APIs', level: 'Expert' },
  { id: 'graphql', category: 'Backend', name: 'GraphQL', level: 'Intermediate' },

  // Architecture
  { id: 'clean-arch', category: 'Architecture', name: 'Clean Architecture', level: 'Expert' },
  { id: 'bloc', category: 'Architecture', name: 'BLoC', level: 'Expert' },
  { id: 'mvvm', category: 'Architecture', name: 'MVVM', level: 'Expert' },
  { id: 'di', category: 'Architecture', name: 'Dependency Injection', level: 'Advanced' },

  // AI
  { id: 'llm-integration', category: 'AI', name: 'LLM Integration', level: 'Advanced' },
  { id: 'openai-api', category: 'AI', name: 'OpenAI API', level: 'Advanced' },
  { id: 'on-device-ml', category: 'AI', name: 'On-Device ML', level: 'Intermediate' },

  // Cloud / Tools / DevOps
  { id: 'firebase', category: 'Cloud', name: 'Firebase', level: 'Expert' },
  { id: 'gcp', category: 'Cloud', name: 'Google Cloud', level: 'Intermediate' },
  { id: 'git', category: 'Tools', name: 'Git', level: 'Expert' },
  { id: 'cicd', category: 'DevOps', name: 'CI/CD Pipelines', level: 'Advanced' },
  { id: 'fastlane', category: 'DevOps', name: 'Fastlane', level: 'Advanced' },
];
