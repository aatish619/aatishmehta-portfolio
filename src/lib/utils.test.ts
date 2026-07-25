import { describe, it, expect } from 'vitest';
import { formatDate, truncate, slugify, clamp, mapRange } from '@/lib/utils';
import { generatePageMetadata } from '@/lib/seo';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('formats a date string correctly', () => {
      const date = '2026-07-25';
      expect(formatDate(date)).toBe('July 2026');
    });
  });

  describe('truncate', () => {
    it('truncates text with ellipsis if it exceeds max length', () => {
      expect(truncate('Hello World', 5)).toBe('Hello…');
    });

    it('does not truncate if within max length', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });
  });

  describe('slugify', () => {
    it('converts string to a clean URL slug', () => {
      expect(slugify('Hello World! New Phase')).toBe('hello-world-new-phase');
    });
  });

  describe('clamp', () => {
    it('clamps a value between min and max bounds', () => {
      expect(clamp(5, 0, 10)).toBe(5);
      expect(clamp(-5, 0, 10)).toBe(0);
      expect(clamp(15, 0, 10)).toBe(10);
    });
  });

  describe('mapRange', () => {
    it('maps value from source range to target range', () => {
      expect(mapRange(5, 0, 10, 0, 100)).toBe(50);
    });
  });
});

describe('SEO Helpers', () => {
  it('generates page metadata correct layout object', () => {
    const meta = generatePageMetadata({
      title: 'About',
      description: 'About description',
      path: '/about',
    });
    expect(meta.title).toContain('About');
    expect(meta.description).toBe('About description');
    expect(meta.openGraph?.url).toContain('/about');
  });
});
