export type ArchitectureCategory =
  | 'Architecture'
  | 'Backend'
  | 'Frontend'
  | 'Mobile'
  | 'Performance'
  | 'Security'
  | 'AI'
  | 'DevOps'
  | 'System Design'
  | 'All';

export type DiagramType = 'layer' | 'notification' | 'authentication' | 'flow';

export interface ArchitectureSection {
  title: string;
  content: string[];
}

export interface ArchitectureArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  category: ArchitectureCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readingTime: string; // e.g. "5 min read"
  technologies: string[];
  diagram: DiagramType;
  sections: {
    problem?: ArchitectureSection;
    solution?: ArchitectureSection;
    dataFlow?: ArchitectureSection;
    bestPractices?: ArchitectureSection;
    commonMistakes?: ArchitectureSection;
  };
  relatedArticles?: string[]; // array of slugs
  tags: string[];
}

export const ARCHITECTURE_ARTICLES: ArchitectureArticle[] = [
  {
    id: 'mobile-clean-architecture',
    slug: 'mobile-clean-architecture',
    title: 'Mobile Clean Architecture',
    subtitle: 'Structuring highly scalable and testable mobile applications.',
    summary: 'A deep dive into separating concerns across Presentation, Domain, and Data layers to ensure long-term maintainability in Flutter and Native apps.',
    category: 'Architecture',
    difficulty: 'Advanced',
    readingTime: '8 min read',
    technologies: ['Flutter', 'Swift', 'Kotlin', 'BLoC', 'MVVM'],
    diagram: 'layer',
    sections: {
      problem: {
        title: 'The God-Class Anti-Pattern',
        content: [
          'In many mobile applications, UI logic, network requests, and database queries end up heavily entangled within massive View Controllers or StatefulWidgets.',
          'This tight coupling makes testing nearly impossible, prevents code reuse, and creates a fragile codebase where a change in a REST API breaks the UI layout.',
        ]
      },
      solution: {
        title: 'Layered Separation of Concerns',
        content: [
          'By enforcing strict dependency rules (Dependencies point inward), we can isolate the core business rules (Domain) from volatile external agencies like databases and UI frameworks.',
          'The Data Layer handles API requests and caching. The Domain layer defines interfaces (Repositories) and Use Cases. The Presentation layer binds the Use Cases to the UI via state management (e.g., BLoC or ViewModel).',
        ]
      },
      bestPractices: {
        title: 'Best Practices',
        content: [
          'Always use Dependency Injection to provide implementations for your interfaces.',
          'Data models (DTOs) should map to pure Domain Entities before reaching the business logic layer.',
          'Ensure the Domain Layer has zero dependencies on any framework-specific libraries.',
        ]
      }
    },
    tags: ['Clean Architecture', 'SOLID', 'Dependency Injection', 'Testing'],
  },
  {
    id: 'push-notification-lifecycle',
    slug: 'push-notification-lifecycle',
    title: 'Push Notification Architecture',
    subtitle: 'Reliable delivery mechanisms across distributed systems.',
    summary: 'How to architect robust push notification pipelines that handle millions of messages across APNs, FCM, and custom WebSockets without dropping events.',
    category: 'Backend',
    difficulty: 'Intermediate',
    readingTime: '6 min read',
    technologies: ['Firebase', 'APNs', 'Node.js', 'Redis'],
    diagram: 'notification',
    sections: {
      problem: {
        title: 'Message Loss and Spikes',
        content: [
          'Push notifications are inherently unreliable. Sending millions of messages synchronously blocks servers, and devices frequently drop tokens or restrict background processing.',
          'Without a proper pipeline, systems easily experience localized DDoS attacks from their own infrastructure when attempting to notify all users simultaneously.'
        ]
      },
      solution: {
        title: 'Queue-Based Asynchronous Processing',
        content: [
          'Decouple the notification trigger from the actual delivery mechanism. When an event occurs, push a payload to an in-memory queue (like Redis or RabbitMQ).',
          'Dedicated worker nodes consume the queue, batch the messages, and asynchronously stream them to FCM/APNs. This allows for rate-limiting, retries, and dead-letter queues for failures.'
        ]
      },
      dataFlow: {
        title: 'The Data Flow',
        content: [
          '1. Client registers device token and sends it to our Backend.',
          '2. Backend stores the token mapped to the User ID.',
          '3. An internal service triggers a push event and places it on a Redis queue.',
          '4. A Push Worker consumes the event, fetches active tokens, and fires to APNs/FCM.',
          '5. APNs/FCM delivers the payload to the device.'
        ]
      }
    },
    tags: ['Microservices', 'Queues', 'APNs', 'FCM'],
  },
  {
    id: 'authentication-flow',
    slug: 'authentication-flow',
    title: 'Secure Authentication Flows',
    subtitle: 'Implementing OAuth2, JWTs, and biometric unlocks securely.',
    summary: 'A visual breakdown of how modern authentication state is securely managed, stored, and refreshed on mobile clients without exposing sensitive tokens.',
    category: 'Security',
    difficulty: 'Advanced',
    readingTime: '7 min read',
    technologies: ['OAuth2', 'JWT', 'Secure Storage', 'Biometrics'],
    diagram: 'authentication',
    sections: {
      problem: {
        title: 'Token Leakage',
        content: [
          'Storing access tokens in unencrypted SharedPreferences or UserDefaults leaves applications vulnerable to malicious extraction on compromised devices.',
          'Additionally, handling token expiration improperly leads to abrupt forced logouts, ruining the user experience.'
        ]
      },
      solution: {
        title: 'Keychain & Interceptors',
        content: [
          'Tokens must be stored in the iOS Keychain and Android Keystore. The application should employ a robust HTTP interceptor that detects 401 Unauthorized responses.',
          'Upon detecting a 401, the interceptor pauses all outgoing network requests, uses a securely stored Refresh Token to acquire a new Access Token, and seamlessly resumes the pending requests.'
        ]
      },
      commonMistakes: {
        title: 'Common Security Mistakes',
        content: [
          'Logging token payloads to the console during development.',
          'Using extremely long-lived Access Tokens instead of utilizing Refresh Tokens.',
          'Failing to clear securely stored tokens upon a manual user logout.'
        ]
      }
    },
    tags: ['Security', 'OAuth2', 'JWT', 'Interceptors'],
  }
];
