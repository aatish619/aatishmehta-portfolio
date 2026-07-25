import Image from 'next/image';
import { Heading } from '@/components/ui/heading';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/cn';

interface ProjectImageProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

function formatCallout(project: Project) {
  if (project.slug === 'mrsool') return '1Cr+ downloads';
  if (project.slug === 'magikschool') return '5k+ downloads';
  if (project.status === 'In progress') return 'In progress';
  if (project.status === 'Pending approvals') return 'Pending approvals';
  return null;
}

export function ProjectImage({ project, priority = false, className }: ProjectImageProps) {
  const image = project.images[0] || project.gallery[0];
  const callout = formatCallout(project);

  return (
    <div
      className={cn(
        'relative flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-teal-50',
        className
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={`${project.title} product screenshot`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <Heading size="h1" className="text-primary/20">
          {project.imagePlaceholder}
        </Heading>
      )}
      {callout && (
        <div className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-sm">
          {callout}
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/85 to-transparent" />
    </div>
  );
}
