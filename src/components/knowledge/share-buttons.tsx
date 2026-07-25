import { Text } from '@/components/ui/text';
import { GlassCard } from '@/components/ui/glass-card';
import { Share2, Mail, Link2 } from 'lucide-react';

export function ShareButtons({ title, url }: { title: string; url: string }) {
  // In a real app, these would actually execute share dialogs
  return (
    <GlassCard className="flex flex-col gap-4 p-6 text-center">
      <Text size="sm" className="font-semibold uppercase tracking-wider">Share this article</Text>
      <div className="flex justify-center gap-4">
        <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/50 text-muted transition-colors hover:bg-primary/20 hover:text-primary">
          <Mail className="h-4 w-4" />
        </a>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/50 text-muted transition-colors hover:bg-primary/20 hover:text-primary">
          <Share2 className="h-4 w-4" />
        </button>
        <a href={url} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface/50 text-muted transition-colors hover:bg-primary/20 hover:text-primary">
          <Link2 className="h-4 w-4" />
        </a>
      </div>
    </GlassCard>
  );
}
