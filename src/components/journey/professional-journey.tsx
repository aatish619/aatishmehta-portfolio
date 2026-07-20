'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Timeline } from './timeline';
import { TechnicalExpertise } from './technical-expertise';
import { Leadership } from './leadership';
import { Industries } from './industries';
import { Education } from './education';
import { Certifications } from './certifications';
import { CareerHighlights } from './career-highlights';
import { ResumeCTA } from './resume-cta';
import { EXPERIENCE_TIMELINE } from '@/data/experience';
import { TECHNICAL_EXPERTISE } from '@/data/skills';

export function ProfessionalJourney() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter experiences
  const filteredExperiences = useMemo(() => {
    if (!searchQuery) return EXPERIENCE_TIMELINE;
    const query = searchQuery.toLowerCase();
    return EXPERIENCE_TIMELINE.filter(
      (exp) =>
        exp.company.toLowerCase().includes(query) ||
        exp.role.toLowerCase().includes(query) ||
        exp.technologies.some((tech) => tech.toLowerCase().includes(query)) ||
        exp.industry.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Filter skills
  const filteredSkills = useMemo(() => {
    if (!searchQuery) return TECHNICAL_EXPERTISE;
    const query = searchQuery.toLowerCase();
    return TECHNICAL_EXPERTISE.filter(
      (skill) =>
        skill.name.toLowerCase().includes(query) ||
        skill.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="container px-4 md:px-6">
        
        {/* Header & Search */}
        <div className="mb-16 flex flex-col items-center justify-between gap-8 md:mb-24 lg:flex-row lg:items-end">
          <FadeIn className="max-w-2xl text-center lg:text-left">
            <Text size="sm" className="mb-4 font-semibold uppercase tracking-wider text-primary">
              Professional Journey
            </Text>
            <Heading size="h2" className="mb-6">
              Engineering, Architecture & Leadership
            </Heading>
            <Text size="lg" color="muted" className="text-balance">
              5+ years of building production-grade mobile applications, architecting scalable systems, and leading cross-functional engineering teams.
            </Text>
          </FadeIn>

          <FadeIn delay={0.2} className="w-full max-w-sm shrink-0">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search skills, companies, industries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border/50 bg-surface/50 py-3 pl-12 pr-4 text-sm text-foreground outline-none backdrop-blur-sm transition-all focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary"
              />
            </div>
          </FadeIn>
        </div>

        {/* Dynamic Content wrapper */}
        <div className="flex flex-col gap-24 sm:gap-32">
          
          {/* Career Highlights */}
          <div className="flex flex-col gap-8">
            <FadeIn>
              <Heading size="h3">Career Highlights</Heading>
            </FadeIn>
            <CareerHighlights />
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-8">
            <FadeIn>
              <Heading size="h3">Experience</Heading>
            </FadeIn>
            {filteredExperiences.length > 0 ? (
              <Timeline experiences={filteredExperiences} />
            ) : (
              <div className="py-12 text-center text-muted">
                No experience matches your search.
              </div>
            )}
          </div>

          {/* Technical Expertise */}
          <div className="flex flex-col gap-8">
            <FadeIn>
              <Heading size="h3">Technical Expertise</Heading>
            </FadeIn>
            {filteredSkills.length > 0 ? (
              <TechnicalExpertise skills={filteredSkills} />
            ) : (
              <div className="py-12 text-center text-muted">
                No skills match your search.
              </div>
            )}
          </div>

          {/* Leadership */}
          <div className="flex flex-col gap-8">
            <FadeIn>
              <Heading size="h3">Leadership & Collaboration</Heading>
            </FadeIn>
            <Leadership />
          </div>

          {/* Industries */}
          <div className="flex flex-col gap-8">
            <FadeIn>
              <Heading size="h3">Industry Expertise</Heading>
            </FadeIn>
            <Industries />
          </div>

          {/* Education & Certs */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col gap-8">
              <FadeIn>
                <Heading size="h3">Education</Heading>
              </FadeIn>
              <Education />
            </div>
            <div className="flex flex-col gap-8">
              <FadeIn>
                <Heading size="h3">Certifications</Heading>
              </FadeIn>
              <Certifications />
            </div>
          </div>
        </div>

        {/* Resume CTA */}
        <ResumeCTA />

      </div>
    </section>
  );
}
