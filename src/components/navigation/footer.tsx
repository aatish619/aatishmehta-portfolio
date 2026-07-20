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
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Link
                href="/"
                className="font-heading text-lg font-bold text-foreground transition-colors hover:text-primary"
              >
                {siteConfig.name}
              </Link>
              <p className="mt-3 max-w-xs text-body-sm text-muted">
                {siteConfig.description}
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
            <div>
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
                      className="inline-flex items-center justify-center rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-foreground"
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
