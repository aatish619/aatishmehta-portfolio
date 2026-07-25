import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/data/projects';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/cn';

function AppleStoreMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.8 13.1c0-2.1 1.7-3.2 1.8-3.3-1-1.4-2.6-1.6-3.2-1.6-1.4-.1-2.8.8-3.5.8-.7 0-1.8-.8-3-.8-1.6 0-3 1-3.9 2.5-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.7 2.4 2.9 2.3 1.1 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-.9 2.8-2 .9-1.2 1.3-2.4 1.4-2.5-.1 0-2.6-1-2.6-3.6Zm-2.3-6.1c.6-.8 1-1.8.9-2.8-1 .1-2 .7-2.7 1.5-.6.7-1.1 1.7-1 2.7 1.1.1 2.1-.5 2.8-1.4Z" />
    </svg>
  );
}

function PlayStoreMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 4.5v15a1 1 0 0 0 1.6.8l10.3-7.1-10.3-7.1A1 1 0 0 0 3 4.5Z" fill="#34A853" />
      <path d="M15.1 13.7 18.4 16l2.2-1.5c.7-.5.7-1.5 0-2l-2.2-1.5-3.3 2.7Z" fill="#EA4335" />
      <path d="M15.1 10.3 3.9 2.6A1 1 0 0 0 3 3v18a1 1 0 0 0 .9.4l11.2-7.7-3.2-3.4Z" fill="#4285F4" />
      <path d="m15.1 10.3-3.2 3.4 3.2 3.3 3.3-2.7-3.3-4Z" fill="#FBBC05" />
    </svg>
  );
}

export function CaseStudyHero({ project }: { project: Project }) {
  const hasAppStore = Boolean(project.storeLinks.appStore);
  const hasPlayStore = Boolean(project.storeLinks.playStore);
  const hasWebsite = Boolean(project.storeLinks.website);

  return (
    <div className="flex flex-col gap-4 border-b border-border/30 pb-6 pt-20 lg:pb-8 lg:pt-24">
      <FadeIn className="grid gap-5 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Text size="sm" color="primary" className="font-semibold uppercase tracking-widest">
              {project.category}
            </Text>
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-[10px] uppercase tracking-wider">
              Case Study
            </Badge>
          </div>
          <Heading size="display" className="max-w-4xl tracking-tight">
            {project.title}
          </Heading>
          <Text size="lg" color="muted" className="max-w-3xl text-balance leading-relaxed">
            {project.summary}
          </Text>
        </div>

        <div className="rounded-2xl border border-border/50 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
          <Text size="sm" className="mb-3 font-semibold uppercase tracking-wider text-muted">
            Available On
          </Text>
          <div className="flex flex-wrap items-center gap-3">
            {hasAppStore && (
              <Link
                href={project.storeLinks.appStore!}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10'
                )}
                aria-label="Open App Store"
                title="App Store"
              >
                <AppleStoreMark className="h-5 w-5" />
              </Link>
            )}
            {hasPlayStore && (
              <Link
                href={project.storeLinks.playStore!}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-hover'
                )}
                aria-label="Open Play Store"
                title="Play Store"
              >
                <PlayStoreMark className="h-5 w-5" />
              </Link>
            )}
            {project.slug === 'mrsool' && (
              <span className="inline-flex h-12 items-center rounded-full border border-primary/20 bg-primary/10 px-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
                1Cr+ downloads
              </span>
            )}
            {hasWebsite && (
              <Link
                href={project.storeLinks.website!}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-white text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10'
                )}
                aria-label="Open Website"
                title="Website"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            )}
          </div>
          {!hasAppStore && !hasPlayStore && !hasWebsite && (
            <Text size="sm" color="muted" className="leading-relaxed">
              This project is currently not publicly listed. I can share more details during interviews or on request.
            </Text>
          )}
        </div>
      </FadeIn>

      <StaggerChildren initialDelay={0.2} staggerDelay={0.06} className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <StaggerItem>
          <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">Role</Text>
          <Text className="font-medium">{project.role}</Text>
        </StaggerItem>
        {project.teamSize && (
          <StaggerItem>
            <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">Team Size</Text>
            <Text className="font-medium">{project.teamSize}</Text>
          </StaggerItem>
        )}
        {project.duration && (
          <StaggerItem>
            <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">Duration</Text>
            <Text className="font-medium">{project.duration}</Text>
          </StaggerItem>
        )}
        <StaggerItem>
          <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">Platforms</Text>
          <div className="flex flex-wrap gap-2">
            {project.platforms.map((platform) => (
              <Badge key={platform} variant="secondary" className="text-[10px]">
                {platform}
              </Badge>
            ))}
          </div>
        </StaggerItem>
      </StaggerChildren>
    </div>
  );
}
