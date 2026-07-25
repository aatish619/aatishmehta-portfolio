import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Heading } from '@/components/ui/heading';
import { Project } from '@/data/projects';
import { cn } from '@/lib/cn';
import Image from 'next/image';

export function CaseStudyGallery({ project }: { project: Project }) {
  if (!project.gallery || project.gallery.length === 0) return null;

  return (
    <div className="py-16 lg:py-24 border-b border-border/30">
      <ScrollReveal>
        <Heading size="h3" className="mb-12">Product Gallery</Heading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((img, i) => (
            <div 
              key={i} 
              className={cn(
                'aspect-[4/3] w-full overflow-hidden rounded-2xl bg-card border border-border/50 flex items-center justify-center relative shadow-sm',
                i === 0 && 'sm:col-span-2 lg:col-span-3 aspect-[21/9]'
              )}
            >
              <Image
                src={img}
                alt={`${project.title} gallery screenshot ${i + 1}`}
                fill
                sizes={i === 0 ? '100vw' : '(min-width: 1024px) 33vw, 50vw'}
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
