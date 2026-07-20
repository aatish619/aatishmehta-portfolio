import { FadeIn } from '@/components/animations/fade-in';
import { buttonVariants } from '@/components/ui/button';
import { Project } from '@/data/projects';
import { cn } from '@/lib/cn';
import { ExternalLink, Code2, MonitorSmartphone, Smartphone } from 'lucide-react';
import Link from 'next/link';

export function CaseStudyLinks({ project }: { project: Project }) {
  const links = project.storeLinks;
  if (!links || (!links.appStore && !links.playStore && !links.github && !links.website)) return null;

  return (
    <div className="py-16 lg:py-24">
      <FadeIn className="flex flex-wrap gap-4 items-center justify-center">
        {links.appStore && (
          <Link href={links.appStore} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: 'lg', variant: 'default' }))}>
            <MonitorSmartphone className="mr-2 h-5 w-5" />
            View on App Store
          </Link>
        )}
        {links.playStore && (
          <Link href={links.playStore} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: 'lg', variant: 'default' }))}>
            <Smartphone className="mr-2 h-5 w-5" />
            View on Play Store
          </Link>
        )}
        {links.website && (
          <Link href={links.website} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: 'lg', variant: 'outline' }))}>
            <ExternalLink className="mr-2 h-5 w-5" />
            Visit Website
          </Link>
        )}
        {links.github && (
          <Link href={links.github} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }))}>
            <Code2 className="mr-2 h-5 w-5" />
            View Source Code
          </Link>
        )}
      </FadeIn>
    </div>
  );
}
