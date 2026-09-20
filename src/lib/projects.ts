export interface Project {
  name: string;
  description: string;
  stack: string[];
  logo?: string;
  logoBleed?: boolean;
  repo?: string;
  repoLabel?: string;
  repoNote?: string;
  demo?: string;
  demoLabel?: string;
  caseStudy?: string;
  private?: boolean;
}

export const projects: Project[] = [
  {
    name: 'klaps.space',
    logo: '/klaps.svg',
    logoBleed: true,
    description:
      'Shows where and when older films are playing in Polish cinemas. Six services behind one site. The collector checks 563 cinemas every day and holds over 300 000 screenings.',
    stack: ['Next.js', 'NestJS', 'Bun', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/klaps-hq',
    repoLabel: 'klaps-hq',
    repoNote: '6 repos, 3 public',
    demo: 'https://klaps.space',
    demoLabel: 'Live',
    caseStudy: '/klaps',
  },
  {
    name: 'BoardFlow',
    logo: '/logos/boardflow-mark.svg',
    caseStudy: '/boardflow',
    description:
      'A whiteboard a few people can draw on at the same time. Shapes, notes, images, and everyone on the same board. 200 accounts and 150 boards so far.',
    stack: ['Next.js', 'Convex', 'Liveblocks', 'Redux'],
    repo: 'https://github.com/Biplo12/BoardFlow',
    demo: 'https://board-flow.vercel.app/',
    demoLabel: 'Live',
  },
  {
    name: 'orderflow-engine',
    caseStudy: '/orderflow',
    description:
      'Order processing that keeps going when one step breaks. Five services, a queue between them, and retries that do not charge a card twice.',
    stack: ['Fastify', 'BullMQ', 'Redis', 'PostgreSQL'],
    repo: 'https://github.com/Biplo12/orderflow-engine',
  },
  {
    name: 'ts-api-scaling-lab',
    caseStudy: '/scaling-lab',
    description:
      'A REST API on Postgres written the simple way, then made faster in eight steps. It served one request per second at the start and 2600 at the end, on the same desktop. Every step has its own notes and its own numbers.',
    stack: ['Fastify', 'PostgreSQL', 'Drizzle', 'Redis', 'k6'],
    repo: 'https://github.com/Biplo12/ts-api-scaling-lab',
  },
  {
    name: 'FAIRWAY',
    logo: '/logos/fairway.png',
    description:
      'A golf shop I made up so I could build the storefront for it. 515 products from twelve makers, kept in one typed file instead of a CMS. The filters are plain links, so every shelf has an address you can send to someone.',
    stack: ['Next.js 16', 'React 19', 'Tailwind 4', 'TypeScript'],
    demo: 'https://fairway-roan-delta.vercel.app',
    demoLabel: 'Live',
    private: true,
  },
  {
    name: 'Veloria Estate Winery',
    logo: '/logos/veloria.png',
    logoBleed: true,
    description:
      'A site for a winery that does not exist. Fifteen pages, no backend, and every colour in it taken from the hand-painted illustrations rather than picked to sit next to them.',
    stack: ['Next.js 16', 'React 19', 'Tailwind 4', 'TypeScript'],
    repo: 'https://github.com/Biplo12/veloria-estate-winery',
    demo: 'https://veloria-estate-winery.vercel.app',
    demoLabel: 'Live',
  },
];
