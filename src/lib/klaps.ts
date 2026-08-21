export interface KlapsService {
  name: string;
  role: string;
  stack: string[];
  repo?: string;
  tag?: string;
}

export interface KlapsDecision {
  title: string;
  body: string;
}

export const klapsServices: KlapsService[] = [
  {
    name: 'klaps.space',
    role: 'The site people visit. Listings by city and cinema, film pages, and a map for finding a screening nearby.',
    stack: ['Next.js 16', 'React 19', 'Tailwind 4', 'Leaflet', 'Bun'],
    repo: 'https://github.com/klaps-hq/klaps.space',
  },
  {
    name: 'api.klaps.space',
    role: 'One place that owns the data. Serves the site and takes writes from the collector through internal endpoints, behind an API key, with rate limits and health checks on top.',
    stack: ['NestJS 11', 'Drizzle', 'PostgreSQL', 'Pino', 'Jest'],
    repo: 'https://github.com/klaps-hq/api.klaps.space',
  },
  {
    name: 'klaps-scrapper',
    role: 'Collects cities, cinemas and showtimes, fills in film and director data, writes the Polish descriptions, and pushes everything to the API in batches.',
    stack: ['Bun', 'cheerio', 'TMDB', 'Gemini', 'croner', 'Vitest'],
    tag: 'private',
  },
  {
    name: 'klaps.radar',
    role: 'Picks the most interesting screening coming up, renders a branded image for it, and publishes it to Instagram, Facebook and Threads on a schedule.',
    stack: ['Bun', 'satori', 'sharp', 'croner'],
    repo: 'https://github.com/klaps-hq/klaps.radar',
  },
  {
    name: 'studio.klaps.space',
    role: 'Admin panel on its own subdomain for browsing and editing what the collector saved. Traffic numbers from Google Analytics and Search Console sit next to the data they explain.',
    stack: ['Next.js 16', 'TanStack Table', 'jose'],
    tag: 'private',
  },
  {
    name: 'outreach',
    role: 'Mailer that tells cinemas their page exists. Takes contacts from a list and page slugs from the public sitemap, sends one branded email each, and reads the replies back over IMAP.',
    stack: ['Bun', 'Nodemailer', 'ImapFlow', 'sharp'],
    tag: 'private',
  },
];

export const klapsDecisions: KlapsDecision[] = [
  {
    title: 'Collecting runs in its own container, not inside the API',
    body: 'The collector talks to sources I do not control, so a slow response or changed markup would sit inside API requests. It runs as a long-lived container on its own schedule, waits until the API answers before it starts, and can be triggered by hand for a single entity. When collecting breaks, the site keeps serving what it already has.',
  },
  {
    title: 'The model writes the description, the code picks the angle',
    body: 'Descriptions come from Gemini. Asking it for a few hundred texts in a row gives a few hundred variations of the same sentence. The keyword and the style are chosen in code, seeded by the name of the film or cinema, so each entity gets a different angle. Length has to land between 130 and 160 characters and the text is requested again when it misses.',
  },
  {
    title: 'Images are copied, not linked',
    body: 'Stills, posters and photos come from an open movie database. Linking straight to their files means the site breaks when a path changes or a host throttles. Every image is mirrored to our own object storage as the film is saved, and a separate script fills in the ones added before that was in place.',
  },
  {
    title: 'Every service ships the same way',
    body: 'Each repository has the same workflows: build, typecheck, tests where there are tests, and a check that the pull request title follows conventional commits. Merging to dev deploys to the development environment, merging to main deploys to production, and the target is read from the branch instead of being written down twice. GitHub environments hold the secrets for each, images go to the registry, and the server pulls them.',
  },
  {
    title: 'Writes go in batches, and only one service writes',
    body: 'One pass touches thousands of rows across cities, cinemas, showtimes and films, so the collector sends batch upserts to internal endpoints instead of a request per record. Everything else reads. The admin panel is the one exception and it edits through the same API, never the database.',
  },
];
