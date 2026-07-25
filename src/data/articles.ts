export type ArticleCategory =
  | 'Architecture'
  | 'Mobile'
  | 'Backend'
  | 'Performance'
  | 'Security'
  | 'AI'
  | 'Leadership'
  | 'System Design';

export type ArticleDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

const TODAY = '2026-07-21';

export interface ArticleSection {
  id: string;
  title: string;
  content: string; // Markdown or plain text depending on implementation
}

export interface ResourceLink {
  title: string;
  type: 'PDF' | 'GitHub' | 'Template' | 'Checklist' | 'Diagram';
  url: string; // Empty string for now as requested
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  coverImage?: string;
  category: ArticleCategory;
  tags: string[];
  difficulty: ArticleDifficulty;
  readingTime: number; // in minutes
  publishedDate: string;
  updatedDate?: string;
  author: string;
  featured: boolean;
  sections: ArticleSection[];
  relatedArticles?: string[]; // array of article slugs
  resources: ResourceLink[];
  downloads?: ResourceLink[];
}

export const ARTICLES: Article[] = [
  {
    id: 'push-notification-architecture',
    slug: 'push-notification-architecture',
    title: 'Push Notification Architecture (FCM + APNs)',
    subtitle: 'Scaling notifications for millions of active users.',
    summary: 'A deep dive into building a robust, high-throughput push notification pipeline that handles millions of messages reliably across iOS and Android.',
    category: 'Architecture',
    tags: ['Push Notifications', 'FCM', 'APNs', 'Redis', 'Microservices'],
    difficulty: 'Advanced',
    readingTime: 12,
    publishedDate: TODAY,
    updatedDate: TODAY,
    author: 'Aatish Mehta',
    featured: true,
    resources: [],
    downloads: [],
    sections: [
      { id: 'overview', title: 'Overview', content: 'In high-scale apps, delivering notifications reliably requires a specialized pipeline...' },
      { id: 'problem', title: 'Problem Statement', content: 'Directly calling FCM/APNs from your main API blocks threads and fails under load...' },
      { id: 'solution', title: 'Solution', content: 'Implementing a queue-based worker architecture using Redis and dedicated push workers...' },
    ]
  },
  {
    id: 'mobile-clean-architecture',
    slug: 'mobile-clean-architecture',
    title: 'Mobile Clean Architecture',
    subtitle: 'Decoupling UI from business logic.',
    summary: 'How to structure large-scale Flutter and Native mobile applications using Uncle Bob’s Clean Architecture principles.',
    category: 'Architecture',
    tags: ['Clean Architecture', 'SOLID', 'Flutter', 'iOS', 'Android'],
    difficulty: 'Advanced',
    readingTime: 15,
    publishedDate: TODAY,
    updatedDate: TODAY,
    author: 'Aatish Mehta',
    featured: true,
    resources: [],
    downloads: [],
    sections: [
      { id: 'overview', title: 'Overview', content: 'Clean architecture separates your app into Presentation, Domain, and Data layers...' },
    ]
  },
  {
    id: 'authentication-flow',
    slug: 'authentication-flow',
    title: 'Secure Authentication Flow',
    subtitle: 'OAuth2, JWT, and Biometrics.',
    summary: 'A comprehensive guide to implementing secure, industry-standard authentication flows in modern mobile applications.',
    category: 'Security',
    tags: ['OAuth2', 'JWT', 'Biometrics', 'Security'],
    difficulty: 'Intermediate',
    readingTime: 10,
    publishedDate: TODAY,
    updatedDate: TODAY,
    author: 'Aatish Mehta',
    featured: true,
    resources: [],
    downloads: [],
    sections: [
      { id: 'overview', title: 'Overview', content: 'Authentication is the critical gatekeeper of any application...' },
    ]
  },
  {
    id: 'flutter-performance',
    slug: 'flutter-performance-optimization',
    title: 'Flutter Performance Optimization',
    subtitle: 'Achieving 60fps on low-end devices.',
    summary: 'Practical strategies for identifying and resolving performance bottlenecks, jank, and memory leaks in Flutter applications.',
    category: 'Performance',
    tags: ['Flutter', 'Performance', 'Dart', 'Rendering'],
    difficulty: 'Advanced',
    readingTime: 8,
    publishedDate: TODAY,
    updatedDate: TODAY,
    author: 'Aatish Mehta',
    featured: true,
    resources: [],
    downloads: [],
    sections: [
      { id: 'overview', title: 'Overview', content: '60fps is the baseline expectation, but complex UI can cause frame drops...' },
    ]
  },
  {
    id: 'offline-first',
    slug: 'offline-first-mobile-apps',
    title: 'Building Offline-first Mobile Apps',
    subtitle: 'Syncing strategies and local databases.',
    summary: 'How to design mobile applications that function seamlessly without a network connection and sync reliably when back online.',
    category: 'Architecture',
    tags: ['Offline-first', 'SQLite', 'Sync', 'Mobile'],
    difficulty: 'Intermediate',
    readingTime: 14,
    publishedDate: TODAY,
    updatedDate: TODAY,
    author: 'Aatish Mehta',
    featured: true,
    resources: [],
    downloads: [],
    sections: [
      { id: 'overview', title: 'Overview', content: 'Network connectivity is never guaranteed. Apps must handle offline gracefully...' },
    ]
  },
  {
    id: 'ai-integration',
    slug: 'ai-integration-mobile',
    title: 'AI Integration in Mobile Apps',
    subtitle: 'On-device ML vs Cloud LLMs.',
    summary: 'Evaluating the tradeoffs between running machine learning models locally on the device versus relying on cloud APIs like OpenAI.',
    category: 'AI',
    tags: ['AI', 'LLM', 'TensorFlow Lite', 'OpenAI'],
    difficulty: 'Intermediate',
    readingTime: 9,
    publishedDate: TODAY,
    updatedDate: TODAY,
    author: 'Aatish Mehta',
    featured: true,
    resources: [],
    downloads: [],
    sections: [
      { id: 'overview', title: 'Overview', content: 'Integrating AI capabilities is becoming standard, but where should the compute happen?' },
    ]
  }
];
