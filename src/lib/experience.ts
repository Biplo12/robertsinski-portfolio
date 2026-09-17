import {
  currentMonth,
  formatDuration,
  formatPeriod,
  monthsBetween,
} from './duration';

export interface Role {
  title: string;
  /* 'YYYY-MM'. Leave end out while the role is still going. */
  start: string;
  end?: string;
  summary?: string;
  stack?: string[];
}

export interface Job {
  company: string;
  logo?: string;
  logoBleed?: boolean;
  location: string;
  contract?: boolean;
  roles: Role[];
}

export interface ResolvedRole extends Role {
  period: string;
  /** How long the role ran, in the same words a CV uses. */
  length: string;
}

export interface ResolvedJob extends Omit<Job, 'roles'> {
  duration: string;
  roles: ResolvedRole[];
}

export const experience: Job[] = [
  {
    company: 'Hurtopony',
    logo: '/logos/hurtopony.png',
    location: 'Remote',
    roles: [
      {
        title: 'Fullstack Developer',
        start: '2025-04',
        summary:
          'The company store and the panels the team runs it with, plus the NestJS service behind both. A few thousand people use the store every day. The scrapers that feed it hold over a million records.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Playwright', 'TypeScript'],
      },
    ],
  },
  {
    company: 'Gravity Rifters',
    logo: '/logos/gravity-rifters.png',
    logoBleed: true,
    location: 'Remote',
    contract: true,
    roles: [
      {
        title: 'Fullstack Developer',
        start: '2025-01',
        end: '2026-08',
        summary:
          'The site for the game and the wiki next to it, plus the internal tools the team used every day. I set up the server it all runs on.',
        stack: ['Next.js', 'Node', 'TypeScript', 'Docker'],
      },
    ],
  },
  {
    company: 'Fundacja Polskie Maki',
    logo: '/logos/polskiemaki.png',
    location: 'Remote',
    contract: true,
    roles: [
      {
        title: 'Junior Fullstack Developer',
        start: '2023-10',
        end: '2024-03',
        summary:
          'Two browser games for one client. Multiplayer without accounts, map quizzes with geolocation, leaderboards, QR codes for phones.',
        stack: ['React', 'Node', 'Figma'],
      },
    ],
  },
  {
    company: 'Anfata Games',
    logo: '/logos/anfata.png',
    location: 'Katowice, remote',
    roles: [
      {
        title: 'Fullstack Developer',
        start: '2024-02',
        end: '2025-04',
        summary:
          'Features across the company sites and apps. Serverless functions on Firestore and Parse, scripts in Node and Python, and smart contract calls from the frontend.',
        stack: ['Node', 'Python', 'Firestore', 'Parse'],
      },
      {
        title: 'Junior Fullstack Developer',
        start: '2022-09',
        end: '2024-01',
        summary:
          'Smaller features on the same sites and apps, plus Node and Python scripts that took over jobs people had been doing by hand. Testing and bug fixing.',
        stack: ['JavaScript', 'Node', 'Python'],
      },
    ],
  },
];

/* Server components only: the month must not differ between render and hydration. */
export const resolveExperience = (now: Date = new Date()): ResolvedJob[] => {
  const today = currentMonth(now);

  return experience.map((job) => {
    const first = job.roles
      .map((role) => role.start)
      .reduce((a, b) => (a < b ? a : b));
    const last = job.roles
      .map((role) => role.end ?? today)
      .reduce((a, b) => (a > b ? a : b));

    return {
      ...job,
      duration: formatDuration(monthsBetween(first, last)),
      roles: job.roles.map((role) => ({
        ...role,
        period: formatPeriod(role.start, role.end),
        length: formatDuration(monthsBetween(role.start, role.end ?? today)),
      })),
    };
  });
};
