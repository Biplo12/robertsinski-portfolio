import type { IconType } from 'react-icons';
import {
  SiBun,
  SiDrizzle,
  SiFastify,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export interface Tech {
  name: string;
  note: string;
  color: string;
  Icon: IconType;
}

export const tech: Tech[] = [
  {
    name: 'TypeScript',
    note: 'Typed JavaScript',
    color: '#3178C6',
    Icon: SiTypescript,
  },
  { name: 'React', note: 'UI library', color: '#61DAFB', Icon: SiReact },
  {
    name: 'Next.js',
    note: 'React framework',
    color: '#E8EAF0',
    Icon: SiNextdotjs,
  },
  { name: 'NestJS', note: 'Node framework', color: '#E0234E', Icon: SiNestjs },
  { name: 'Fastify', note: 'HTTP server', color: '#D8DCE4', Icon: SiFastify },
  { name: 'Node.js', note: 'Runtime', color: '#5FA04E', Icon: SiNodedotjs },
  { name: 'Bun', note: 'Runtime, bundler', color: '#F0DFC4', Icon: SiBun },
  {
    name: 'PostgreSQL',
    note: 'Database',
    color: '#5B8DEF',
    Icon: SiPostgresql,
  },
  { name: 'MySQL', note: 'Database', color: '#68A5CE', Icon: SiMysql },
  { name: 'Redis', note: 'Cache, queues', color: '#FF4438', Icon: SiRedis },
  { name: 'Drizzle', note: 'SQL ORM', color: '#C5F74F', Icon: SiDrizzle },
  {
    name: 'Tailwind',
    note: 'CSS framework',
    color: '#38BDF8',
    Icon: SiTailwindcss,
  },
];
