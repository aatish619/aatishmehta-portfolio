'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { FileText, Mail } from 'lucide-react';
import Link from 'next/link';

export function ResumeCTA() {
  return (
    <FadeIn className="flex flex-col items-center justify-center text-center py-24 border-t border-border/30 mt-24">
      <Heading size="h2" className="mb-6">Ready to collaborate?</Heading>
      <Text size="lg" color="muted" className="mb-10 max-w-2xl text-balance">
        Whether you need a full-scale mobile architecture overhaul or an experienced engineer to lead your next product, I&apos;m ready to help.
      </Text>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" variant="gradient">
          <FileText className="mr-2 h-5 w-5" />
          Download Resume
        </Button>
        <Link href="#contact" passHref>
          <Button size="lg" variant="outline">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </Link>
      </div>
    </FadeIn>
  );
}
