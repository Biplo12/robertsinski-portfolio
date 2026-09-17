import type { Fact, Note, Part } from './case-study';

export const klapsFacts: Fact[] = [
  { value: '563', label: 'cinemas covered' },
  { value: '316', label: 'cities' },
  { value: '300k+', label: 'screenings, refreshed daily' },
  { value: '6', label: 'services I run' },
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
    role: 'Admin panel for everything the collector saved, with the traffic numbers next to it.',
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
    title: 'Only the collector writes',
    body: 'One pass touches hundreds of thousands of rows across cities, cinemas, showtimes and films. One request per record would take hours, so the collector sends them in batches. Everything else only reads. The admin panel can edit, but it goes through the same API as everyone else.',
  },
  {
    title: 'Collecting runs in its own container',
    body: 'The collector reads sites I do not control. If it ran inside the API, changed markup or a slow response would hold up requests from real visitors. It runs in its own container on its own schedule, so when collecting breaks the site keeps serving what it already has.',
  },
  {
    title: 'Gemini writes the descriptions',
    body: 'Ask it for a few hundred in a row and you get a few hundred versions of one sentence. So the angle for each film is picked in code, seeded by the title, and passed in with the prompt. If the text comes back shorter than 130 characters or longer than 160, it is asked for again.',
  },
];
