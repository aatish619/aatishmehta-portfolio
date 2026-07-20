import { FadeIn } from '@/components/animations/fade-in';
import { cn } from '@/lib/cn';

const TECHNOLOGIES = [
  'Flutter',
  'Dart',
  'Swift',
  'Kotlin',
  'Android',
  'iOS',
  'TypeScript',
  'Next.js',
  'React Native',
  'Node.js',
  'GraphQL',
  'Firebase',
  'AWS',
  'GCP',
  'TensorFlow',
  'OpenAI',
];

export function TechStrip({ className }: { className?: string }) {
  // We duplicate the array for the seamless scroll effect
  const techList = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <FadeIn
      delay={0.8}
      className={cn(
        'w-full border-t border-border bg-card/30 backdrop-blur-sm py-4',
        className
      )}
    >
      <div className="flex w-full overflow-hidden">
        <div className="flex w-max animate-[shimmer_30s_linear_infinite] items-center gap-8 px-4 sm:gap-12 md:gap-16">
          {techList.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

TechStrip.displayName = 'TechStrip';
