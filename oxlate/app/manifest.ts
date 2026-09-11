import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oxlate — Precision Technology Partner',
    short_name: 'Oxlate',
    description: 'Thoughtful web experiences and mobile applications built with calm, architectural discipline.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F2EC',
    theme_color: '#111111',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
