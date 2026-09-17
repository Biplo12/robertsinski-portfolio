import type { MetadataRoute } from 'next';

import { projects } from '@/lib/projects';
import { site } from '@/lib/site';

/* Built from the project list rather than written out, because a hand-kept
   copy had already fallen a page behind. */
const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: site.url,
    changeFrequency: 'monthly',
    priority: 1,
  },
  ...projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      url: `${site.url}${project.caseStudy}`,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
];

export default sitemap;
