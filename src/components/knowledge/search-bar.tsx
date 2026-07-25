import { Search } from 'lucide-react';

interface SearchBarProps {
  query: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ query, onChange, placeholder = 'Search articles, tags, technologies...' }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-border/50 bg-surface/50 py-3 pl-12 pr-4 text-sm text-foreground outline-none backdrop-blur-sm transition-all focus:border-primary focus:bg-surface focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
