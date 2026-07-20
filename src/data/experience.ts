export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  employmentType: 'Full-time' | 'Contract' | 'Freelance';
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  industry: string;
  teamSize?: string;
  architecture?: string;
  businessImpact?: string;
  currentStatus?: boolean;
}

export const EXPERIENCE_TIMELINE: Experience[] = [
  {
    id: 'mobile-architect',
    company: 'Enterprise Logistics & Delivery',
    role: 'Senior Mobile Engineer',
    duration: '2023 - Present',
    location: 'Remote',
    employmentType: 'Full-time',
    currentStatus: true,
    industry: 'Logistics',
    teamSize: '10+ Engineers',
    architecture: 'Clean Architecture with BLoC',
    businessImpact: 'Scaled delivery fleet tracking and order dispatching to support high-volume daily transactions.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Python', 'Google Maps API'],
    responsibilities: [
      'Led the transition to Clean Architecture, dramatically improving testability and code reuse across the team.',
      'Designed and implemented offline-first synchronization pipelines for drivers in low-connectivity areas.',
      'Collaborated closely with product managers and backend teams to finalize API contracts.',
    ],
    achievements: [
      'Reduced crash-free sessions from 94% to 99.8%.',
      'Cut CI/CD pipeline build times by 40% through optimized caching.',
    ],
  },
  {
    id: 'ai-agritech',
    company: 'Agritech Innovation',
    role: 'Lead Mobile Developer',
    duration: '2021 - 2023',
    location: 'Hybrid',
    employmentType: 'Full-time',
    industry: 'Agritech',
    teamSize: '5 Engineers',
    architecture: 'MVVM with GetX',
    businessImpact: 'Enabled farmers to diagnose crop diseases directly from their mobile devices using on-device ML.',
    technologies: ['Flutter', 'TensorFlow Lite', 'Python', 'REST APIs'],
    responsibilities: [
      'Integrated edge-based ML models for real-time crop disease detection.',
      'Mentored junior developers on state management and performance profiling.',
      'Architected the core data layer to handle heavy offline video/image caching.',
    ],
    achievements: [
      'Successfully deployed application to over 50,000 active farming users.',
      'Decreased API payload size by implementing Protobuf instead of JSON for high-throughput syncs.',
    ],
  },
  {
    id: 'native-dev',
    company: 'Healthcare App Solutions',
    role: 'Mobile Engineer (Android/iOS)',
    duration: '2019 - 2021',
    location: 'On-site',
    employmentType: 'Full-time',
    industry: 'Healthcare',
    architecture: 'MVC / MVVM',
    businessImpact: 'Streamlined patient-doctor communication through secure, HIPAA-compliant messaging.',
    technologies: ['Swift', 'Kotlin', 'Java', 'WebSockets'],
    responsibilities: [
      'Developed native features across both iOS and Android codebases.',
      'Implemented real-time WebSocket chat for immediate doctor-patient consultations.',
    ],
    achievements: [
      'Migrated legacy Java codebase to Kotlin with zero downtime.',
      'Achieved a 4.8 star rating on the App Store.',
    ],
  },
];
