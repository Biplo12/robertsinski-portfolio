import type { MetadataRoute } from 'next';

import { site } from '@/lib/site';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: site.url,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${site.url}/klaps`,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${site.url}/orderflow`,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
};

export default sitemap;
