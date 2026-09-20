import type { Shot } from '@/components/shot-gallery';

import type { Fact, Note } from './case-study';

export const fairwayFacts: Fact[] = [
  { value: '515', label: 'products' },
  { value: '12', label: 'makers' },
  { value: '6', label: 'categories' },
  { value: '1299', label: 'photographs' },
];

export const fairwayShots: Shot[] = [
  {
    src: '/shots/fairway-home.jpg',
    alt: 'The FAIRWAY home page, a bento of full bleed photographs',
    caption:
      'The home page. Cards run to their own edges and the photography carries it.',
  },
  {
    src: '/shots/fairway-shelf.jpg',
    alt: 'The clubs shelf with its filters and result count',
    caption:
      '203 clubs behind one shelf. Every filter is a link, so this view has an address.',
  },
  {
    src: '/shots/fairway-product.jpg',
    alt: 'A product page with shaft, flex and hand options',
    caption:
      'Shaft, flex and hand are read out of the product spec rather than invented per page.',
  },
  {
    src: '/shots/fairway-brands.jpg',
    alt: 'The brand index, eight makers with stock and four to order',
    caption: 'Eight makers on the rack, four more to order.',
  },
];

export const fairwayNotes: Note[] = [
  {
    title: 'The shop picked the clubs, it did not build them',
    body: 'That decides the voice of every line on the site. A maker writes that it spent two years on the sole geometry. A fitter writes that three shafts in the same head are eleven yards of dispersion apart. The second one is the whole project.',
  },
  {
    title: 'Filters are links',
    body: 'No state held in a component, no query kept in memory. Each shelf, each club type and each price band is an address, so a customer can send somebody the exact view they are looking at and it opens the same way.',
  },
  {
    title: 'The bag counts options, not items',
    body: 'A line is keyed by the product and the options chosen with it, so the same head ordered in two shafts is two lines rather than a quantity of two. It is the difference between a shop that sells boxes and one that fits clubs.',
  },
];

export const fairwayDisclaimer =
  'FAIRWAY is not a real shop. Nothing typed into it is sent anywhere and no payment is taken. Product names and photographs belong to their makers and appear the way they would in a retailer catalogue, with no partnership implied.';
