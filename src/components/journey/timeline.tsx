'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { ExperienceCard } from './experience-card';
import type { Experience } from '@/data/experience';
import { motion } from 'framer-motion';

interface TimelineProps {
  experiences: Experience[];
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative mx-auto max-w-5xl py-2">
      {/* Vertical Line */}
      <div className="absolute bottom-0 left-4 top-0 w-[2px] bg-border/50 md:left-1/2 md:-ml-[1px]" />
      
      {/* Animated progress line */}
      <motion.div
        className="absolute bottom-0 left-4 top-0 w-[2px] origin-top bg-primary md:left-1/2 md:-ml-[1px]"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="flex flex-col gap-6 lg:gap-8">
        {experiences.map((experience, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={experience.id} className="relative flex w-full items-center justify-start md:justify-center">
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute left-[11px] z-10 h-4 w-4 rounded-full border-2 border-background bg-primary md:left-1/2 md:-ml-2"
              />

              {/* Card Container */}
              <div
                className={`w-full pl-12 pr-4 md:w-[calc(50%-1rem)] md:px-0 ${
                  isEven ? 'md:ml-auto md:pl-8 md:pr-0' : 'md:mr-auto md:pr-8 md:pl-0'
                }`}
              >
                <ScrollReveal
                  variants={{
                    hidden: { opacity: 0, x: isEven ? 50 : -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
                  }}
                >
                  <ExperienceCard experience={experience} />
                </ScrollReveal>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
