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
      'Nationwide guide to special screenings and classic cinema in Poland. Six services behind one site, among them a collector that reaches 563 cinemas every day and keeps over 300 000 screenings current.',
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
      'Whiteboard for teams. Shapes, notes, images, and everyone drawing on the same board at once. Over 200 accounts and 150 boards so far.',
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
  {
    name: 'ts-api-scaling-lab',
    caseStudy: '/scaling-lab',
    description:
      'A REST API on Postgres written the plain way, then made faster in eight measured steps. One request per second at the start, 2600 at the end, on the same desktop. Each step has its own notes and numbers, including the one that bought no throughput and was worth keeping anyway.',
    stack: ['Fastify', 'PostgreSQL', 'Drizzle', 'Redis', 'k6'],
    repo: 'https://github.com/Biplo12/ts-api-scaling-lab',
  },
];
