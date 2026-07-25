'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Mail, Download } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function ResumeCTA() {
  return (
    <FadeIn className="flex flex-col items-center justify-center text-center py-24 border-t border-border/30 mt-24">
      <Heading size="h2" className="mb-6">Ready to collaborate?</Heading>
      <Text size="lg" color="muted" className="mb-10 max-w-2xl text-balance">
        Whether you need a full-scale mobile architecture overhaul or an experienced engineer to lead your next product, I&apos;m ready to help.
      </Text>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={siteConfig.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 text-sm font-medium text-white shadow-md transition-all hover:shadow-glow active:scale-[0.98]"
        >
          <Download className="h-5 w-5" />
          Download Resume
        </a>
        <Link href="/contact">
          <Button size="lg" variant="outline">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </Link>
      </div>
    </FadeIn>
  );
}
