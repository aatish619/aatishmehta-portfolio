import { FadeIn } from '@/components/animations/fade-in';
import { buttonVariants } from '@/components/ui/button';
import { Project } from '@/data/projects';
import { cn } from '@/lib/cn';
import { ExternalLink, Code2, AppWindow } from 'lucide-react';
import Link from 'next/link';

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

export function CaseStudyLinks({ project }: { project: Project }) {
  const links = project.storeLinks;
  if (!links || (!links.appStore && !links.playStore && !links.github && !links.website)) return null;

  return (
    <div className="py-4 lg:py-6">
      <FadeIn className="rounded-3xl border border-border/40 bg-gradient-to-br from-white/90 via-white/75 to-primary/5 p-4 shadow-sm md:p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <AppWindow className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">Store Links</p>
            <p className="text-sm text-muted">Open the live app listings when available.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          {links.appStore && (
            <Link
              href={links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'icon', variant: 'outline' }),
                'rounded-full border-border/60 bg-white/85 text-foreground shadow-sm hover:border-primary/40 hover:bg-primary/10'
              )}
              aria-label="View on App Store"
              title="App Store"
            >
              <AppleStoreMark className="h-5 w-5" />
            </Link>
          )}
          {links.playStore && (
            <Link
              href={links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'icon', variant: 'default' }),
                'rounded-full shadow-sm'
              )}
              aria-label="View on Play Store"
              title="Play Store"
            >
              <PlayStoreMark className="h-5 w-5" />
            </Link>
          )}
          {links.website && (
            <Link
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'icon', variant: 'secondary' }),
                'rounded-full shadow-sm'
              )}
              aria-label="Visit Website"
              title="Website"
            >
              <ExternalLink className="h-5 w-5" />
            </Link>
          )}
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: 'icon', variant: 'secondary' }),
                'rounded-full shadow-sm'
              )}
              aria-label="View Source Code"
              title="Source Code"
            >
              <Code2 className="h-5 w-5" />
            </Link>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
