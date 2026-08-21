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
      'Nationwide guide to special screenings and classic cinema in Poland. Six services behind one site: the site itself, the API that owns the data, a collector, a social bot, an admin panel and a mailer for cinemas.',
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
  {
    name: 'backupmailer',
    description:
      'Backs up a database on a schedule and mails me the result, whether it worked or not. Runs as a container next to whatever it is backing up, with the dump and the logs written to the host.',
    stack: ['Bun', 'Docker', 'MySQL', 'SMTP'],
    repo: 'https://github.com/Biplo12/backupmailer',
  },
];
