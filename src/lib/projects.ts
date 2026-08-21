export interface Project {
  name: string;
  description: string;
  stack: string[];
  logo?: string;
  logoBleed?: boolean;
  repo?: string;
  private?: boolean;
  caseStudy?: string;
  demo?: string;
  demoLabel?: string;
}

export const projects: Project[] = [
  {
    name: 'klaps.space',
    logo: '/klaps.svg',
    logoBleed: true,
    caseStudy: '/klaps',
    description:
      'Guide to special screenings and classic cinema across Poland. What is playing, where, and when.',
    stack: ['Next.js', 'Bun', 'Leaflet', 'shadcn/ui'],
    repo: 'https://github.com/klaps-hq/klaps.space',
    demo: 'https://klaps.space',
    demoLabel: 'Live',
  },
  {
    name: 'api.klaps.space',
    logo: '/klaps.svg',
    logoBleed: true,
    description:
      'REST API behind Klaps. Serves screenings, venues and films to the site and the bots.',
    stack: ['NestJS', 'Drizzle', 'PostgreSQL', 'Jest'],
    repo: 'https://github.com/klaps-hq/api.klaps.space',
  },
  {
    name: 'klaps.radar',
    logo: '/klaps.svg',
    logoBleed: true,
    description:
      'Picks the best upcoming screening, draws an image for it, and posts it across social platforms.',
    stack: ['Bun', 'Satori', 'TypeScript'],
    repo: 'https://github.com/klaps-hq/klaps.radar',
  },
  {
    name: 'klaps-scrapper',
    logo: '/klaps.svg',
    logoBleed: true,
    description:
      'Data engine behind Klaps. Collects screenings from across the country, enriches films with an open movie database (stills, credits, trailers, biographies), and writes Polish meta descriptions with Gemini. Runs on a schedule in Docker.',
    stack: ['Bun', 'TMDB', 'Gemini', 'Docker'],
    private: true,
  },
  {
    name: 'BoardFlow',
    logo: '/logos/boardflow-mark.png',
    caseStudy: '/boardflow',
    description:
      'Whiteboard for teams. Shapes, notes, images, and everyone drawing on the same board at once.',
    stack: ['Next.js', 'Convex', 'Liveblocks', 'Redux'],
    repo: 'https://github.com/Biplo12/BoardFlow',
    demo: 'https://board-flow.vercel.app/',
    demoLabel: 'Live',
  },
  {
    name: 'orderflow-engine',
    caseStudy: '/orderflow',
    description:
      'Order processing that keeps going when something breaks. Queues, retries, event log.',
    stack: ['Fastify', 'BullMQ', 'Redis', 'PostgreSQL'],
    repo: 'https://github.com/Biplo12/orderflow-engine',
  },
];
