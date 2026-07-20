/** Animation timing constants (in seconds) */
export const ANIMATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
} as const;

/** Z-index scale */
export const Z_INDEX = {
  base: 0,
  above: 10,
  dropdown: 20,
  sticky: 30,
  navbar: 40,
  modal: 50,
  toast: 60,
  tooltip: 70,
  overlay: 100,
} as const;

/** Container max-widths in pixels */
export const CONTAINER = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1400,
} as const;

/** Breakpoints in pixels */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
