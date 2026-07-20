import type { Metadata } from 'next';
import { ARCHITECTURE_ARTICLES } from '@/data/architecture';
import { ArchitectureHeader } from '@/components/architecture/architecture-header';
import { ArchitectureGallery } from '@/components/architecture/architecture-gallery';

export const metadata: Metadata = {
  title: 'Architecture Gallery — Aatish Mehta',
  description:
    'An interactive engineering showcase of architectural patterns, system designs, and production mobile application decisions by Aatish Mehta.',
};

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen">
      <ArchitectureHeader />
      <ArchitectureGallery articles={ARCHITECTURE_ARTICLES} />
    </main>
  );
}
