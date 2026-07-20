import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Heading } from '@/components/ui/heading';
import { Project } from '@/data/projects';
import { cn } from '@/lib/cn';

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
                'aspect-[4/3] w-full overflow-hidden rounded-2xl bg-card border border-border/50 flex items-center justify-center relative',
                i === 0 && 'sm:col-span-2 lg:col-span-3 aspect-[21/9]'
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background to-card" />
              <Heading size="h2" className="text-muted/20 relative z-10">
                Image Placeholder
              </Heading>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
