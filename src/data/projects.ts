export type ProjectCategory =
  | 'Mobile App'
  | 'Enterprise'
  | 'FinTech'
  | 'Healthcare'
  | 'News'
  | 'Internal Tool'
  | 'All';

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  technologies: string[];
  platforms: string[];
  role: string;
  responsibilities: string[];
  achievements: string[];
  imagePlaceholder: string;
  githubUrl?: string;
  storeUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'show-united',
    title: 'Show United',
    summary: 'A premium entertainment application scaling to millions of users, providing seamless video streaming and an immersive user experience.',
    category: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Clean Architecture', 'BLoC'],
    platforms: ['iOS', 'Android'],
    role: 'Lead Mobile Engineer',
    responsibilities: [
      'Architected the entire Flutter application from scratch using Clean Architecture principles.',
      'Implemented robust state management using BLoC for predictable UI updates.',
      'Optimized video rendering and memory management to ensure 60fps playback.',
    ],
    achievements: [
      'Scaled application architecture to support 1M+ active users.',
      'Reduced crash rate to < 0.1% across thousands of device variations.',
    ],
    imagePlaceholder: 'SU',
    featured: true,
  },
  {
    id: 'mrsool',
    title: 'Mrsool',
    summary: 'One of the largest delivery platforms in the MENA region, handling complex logistics, real-time tracking, and high-volume transactions.',
    category: 'Enterprise',
    technologies: ['Swift', 'Kotlin', 'REST API', 'WebSockets', 'Google Maps API'],
    platforms: ['iOS', 'Android'],
    role: 'Senior Native Engineer',
    responsibilities: [
      'Maintained and optimized legacy native iOS and Android codebases.',
      'Integrated real-time WebSocket communication for live driver tracking.',
      'Implemented complex caching strategies to ensure offline resilience.',
    ],
    achievements: [
      'Improved app launch time by 40%.',
      'Successfully handled peak loads of 100k+ concurrent active deliveries.',
    ],
    imagePlaceholder: 'MR',
    featured: false,
  },
  {
    id: 'ecmis',
    title: 'ECMIS',
    summary: 'A highly secure, enterprise-grade healthcare management information system designed to handle sensitive patient records.',
    category: 'Healthcare',
    technologies: ['Flutter', 'Node.js', 'PostgreSQL', 'GraphQL', 'AWS'],
    platforms: ['iOS', 'Android', 'Web'],
    role: 'Full Stack Mobile Engineer',
    responsibilities: [
      'Developed cross-platform mobile client for doctors and hospital administrators.',
      'Integrated end-to-end encryption for sensitive patient data transmission.',
      'Built a custom offline-first sync engine using Hive and GraphQL subscriptions.',
    ],
    achievements: [
      'Achieved HIPAA compliance through rigorous data security protocols.',
      'Deployed across 15+ major hospital networks.',
    ],
    imagePlaceholder: 'EC',
    featured: false,
  },
  {
    id: 'orbis-mortgage',
    title: 'Orbis Mortgage',
    summary: 'A streamlined FinTech application simplifying the mortgage application and approval process with real-time financial tracking.',
    category: 'FinTech',
    technologies: ['Flutter', 'Firebase', 'Stripe API', 'Plaid API'],
    platforms: ['iOS', 'Android'],
    role: 'Mobile Architect',
    responsibilities: [
      'Designed a secure authentication flow integrating biometric unlocking.',
      'Integrated Plaid API for real-time bank account linking and verification.',
      'Implemented complex financial charting using custom painters in Flutter.',
    ],
    achievements: [
      'Processed over $50M in mortgage applications in the first year.',
      'Maintained a 4.9/5 App Store rating.',
    ],
    imagePlaceholder: 'OM',
    featured: false,
  },
  {
    id: 'allstar-news',
    title: 'Allstar News',
    summary: 'A real-time sports news aggregator featuring live scores, personalized feeds, and push notifications.',
    category: 'News',
    technologies: ['Kotlin', 'Swift', 'Firebase Cloud Messaging', 'Room'],
    platforms: ['iOS', 'Android'],
    role: 'Native Developer',
    responsibilities: [
      'Built custom UI components for dynamic news feeds and live scoreboards.',
      'Implemented robust push notification handling for breaking news alerts.',
      'Optimized image loading and caching using Glide and SDWebImage.',
    ],
    achievements: [
      'Handled 5M+ daily push notifications during major sporting events.',
      'Reduced memory footprint by 30% through aggressive bitmap recycling.',
    ],
    imagePlaceholder: 'AN',
    featured: false,
  },
  {
    id: 'orthovoip',
    title: 'Orthovoip',
    summary: 'A specialized VoIP communication tool for orthodontic practices, allowing secure internal calling and patient management.',
    category: 'Healthcare',
    technologies: ['Flutter', 'WebRTC', 'SIP', 'Node.js'],
    platforms: ['iOS', 'Android', 'Web'],
    role: 'Lead Developer',
    responsibilities: [
      'Integrated WebRTC for high-quality, low-latency audio calling.',
      'Implemented background execution capabilities for incoming SIP calls.',
      'Built a cross-platform desktop counterpart using Flutter Web/MacOS.',
    ],
    achievements: [
      'Achieved < 150ms latency for cross-country VoIP calls.',
      'Successfully replaced legacy PBX systems in 50+ clinics.',
    ],
    imagePlaceholder: 'OV',
    featured: false,
  },
  {
    id: 'goods-in',
    title: 'Goods In',
    summary: 'An internal warehouse inventory management tool focused on barcode scanning, real-time stock updates, and logistics routing.',
    category: 'Internal Tool',
    technologies: ['Android (Java)', 'Zebra SDK', 'REST API', 'SQLite'],
    platforms: ['Android'],
    role: 'Android Developer',
    responsibilities: [
      'Integrated hardware barcode scanners using Zebra DataWedge SDK.',
      'Built a highly resilient offline-sync mechanism for warehouse dead-zones.',
      'Optimized the UI for fast, single-handed operation by warehouse staff.',
    ],
    achievements: [
      'Reduced inventory logging errors by 95%.',
      'Increased warehouse processing speed by 3x.',
    ],
    imagePlaceholder: 'GI',
    featured: false,
  },
  {
    id: 'text-confidential',
    title: 'Text Confidential',
    summary: 'A privacy-focused messaging application utilizing end-to-end encryption and ephemeral messaging protocols.',
    category: 'Mobile App',
    technologies: ['Flutter', 'Signal Protocol', 'SQLite', 'WebSockets'],
    platforms: ['iOS', 'Android'],
    role: 'Mobile Engineer',
    responsibilities: [
      'Implemented the Signal Protocol for robust end-to-end encryption.',
      'Built secure local storage mechanisms with encrypted SQLite databases.',
      'Developed the auto-deleting ephemeral message timer system.',
    ],
    achievements: [
      'Passed rigorous third-party security audits with zero critical vulnerabilities.',
      'Gained 500k+ downloads within the first three months of launch.',
    ],
    imagePlaceholder: 'TC',
    featured: false,
  },
  {
    id: 'jrt',
    title: 'JRT',
    summary: 'An enterprise resource planning (ERP) mobile client allowing executives to monitor KPIs and approve workflows on the go.',
    category: 'Enterprise',
    technologies: ['Flutter', 'GraphQL', 'Redux', 'OAuth2'],
    platforms: ['iOS', 'Android'],
    role: 'Senior Flutter Developer',
    responsibilities: [
      'Architected the mobile client to seamlessly interface with a complex legacy backend.',
      'Implemented Redux for predictable state management across deeply nested UI components.',
      'Built custom interactive charts for real-time KPI visualization.',
    ],
    achievements: [
      'Streamlined executive approval workflows, reducing approval time from days to hours.',
      'Replaced 3 separate legacy apps into one unified Flutter experience.',
    ],
    imagePlaceholder: 'JR',
    featured: false,
  },
];
