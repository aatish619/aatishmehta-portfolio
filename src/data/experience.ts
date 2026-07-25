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
    id: 'rushkar-technology',
    company: 'Rushkar Technology Pvt Ltd',
    role: 'Mobile App Developer (Full Stack Contributor)',
    duration: 'Dec 2023 - Present',
    location: 'Ahmedabad, Gujarat, India',
    employmentType: 'Full-time',
    currentStatus: true,
    industry: 'Client Product Engineering',
    teamSize: 'Distributed client teams',
    architecture: 'Flutter, Clean Architecture, BLoC/GetX, Firebase, REST/GraphQL, platform channels',
    businessImpact: 'Owns full mobile product delivery across architecture, development, QA coordination, release management, and client communication for international projects.',
    technologies: ['Flutter', 'Dart', 'Python', 'FastAPI', 'Firebase', 'GraphQL', 'Socket.io', 'Mapbox', 'Twilio'],
    responsibilities: [
      'Owned architecture, development, QA coordination, and live store deployment across multiple client apps.',
      'Served as primary technical point of contact for international clients across requirements and sprint sessions.',
      'Made independent decisions on state management, API integration strategy, and platform channel design.',
      'Integrated AI image processing, Mapbox, AccuWeather, VoIP SDKs, and Firebase across production apps.',
    ],
    achievements: [
      'Mentored a junior Flutter developer through onboarding and code review cycles.',
      'Managed App Store and Play Store release processes including signing, compliance, metadata, and staged rollouts.',
      'Built Python, FastAPI, and MongoDB backend projects toward full-stack ownership.',
    ],
  },
  {
    id: 'hiyaa-infotech',
    company: 'Hiyaa Infotech',
    role: 'Android Developer',
    duration: 'Jun 2021 - Aug 2023',
    location: 'Ahmedabad, Gujarat, India',
    employmentType: 'Full-time',
    industry: 'Mobile Application Development',
    teamSize: 'Agile delivery teams',
    architecture: 'Native Android with Kotlin/Java, REST APIs, SQLite, Firebase Auth and FCM',
    businessImpact: 'Delivered production Android applications from feature implementation through Play Store releases and post-release fixes.',
    technologies: ['Kotlin', 'Java', 'Android', 'REST APIs', 'SQLite', 'Firebase', 'Flutter'],
    responsibilities: [
      'Developed and maintained native Android applications across multiple client projects.',
      'Handled UI implementation, API integration, release builds, and production bug fixes.',
      'Worked with backend and QA teams through Agile sprint planning, standups, and code reviews.',
    ],
    achievements: [
      'Shipped app features end-to-end from requirements through Play Store deployment.',
      'Built a foundation in Flutter through cross-platform UI modules before moving into full-time Flutter delivery.',
    ],
  },
];
