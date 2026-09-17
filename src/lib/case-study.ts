/** A headline number and what it counts. */
export interface Fact {
  value: string;
  label: string;
}

/** A named piece of a system: what it does and what it runs on. */
export interface Part {
  name: string;
  role: string;
  stack: string[];
  repo?: string;
  /** Chip beside the name, for a repository that is not public. */
  tag?: string;
}

/** A decision, a finding or a guarantee: one heading, one paragraph. */
export interface Note {
  title: string;
  body: string;
}

/** A term and its definition, for the lists that read as a glossary. */
export interface Term {
  label: string;
  body: string;
}
