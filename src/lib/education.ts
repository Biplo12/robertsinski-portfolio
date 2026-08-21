export interface School {
  name: string;
  logo: string;
  field: string;
  period: string;
  summary?: string;
}

export const education: School[] = [
  {
    name: 'Zespół Szkół Technicznych w Bytomiu',
    logo: '/logos/zst.png',
    field: 'IT technician',
    period: '2018 to 2022',
    summary:
      'Four years of IT: programming, databases, networks and hardware. I wrote my first websites here.',
  },
];
