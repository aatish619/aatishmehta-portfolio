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
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  technologies: string[];
  platforms: string[];
  role: string;
  teamSize?: string;
  duration?: string;
  responsibilities: string[];
  architecture?: string;
  businessImpact?: string;
  features?: string[];
  achievements: string[];
  results?: string[];
  skills?: string[];
  imagePlaceholder: string;
  images: string[];
  gallery: string[];
  storeLinks: {
    github?: string;
    website?: string;
    appStore?: string;
    playStore?: string;
  };
  status?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'mrsool',
    slug: 'mrsool',
    title: 'Mrsool',
    summary: 'One of the largest delivery platforms in the MENA region, handling complex logistics, real-time tracking, and high-volume transactions.',
    category: 'Enterprise',
    technologies: ['Swift', 'Kotlin', 'REST API', 'WebSockets', 'Google Maps API'],
    platforms: ['iOS', 'Android'],
    role: 'Senior Native Engineer',
    teamSize: '15+ Engineers',
    duration: '2 Years',
    responsibilities: [
      'Maintained and optimized legacy native iOS and Android codebases.',
      'Integrated real-time WebSocket communication for live driver tracking.',
      'Implemented complex caching strategies to ensure offline resilience.',
    ],
    architecture: 'Clean Architecture with MVVM for iOS and Android, focusing on modularity and high test coverage to ensure stability during peak delivery hours.',
    businessImpact: 'Significantly reduced delivery friction and improved driver tracking accuracy, directly contributing to higher customer satisfaction and retention.',
    features: ['Real-time driver tracking', 'Complex order routing', 'Offline-first caching'],
    achievements: [
      'Improved app launch time by 40%.',
      'Successfully handled peak loads of 100k+ concurrent active deliveries.',
    ],
    results: ['40% faster load times', '100k+ peak concurrent users', '99.9% uptime during peak hours'],
    skills: ['Swift', 'Kotlin', 'Architecture', 'Leadership', 'Testing'],
    imagePlaceholder: 'MR',
    images: [],
    gallery: [],
    storeLinks: {},
    featured: true,
  },
  {
    id: 'smart-fasal',
    slug: 'smart-fasal',
    title: 'Smart Fasal',
    summary: 'An agricultural technology application developed for DCM Shriram Agritech to empower farmers with data-driven insights and crop management.',
    category: 'Enterprise',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    platforms: ['iOS', 'Android'],
    role: 'Lead Mobile Engineer',
    teamSize: '5 Engineers',
    duration: '1 Year',
    responsibilities: [
      'Led the end-to-end development of the cross-platform application using Flutter.',
      'Architected the data pipeline to handle intermittent network connectivity in rural areas.',
      'Collaborated closely with product owners and agricultural experts to translate business requirements into technical solutions.',
    ],
    architecture: 'Offline-first architecture utilizing local database caching (SQLite/Hive) synced with Firebase and custom REST APIs.',
    businessImpact: 'Empowered thousands of farmers with actionable insights, increasing crop yields and optimizing resource usage.',
    features: ['Offline-first sync', 'Weather tracking', 'Crop yield predictions'],
    achievements: [
      'Successfully launched across multiple rural demographics.',
      'Achieved a 95% crash-free rate despite highly variable network conditions.',
    ],
    results: ['Deployed to 10,00+ farmers', '95% crash-free rate'],
    skills: ['Flutter', 'Firebase', 'Architecture', 'Client Communication'],
    imagePlaceholder: 'SF',
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
  {
    id: 'show-united',
    slug: 'show-united',
    title: 'Show United',
    summary: 'A premium entertainment application scaling to millions of users, providing seamless video streaming and an immersive user experience.',
    category: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Clean Architecture', 'BLoC'],
    platforms: ['iOS', 'Android'],
    role: 'Lead Mobile Engineer',
    teamSize: '8 Engineers',
    duration: '1.5 Years',
    responsibilities: [
      'Architected the entire Flutter application from scratch using Clean Architecture principles.',
      'Implemented robust state management using BLoC for predictable UI updates.',
      'Optimized video rendering and memory management to ensure 60fps playback.',
    ],
    architecture: 'Clean Architecture with BLoC for predictable state management. Custom video caching layer to handle high-definition streaming.',
    businessImpact: 'Created a highly engaging media platform that retained users significantly longer than previous iterations.',
    features: ['60fps video streaming', 'Offline video caching', 'Interactive UI elements'],
    achievements: [
      'Scaled application architecture to support 1M+ active users.',
      'Reduced crash rate to < 0.1% across thousands of device variations.',
    ],
    results: ['1M+ active users', '< 0.1% crash rate'],
    skills: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture'],
    imagePlaceholder: 'SU',
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
  {
    id: 'ecmis',
    slug: 'ecmis',
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
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
  {
    id: 'orbis-mortgage',
    slug: 'orbis-mortgage',
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
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
  {
    id: 'allstar-news',
    slug: 'allstar-news',
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
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
  {
    id: 'orthovoip',
    slug: 'orthovoip',
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
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
  {
    id: 'goods-in',
    slug: 'goods-in',
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
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
  {
    id: 'text-confidential',
    slug: 'text-confidential',
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
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
  {
    id: 'jrt',
    slug: 'jrt',
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
    images: [],
    gallery: [],
    storeLinks: {},
    featured: false,
  },
];
