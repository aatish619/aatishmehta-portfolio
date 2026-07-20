import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Aatish Mehta — Portfolio',
    short_name: 'Aatish Mehta',
    description:
      'Personal portfolio of Aatish Mehta — showcasing projects, architecture, and engineering craft.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090B',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
