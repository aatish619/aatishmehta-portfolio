'use client';

import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks the mouse position relative to the viewport.
 * Returns { x, y } in pixels.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}
