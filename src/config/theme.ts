/**
 * Theme constants.
 * CSS variables are the source of truth (globals.css).
 * These constants are for JavaScript usage (e.g., GSAP, Three.js).
 */
export const themeColors = {
  background: '#09090B',
  surface: '#111111',
  card: '#18181B',
  border: '#27272A',
  primary: '#4F46E5',
  primaryHover: '#4338CA',
  accent: '#8B5CF6',
  accentHover: '#7C3AED',
  text: '#FAFAFA',
  textSecondary: '#E4E4E7',
  muted: '#A1A1AA',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
} as const;

export const themeTransitions = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
} as const;

export const themeBreakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type ThemeColors = typeof themeColors;
export type ThemeTransitions = typeof themeTransitions;
