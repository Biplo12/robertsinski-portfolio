const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const parse = (month: string): { year: number; month: number } => {
  const [year, index] = month.split('-').map(Number);

  return { year, month: index };
};

export const currentMonth = (now: Date): string =>
  `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

export const formatMonth = (month: string): string => {
  const { year, month: index } = parse(month);

  return `${monthNames[index - 1]} ${year}`;
};

export const formatPeriod = (start: string, end?: string): string =>
  `${formatMonth(start)} to ${end ? formatMonth(end) : 'now'}`;

/* Both ends count, which is how LinkedIn arrives at its numbers. */
export const monthsBetween = (start: string, end: string): number => {
  const from = parse(start);
  const to = parse(end);

  return (to.year - from.year) * 12 + (to.month - from.month) + 1;
};

export const formatDuration = (months: number): string => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  }

  if (rest > 0) {
    parts.push(`${rest} ${rest === 1 ? 'mo' : 'mos'}`);
  }

  return parts.join(' ');
};
