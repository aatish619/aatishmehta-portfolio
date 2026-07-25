'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { navigationItems, navigationConfig } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/layout/container';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hash, setHash] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, []);

  const activeHref = useMemo(() => {
    if (pathname !== '/') return pathname;
    return hash || '/';
  }, [pathname, hash]);

  function handleNavClick(href: string) {
    if (href === '/') {
      setHash('');
      return;
    }

    if (href.startsWith('/#')) {
      setHash(href.slice(1));
      return;
    }

    setHash('');
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > navigationConfig.scrollThreshold);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-navbar transition-all duration-normal',
        isScrolled
          ? 'bg-white/75 backdrop-blur-xl border-b border-white/70 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight bg-gradient-to-r from-slate-950 via-slate-700 to-primary bg-clip-text text-transparent transition-opacity hover:opacity-90"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navigationItems.map((item) => (
              <li key={item.href}>
                {(() => {
                  const isActive =
                    item.href === '/'
                      ? activeHref === '/'
                      : item.href.startsWith('/#')
                        ? activeHref === item.href.slice(1)
                        : activeHref === item.href;

                  return (
                <Link
                  href={item.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-slate-950/5 text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:bg-primary/8 hover:text-slate-950'
                  )}
                  onClick={() => handleNavClick(item.href)}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </Link>
                  );
                })()}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-muted transition-colors hover:bg-primary/8 hover:text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          'overflow-hidden border-b border-white/70 bg-white/90 backdrop-blur-xl transition-all duration-normal md:hidden',
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0 border-b-0'
        )}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {navigationItems.map((item) => (
              <li key={item.href}>
                {(() => {
                  const isActive =
                    item.href === '/'
                      ? activeHref === '/'
                      : item.href.startsWith('/#')
                        ? activeHref === item.href.slice(1)
                        : activeHref === item.href;

                  return (
                <Link
                  href={item.href}
                  className={cn(
                    'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-slate-950/5 text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:bg-primary/8 hover:text-slate-950'
                  )}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavClick(item.href);
                  }}
                  {...(item.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {item.label}
                </Link>
                  );
                })()}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}

Navbar.displayName = 'Navbar';
