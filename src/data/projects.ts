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
    summary: 'On-demand delivery super-app with 10M+ downloads across Saudi Arabia, Bahrain, and Egypt, supported through Embedded Flutter modules inside a hybrid native architecture.',
    category: 'Enterprise',
    technologies: ['Flutter', 'Dart', 'Embedded Flutter', 'GraphQL', 'REST APIs', 'Google Maps', 'Firebase'],
    platforms: ['iOS', 'Android'],
    role: 'Flutter Contributor',
    teamSize: '15+ Engineers',
    duration: 'Production Scale',
    responsibilities: [
      'Contributed Flutter modules within a hybrid/native architecture using Embedded Flutter.',
      'Supported gradual migration from native Android/iOS without disrupting production users.',
      'Worked with GraphQL APIs and optimized network communication in high-traffic delivery flows.',
      'Contributed to map-based delivery workflows including live tracking and location features.',
    ],
    architecture: 'Hybrid native architecture with Embedded Flutter modules, GraphQL-backed data flows, Firebase services, and Google Maps SDK for location-heavy delivery journeys.',
    businessImpact: 'Supported a live delivery platform operating at marketplace scale while enabling Flutter feature delivery inside an existing native product.',
    features: ['Embedded Flutter modules', 'GraphQL data flows', 'Live location workflows', 'Production marketplace delivery'],
    achievements: [
      'Contributed to a live app with 10M+ downloads.',
      'Supported production flows across Saudi Arabia, Bahrain, and Egypt.',
    ],
    results: ['10M+ downloads', '3 active markets', 'Hybrid Flutter delivery'],
    skills: ['Flutter', 'GraphQL', 'Maps', 'Production Engineering'],
    imagePlaceholder: 'MR',
    images: ['/images/projects/mrsool.png'],
    gallery: ['/images/projects/mrsool.png'],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.mrsool&pcampaignid=web_share',
      appStore: 'https://apps.apple.com/in/app/mrsool-app-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D9%85%D8%B1%D8%B3%D9%88%D9%84/id1040038773',
    },
    featured: true,
    status: 'Live',
  },
  {
    id: 'smart-fasal',
    slug: 'smart-fasal',
    title: 'Smart Fasal',
    summary: 'DCM Shriram AgriTech SaaS product for Farmer, Retailer, and Distributor roles. I have been actively working on it for the last 1.5 years and it is around 90% complete, with AI crop disease detection, weather intelligence, and offline-first rural reliability.',
    category: 'Enterprise',
    technologies: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'REST APIs', 'Plantix API', 'AccuWeather API', 'TTS'],
    platforms: ['iOS', 'Android'],
    role: 'Lead Mobile Engineer',
    teamSize: '5 Engineers',
    duration: '1.5 Years',
    responsibilities: [
      'Built the production SaaS product for DCM Shriram AgriTech, with role-based modules for farmers, retailers, and distributors.',
      'Implemented AI-powered crop disease detection with on-device image classification and Plantix API integration.',
      'Integrated hyper-local weather intelligence through AccuWeather API.',
      'Engineered multilingual TTS support for low-literacy rural users.',
      'Designed the platform for offline-first adoption in rural usage conditions and stable sync behavior.',
    ],
    architecture: 'Offline-first SQLite architecture with Firebase-backed data flows, BLoC state management, REST integrations, AI image processing, and localized voice guidance for a SaaS agri platform.',
    businessImpact: 'A long-running B2B SaaS engagement where I have handled product delivery directly with enterprise stakeholders and built toward a near-complete platform for field adoption.',
    features: ['Role-based access', 'AI disease detection', 'Weather intelligence', 'Multilingual TTS', 'Offline-first sync', 'B2B SaaS delivery'],
    achievements: [
      'Delivered instant diagnosis and treatment suggestions with minimal connectivity.',
      'Built reliability-first data handling for low-connectivity rural environments.',
      'Currently driving the product toward final completion and production readiness.',
    ],
    results: ['90% complete', '1.5 years active', 'DCM Shriram SaaS'],
    skills: ['Flutter', 'BLoC', 'AI Integration', 'Offline Architecture'],
    imagePlaceholder: 'SF',
    images: ['/images/projects/smart-fasal.png'],
    gallery: ['/images/projects/smart-fasal.png'],
    storeLinks: {},
    featured: false,
    status: 'In progress',
  },
  {
    id: 'show-united',
    slug: 'show-united',
    title: 'Show United',
    summary: 'Artist and professional networking marketplace connecting performers with event organizers through proximity discovery, real-time chat, subscriptions, and deep linking.',
    category: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'GetX', 'Mapbox SDK', 'Firebase FCM', 'Twilio', 'Socket.io', 'REST APIs'],
    platforms: ['iOS', 'Android'],
    role: 'Solo Flutter Lead',
    teamSize: 'Independent Delivery',
    duration: 'Live Release',
    responsibilities: [
      'Led end-to-end solo delivery from requirements through app store release.',
      'Integrated Mapbox SDK for proximity-based talent discovery and custom pin clustering.',
      'Implemented real-time chat using Firebase, Twilio, and Socket.io.',
      'Built subscription-based feature gating, social OAuth authentication, and deep linking.',
    ],
    architecture: 'Flutter marketplace architecture using GetX, Mapbox location discovery, Firebase messaging, Twilio communication features, Socket.io realtime flows, and REST APIs.',
    businessImpact: 'Delivered a two-sided talent discovery product from concept to release without a dedicated PM layer.',
    features: ['Talent discovery map', 'Real-time chat', 'Subscription gating', 'Social OAuth', 'Deep links'],
    achievements: [
      'Owned full mobile delivery independently.',
      'Released on both Play Store and App Store.',
    ],
    results: ['Solo delivery', 'Live mobile apps', 'Realtime marketplace'],
    skills: ['Flutter', 'GetX', 'Mapbox', 'Realtime Systems'],
    imagePlaceholder: 'SU',
    images: ['/images/projects/show-united.png'],
    gallery: ['/images/projects/show-united.png'],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.showunited.app&pcampaignid=web_share',
      appStore: 'https://apps.apple.com/in/app/show-united/id6756517496',
    },
    featured: false,
    status: 'Live',
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
    images: ['/images/projects/ecmis.png'],
    gallery: ['/images/projects/ecmis.png'],
    storeLinks: {},
    featured: false,
    status: 'Pending approvals',
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
    images: ['/images/projects/orbis-mortgage.png'],
    gallery: ['/images/projects/orbis-mortgage.png'],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.bendigi.dlcmortgage&pcampaignid=web_share',
    },
    featured: false,
    status: 'Live',
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
    images: ['/images/projects/allstar-news.png'],
    gallery: ['/images/projects/allstar-news.png'],
    storeLinks: {},
    featured: false,
    status: 'Live',
  },
  {
    id: 'orthovoip',
    slug: 'orthovoip',
    title: 'Orthovoip',
    summary: 'Healthcare communication app with foreground/background VoIP calling, native call UI, platform channels, Twilio video/audio, and offline patient data storage.',
    category: 'Healthcare',
    technologies: ['Flutter', 'Dart', 'Twilio', 'VoIP SDKs', 'Platform Channels', 'SQLite', 'FCM'],
    platforms: ['iOS', 'Android', 'Web'],
    role: 'Lead Developer',
    responsibilities: [
      'Architected real-time calling with foreground and background state management.',
      'Integrated native iOS CallKit and Android ConnectionService through platform channels.',
      'Implemented FCM-triggered native call UI for terminated-app call handling.',
      'Used SQLite offline storage for critical patient communication data.',
    ],
    architecture: 'Flutter communication client with native platform channel bridges, Twilio VoIP/video calling, FCM call triggers, and SQLite persistence for healthcare workflows.',
    businessImpact: 'Reduced missed-call risk in healthcare communication by keeping call handling reliable across foreground, background, and terminated app states.',
    features: ['Native call UI', 'Background call handling', 'Twilio VoIP/video', 'Offline patient data'],
    achievements: [
      'Delivered reliable live calling on Play Store and App Store.',
      'Ensured call UI presentation even when the app was fully terminated.',
    ],
    results: ['Live VoIP app', 'Native call integration', 'Healthcare workflow support'],
    skills: ['Flutter', 'Platform Channels', 'Twilio', 'SQLite'],
    imagePlaceholder: 'OV',
    images: ['/images/projects/orthovoip.png'],
    gallery: ['/images/projects/orthovoip.png'],
    storeLinks: {
      appStore: 'https://apps.apple.com/in/app/orthovoip-llc/id6451450561',
    },
    featured: false,
    status: 'Live',
  },
  {
    id: 'magikschool',
    slug: 'magikschool',
    title: 'MagikSchool',
    summary: 'A dynamic EdTech platform built with fully data-driven screens for principals, teachers, and students, covering attendance, dashboards, and role-based school workflows.',
    category: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'BLoC', 'Firebase', 'REST APIs', 'Role-based Architecture'],
    platforms: ['iOS', 'Android'],
    role: 'Flutter Engineer',
    teamSize: 'Product Team',
    duration: 'Live Release',
    responsibilities: [
      'Built a fully dynamic app where all screens are data-driven and driven by school role and permissions.',
      'Implemented role-specific experiences for principals, teachers, and students.',
      'Covered attendance, school operations, and workflow screens in a modular structure.',
      'Shaped the app to support an EdTech startup with scalable data-driven UI patterns.',
    ],
    architecture: 'Data-driven Flutter architecture with modular role-based UI, Firebase-backed services, and reusable screen configurations for principals, teachers, and students.',
    businessImpact: 'Delivered a scalable EdTech product model where screens and workflows can evolve without constant app rewrites.',
    features: ['Dynamic screens', 'Role-based access', 'Attendance workflows', 'Principal dashboards', 'Teacher and student flows'],
    achievements: [
      'Built around a data-driven app concept instead of hardcoded screen flows.',
      'Supported school roles with distinct experiences and shared platform logic.',
    ],
    results: ['5k+ downloads', 'Dynamic EdTech platform', 'Role-based school workflows'],
    skills: ['Flutter', 'Role-based UI', 'Data-driven Screens', 'EdTech'],
    imagePlaceholder: 'MS',
    images: ['/images/projects/jrt.png'],
    gallery: ['/images/projects/jrt.png'],
    storeLinks: {
      appStore: 'https://apps.apple.com/in/app/magikschool/id6762769822',
      playStore: 'https://play.google.com/store/apps/details?id=com.preyas.app&pcampaignid=web_share',
    },
    featured: false,
    status: 'Live',
  },
  {
    id: 'nvpap-scanner',
    slug: 'nvpap-scanner',
    title: 'NVPAP Scanner',
    summary: 'A mobile scanning utility published on the App Store for field and operational workflows.',
    category: 'Mobile App',
    technologies: ['Flutter', 'Dart', 'Scanner Flow', 'Mobile UI'],
    platforms: ['iOS'],
    role: 'Mobile Engineer',
    responsibilities: [
      'Shipped the mobile scanning experience for field use.',
      'Kept the UI focused on quick scanning and workflow clarity.',
    ],
    achievements: [
      'Published on the App Store.',
    ],
    imagePlaceholder: 'NV',
    images: ['/images/projects/text-confidential.png'],
    gallery: ['/images/projects/text-confidential.png'],
    storeLinks: {
      appStore: 'https://apps.apple.com/in/app/nvpap-scanner/id6503014876',
    },
    featured: false,
    status: 'Live',
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
    images: ['/images/projects/goods-in.png'],
    gallery: ['/images/projects/goods-in.png'],
    storeLinks: {},
    featured: false,
    status: 'Pending approvals',
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
    images: ['/images/projects/text-confidential.png'],
    gallery: ['/images/projects/text-confidential.png'],
    storeLinks: {},
    featured: false,
    status: 'Pending approvals',
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
    images: ['/images/projects/jrt.png'],
    gallery: ['/images/projects/jrt.png'],
    storeLinks: {
      playStore: 'https://play.google.com/store/apps/details?id=com.jrt.inventory&pcampaignid=web_share',
    },
    featured: false,
    status: 'Live',
  },
];
