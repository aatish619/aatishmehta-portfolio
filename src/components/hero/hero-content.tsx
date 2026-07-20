'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

const TITLES = [
  'Senior Mobile Engineer',
  'Flutter Architect',
  'iOS Developer',
  'Android Specialist',
];

export function HeroContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <FadeIn>
        <Heading size="display" className="max-w-3xl font-bold tracking-tighter">
          Crafting premium <br className="hidden sm:block" />
          mobile experiences.
        </Heading>
      </FadeIn>

      <FadeIn delay={0.2} className="flex flex-col gap-2">
        <div className="flex h-10 items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-xl font-medium text-primary sm:text-2xl"
            >
              {TITLES[titleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <Text
          size="lg"
          color="muted"
          className="max-w-xl text-balance leading-relaxed"
        >
          I specialize in building scalable, high-performance applications using
          Flutter, Native iOS, Android, and Python. My work bridges the gap between elegant
          design, clean architecture, and AI integrations.
        </Text>
      </FadeIn>
    </div>
  );
}

HeroContent.displayName = 'HeroContent';
