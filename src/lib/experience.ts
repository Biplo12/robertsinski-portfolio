export interface Role {
  title: string;
  period: string;
  summary?: string;
  stack?: string[];
}

export interface Job {
  company: string;
  logo: string;
  duration: string;
  location: string;
  contract?: boolean;
  roles: Role[];
}

export const experience: Job[] = [
  {
    company: 'Hurtopony',
    logo: '/logos/hurtopony.png',
    duration: '1 yr 5 mos',
    location: 'Remote',
    roles: [
      {
        title: 'Frontend Web Developer',
        period: 'Apr 2025 to now',
        summary:
          'Frontend for the company store and the internal panels around it. New pages and features, plus fixes to what was already there.',
        stack: ['Next.js', 'TypeScript', 'React', 'Tailwind'],
      },
    ],
  },
  {
    company: 'Anfata Games',
    logo: '/logos/anfata.png',
    duration: '2 yrs 8 mos',
    location: 'Katowice, remote',
    roles: [
      {
        title: 'Full Stack Engineer',
        period: 'Feb 2024 to Apr 2025',
        summary:
          'Built features for company sites and apps. Serverless functions on Firestore and Parse, scripts in Node and Python, smart contract calls from the frontend.',
        stack: ['Node', 'Python', 'Firestore', 'Parse'],
      },
      {
        title: 'Junior Full-stack Developer',
        period: 'Sep 2022 to Aug 2023',
        summary:
          'Features for the company sites and apps. Node and Python scripts that took over work done by hand. Testing and bug fixing.',
        stack: ['JavaScript', 'Node', 'Python'],
      },
    ],
  },
  {
    company: 'Fundacja Polskie Maki',
    logo: '/logos/polskiemaki.png',
    duration: '6 mos',
    location: 'Remote',
    contract: true,
    roles: [
      {
        title: 'Full-stack Developer',
        period: 'Oct 2023 to Mar 2024',
        summary:
          'Two browser games for one client. Multiplayer without accounts, map quizzes with geolocation, leaderboards, QR codes for phones.',
        stack: ['React', 'Node', 'Figma'],
      },
    ],
  },
];
