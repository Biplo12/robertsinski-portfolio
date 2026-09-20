import type { Shot } from '@/components/shot-gallery';

import type { Fact, Note } from './case-study';

export const veloriaFacts: Fact[] = [
  { value: '15', label: 'pages, all prerendered' },
  { value: '4', label: 'wines, a page each' },
  { value: '4', label: 'family pages' },
  { value: '7', label: 'colour tokens' },
];

export const veloriaShots: Shot[] = [
  {
    src: '/shots/veloria-home.jpg',
    alt: 'The Veloria home page: a painted hill estate under the wordmark',
    caption:
      'The home page. One painting, the wordmark, and nothing else above the fold.',
  },
  {
    src: '/shots/veloria-wines.jpg',
    alt: 'The wines index, four bottles painted in a row',
    caption: 'Four wines. The bottles are painted, not photographed.',
  },
  {
    src: '/shots/veloria-wine.jpg',
    alt: 'A page for one wine, with the bottle and its tasting notes',
    caption:
      'One wine. Vintage, grape, time in oak and in bottle, all from the same file the index reads.',
  },
  {
    src: '/shots/veloria-vineyards.jpg',
    alt: 'The vineyards page with a painted map of the parcels',
    caption: 'The vineyards, drawn as a map rather than listed as a table.',
  },
];

export const veloriaNotes: Note[] = [
  {
    title: 'Every fact sits in one file',
    body: 'Prices, vintages, hectares, dates and names live in src/data and nothing is retyped into a component. Fifteen pages talk about the same estate, and none of them can end up disagreeing with another about a number.',
  },
  {
    title: 'The colours come out of the paintings',
    body: 'Seven tokens, each sampled from the artwork rather than picked to sit beside it. No hex values in components, and no grey, black or white used as a surface, so the interface and the illustrations are the same palette.',
  },
  {
    title: 'A script looks for seams',
    body: 'One mistake kept coming back: a painting whose own paper is close to the page cream but not equal to it, which leaves a visible edge around the image. A script checks every image the site renders for exactly that.',
  },
];
