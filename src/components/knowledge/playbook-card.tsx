import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Download, FileText } from 'lucide-react';

interface PlaybookCardProps {
  title: string;
  summary: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export function PlaybookCard({ title, summary, difficulty }: PlaybookCardProps) {
  return (
    <GlassCard className="group flex flex-col justify-between p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-5 w-5" />
          </div>
          <Badge variant={difficulty === 'Advanced' ? 'accent' : difficulty === 'Intermediate' ? 'default' : 'secondary'} className="text-[10px]">
            {difficulty}
          </Badge>
        </div>
        <Heading size="h4" className="mb-2 text-base group-hover:text-primary transition-colors">{title}</Heading>
        <Text size="sm" color="muted" className="mb-6 leading-relaxed text-balance">{summary}</Text>
      </div>
      <button className="flex items-center gap-2 text-sm font-medium text-muted transition-colors group-hover:text-primary outline-none">
        <Download className="h-4 w-4" /> Download PDF
      </button>
    </GlassCard>
  );
}
