import { KnowledgeHub } from '@/components/knowledge/knowledge-hub';

export const metadata = {
  title: 'Engineering Knowledge Hub | Aatish Mehta',
  description: 'Deep-dive architecture articles, production playbooks, and engineering resources by Aatish Mehta.',
};

export default function KnowledgePage() {
  return (
    <main className="min-h-screen">
      <KnowledgeHub />
    </main>
  );
}
