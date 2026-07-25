import { notFound } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import { Container } from '@/components/layout/container';
import { CaseStudyHero } from '@/components/case-study/case-study-hero';
import { CaseStudyOverview } from '@/components/case-study/case-study-overview';
import { CaseStudyArchitecture } from '@/components/case-study/case-study-architecture';
import { CaseStudyGallery } from '@/components/case-study/case-study-gallery';
import { CaseStudyResults } from '@/components/case-study/case-study-results';
import { CaseStudyLinks } from '@/components/case-study/case-study-links';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen pb-16">
      <Container>
        {/* Back Navigation */}
        <div className="border-b border-border/10 pb-6 pt-16">
          <Link 
            href="/#work" 
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'group rounded-full')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>

        <CaseStudyHero project={project} />
        <CaseStudyOverview project={project} />
        <CaseStudyArchitecture project={project} />
        <CaseStudyGallery project={project} />
        <CaseStudyResults project={project} />
        <CaseStudyLinks project={project} />
        
        {/* Next/Prev could be added here in the future */}
      </Container>
    </article>
  );
}
