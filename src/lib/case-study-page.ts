import type { Metadata } from 'next';

interface CaseStudyMeta {
  title: string;
  description: string;
  path: string;
}

/**
 * Metadata for a case study. Declaring an openGraph block without images drops
 * the card the root opengraph-image.tsx generates, so every one of these pages
 * was sharing as a bare link. The image is named here so that cannot happen
 * again.
 */
export const caseStudyMetadata = ({
  title,
  description,
  path,
}: CaseStudyMeta): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'article',
    url: path,
    title,
    description,
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image'],
  },
});
