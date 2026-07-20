import { FadeIn } from '@/components/animations/fade-in';
import { socialLinks } from '@/config/socials';
import { cn } from '@/lib/cn';

export function HeroSocials({ className }: { className?: string }) {
  return (
    <FadeIn
      delay={1}
      className={cn('flex items-center gap-4', className)}
    >
      <div className="h-px w-8 bg-border" />
      <div className="flex items-center gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="group relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    </FadeIn>
  );
}

HeroSocials.displayName = 'HeroSocials';
