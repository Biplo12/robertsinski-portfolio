import type { Fact, Note, Part } from './case-study';

export const boardflowFacts: Fact[] = [
  { value: '200+', label: 'accounts' },
  { value: '150+', label: 'boards' },
  { value: '6', label: 'tools on the canvas' },
  { value: '2', label: 'stores, split by lifetime' },
];

export const boardflowParts: Part[] = [
  {
    name: 'The canvas',
    role: 'Six tools, with selecting, resizing, deleting and reordering. Strokes are rendered from pressure points rather than plain lines.',
    stack: ['Next.js 16', 'perfect-freehand', 'Redux Toolkit'],
  },
  {
    name: 'The room',
    role: 'Everything other people need to see right now, the layers included.',
    stack: ['Liveblocks', 'LiveMap', 'LiveList'],
  },
  {
    name: 'The database',
    role: 'Everything that has to survive a refresh, plus a search index on board titles scoped per organisation.',
    stack: ['Convex', 'Convex Auth'],
  },
];

export const boardflowDecisions: Note[] = [
  {
    title: 'Two backends, one for each kind of data',
    body: 'Keeping both in one place means one of two bad days: writing every mouse move to a database, or losing the whole board on a refresh. The split is by lifetime, and it decides everything else on this page.',
  },
  {
    title: 'A stroke becomes a layer only once it is finished',
    body: 'While the pencil is down, the points travel as presence, next to the cursor position. Only the finished stroke becomes a layer in storage. Everyone sees the line appear as it is drawn, and the undo history gets one entry for the stroke instead of one for every point along it.',
  },
  {
    title: 'Layer order is its own list',
    body: 'Layers sit in a map keyed by id, and their order in a separate list of ids. Sending a shape to the front means reordering a short list of strings, not rewriting the shapes. Two people editing different shapes never touch the same value, so their changes cannot collide.',
  },
];
