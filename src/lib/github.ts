export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface Contributions {
  total: number;
  weeks: ContributionDay[][];
}

interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

export const getContributions = async (
  user: string,
): Promise<Contributions | null> => {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${user}?y=last`,
      { next: { revalidate: 3600 } },
    );

    if (!response.ok) {
      return null;
    }

    const data: ContributionsResponse = await response.json();
    const weeks: ContributionDay[][] = [];

    for (let i = 0; i < data.contributions.length; i += 7) {
      weeks.push(data.contributions.slice(i, i + 7));
    }

    return { total: data.total.lastYear ?? 0, weeks };
  } catch {
    return null;
  }
};
