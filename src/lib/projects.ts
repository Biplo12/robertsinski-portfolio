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
];
