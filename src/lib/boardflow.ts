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
    role: 'Everything other people need to see right now, including the layers themselves.',
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
    body: 'Put everything in the database and you are writing every mouse move to disk. Put everything in the realtime room and the board is gone on the next refresh. So the split is by how long a thing has to live, and that choice drives the rest.',
  },
  {
    title: 'A stroke becomes a layer only once it is finished',
    body: 'While the pencil is down, the points are sent the same way as the cursor position. Only the finished stroke is stored as a layer. Everyone still sees the line appear as it is drawn, and undo gets one entry for the whole stroke instead of one per point.',
  },
  {
    title: 'Layer order is its own list',
    body: 'Layers sit in a map keyed by id, and their order in a separate list of ids. Sending a shape to the front means reordering a short list of strings, not rewriting the shapes. Two people editing different shapes never touch the same value, so their changes cannot collide.',
  },
];
