'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ArrowRight, FileText } from 'lucide-react';
import { cn } from '@/lib/cn';
import Link from 'next/link';

export function HeroActions({ className }: { className?: string }) {
  return (
    <FadeIn delay={0.6} className={cn('flex flex-wrap gap-4', className)}>
      <Link
        href="#work"
        className={cn(buttonVariants({ size: 'lg' }), 'group rounded-full px-8')}
      >
        Explore My Work
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>

      <a
        href={siteConfig.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          'group rounded-full border-border/50 bg-background/50 px-8 backdrop-blur-md hover:bg-muted/50'
        )}
      >
        <FileText className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
        View Resume
      </a>
    </FadeIn>
  );
}

HeroActions.displayName = 'HeroActions';
