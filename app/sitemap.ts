import type { MetadataRoute } from 'next';

const BASE_URL = 'https://mayank-sharma.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/resume',
    '/skills',
    '/projects',
    '/certificates',
    '/achievements',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
