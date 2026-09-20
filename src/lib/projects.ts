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
      'Shows where and when older films are playing in Polish cinemas. Six services behind one site. The collector checks 563 cinemas a day and keeps over 300 000 screenings up to date.',
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
      'A whiteboard several people draw on at once. Shapes, notes, images and freehand. 200 accounts and 150 boards so far.',
    stack: ['Next.js', 'Convex', 'Liveblocks', 'Redux'],
    repo: 'https://github.com/Biplo12/BoardFlow',
    demo: 'https://board-flow.vercel.app/',
    demoLabel: 'Live',
  },
  {
    name: 'FAIRWAY',
    logo: '/logos/fairway.png',
    description:
      'A golf shop I made up so I could build the storefront for it. 515 products from twelve makers. The filters are links, so you can send someone the exact shelf you are looking at.',
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
      'A site for a winery that does not exist. Fifteen pages, no backend, and the colours come straight out of the illustrations.',
    stack: ['Next.js 16', 'React 19', 'Tailwind 4', 'TypeScript'],
    repo: 'https://github.com/Biplo12/veloria-estate-winery',
    demo: 'https://veloria-estate-winery.vercel.app',
    demoLabel: 'Live',
  },
  {
    name: 'orderflow-engine',
    caseStudy: '/orderflow',
    description:
      'Order processing that keeps going when one step breaks. Five services talking through a queue, and a retry never charges the card twice.',
    stack: ['Fastify', 'BullMQ', 'Redis', 'PostgreSQL'],
    repo: 'https://github.com/Biplo12/orderflow-engine',
  },
  {
    name: 'ts-api-scaling-lab',
    caseStudy: '/scaling-lab',
    description:
      'A REST API on Postgres written the simple way, then made faster in eight steps. One request per second at the start, 2600 at the end, same desktop. I wrote the numbers down after every step.',
    stack: ['Fastify', 'PostgreSQL', 'Drizzle', 'Redis', 'k6'],
    repo: 'https://github.com/Biplo12/ts-api-scaling-lab',
  },
];
