import type { Fact, Note, Part } from './case-study';

export const klapsFacts: Fact[] = [
  { value: '563', label: 'cinemas covered' },
  { value: '316', label: 'cities' },
  { value: '300k+', label: 'screenings, refreshed daily' },
  { value: '6', label: 'services, all mine' },
];

export const klapsServices: Part[] = [
  {
    name: 'klaps.space',
    role: 'Listings by city and cinema, film pages, and a map.',
    stack: ['Next.js 16', 'React 19', 'Tailwind 4', 'Leaflet', 'Bun'],
    repo: 'https://github.com/klaps-hq/klaps.space',
  },
  {
    name: 'api.klaps.space',
    role: 'The only service that touches the database.',
    stack: ['NestJS 11', 'Drizzle', 'PostgreSQL', 'Pino', 'Jest'],
    repo: 'https://github.com/klaps-hq/api.klaps.space',
  },
  {
    name: 'klaps-scrapper',
    role: 'Reads 563 cinemas a day, fills in film data, writes the descriptions.',
    stack: ['Bun', 'cheerio', 'TMDB', 'Gemini', 'croner', 'Vitest'],
    tag: 'private',
  },
  {
    name: 'klaps.radar',
    role: 'Picks a screening, renders an image, posts it to three networks.',
    stack: ['Bun', 'satori', 'sharp', 'croner'],
    repo: 'https://github.com/klaps-hq/klaps.radar',
  },
  {
    name: 'studio.klaps.space',
    role: 'Admin panel over what the collector saved, with the traffic numbers next to it.',
    stack: ['Next.js 16', 'TanStack Table', 'jose'],
    tag: 'private',
  },
  {
    name: 'outreach',
    role: 'Tells cinemas their page exists and reads the replies back.',
    stack: ['Bun', 'Nodemailer', 'ImapFlow', 'sharp'],
    tag: 'private',
  },
];

export const klapsDecisions: Note[] = [
  {
    title: 'One writer, and it writes in batches',
    body: 'One pass touches hundreds of thousands of rows across cities, cinemas, showtimes and films, so the collector sends batch upserts instead of a request per record. Everything else reads. The admin panel is the exception and it edits through the same API.',
  },
  {
    title: 'Collecting runs in its own container',
    body: 'The collector reads sites I do not control, so changed markup or a slow response would sit inside API requests. It runs on its own schedule instead, and when collecting breaks the site keeps serving what it already has.',
  },
  {
    title: 'The model writes the text, the code writes the variety',
    body: 'Gemini asked for a few hundred descriptions returns a few hundred versions of one sentence. The angle is chosen in code and seeded by the name of the film, and the text is requested again unless it lands between 130 and 160 characters.',
  },
];
