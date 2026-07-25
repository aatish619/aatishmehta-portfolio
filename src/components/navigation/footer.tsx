import Link from 'next/link';
import { Container } from '@/components/layout/container';
import { Divider } from '@/components/ui/divider';
import { siteConfig } from '@/config/site';
import { navigationItems } from '@/config/navigation';
import { socialLinks } from '@/config/socials';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto" role="contentinfo">
      <Divider gradient spacing="sm" />
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="font-heading text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
              >
                {siteConfig.name}
              </Link>
              <p className="mt-4 max-w-sm text-body-sm leading-relaxed text-muted">
                Full-stack mobile developer building Flutter, native, and Python-backed products for international clients.
              </p>
              <p className="mt-4 text-caption text-muted">
                Ahmedabad, India • Remote worldwide
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-muted">
                Navigation
              </h3>
              <ul className="flex flex-col gap-2">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-body-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="md:justify-self-end">
              <h3 className="mb-4 text-body-sm font-semibold uppercase tracking-wider text-muted">
                Connect
              </h3>
              <ul className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-white/70 text-muted shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/8 hover:text-foreground"
                      aria-label={social.ariaLabel}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 border-t border-border pt-6">
            <p className="text-caption text-muted">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

Footer.displayName = 'Footer';
