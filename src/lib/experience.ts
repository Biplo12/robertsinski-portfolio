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
          'Frontend for the company store and the internal panels around it, and the NestJS service behind them. Also the scrapers and crawlers that keep the data in it current.',
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
          'Built the site for the game and the wiki that goes with it, plus internal tools the team used day to day. Set up and configured the server everything runs on.',
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
          'Built features for company sites and apps. Serverless functions on Firestore and Parse, scripts in Node and Python, smart contract calls from the frontend.',
        stack: ['Node', 'Python', 'Firestore', 'Parse'],
      },
      {
        title: 'Junior Fullstack Developer',
        start: '2022-09',
        end: '2024-01',
        summary:
          'Features for the company sites and apps. Node and Python scripts that took over work done by hand. Testing and bug fixing.',
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
      })),
    };
  });
};
