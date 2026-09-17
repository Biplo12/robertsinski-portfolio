export interface BoardflowFact {
  value: string;
  label: string;
}

/* What the thing has actually gathered, plus the one product number that is
   countable from the code. */
export const boardflowFacts: BoardflowFact[] = [
  { value: '200+', label: 'accounts' },
  { value: '150+', label: 'boards' },
  { value: '6', label: 'tools on the canvas' },
];

export interface BoardflowPart {
  name: string;
  role: string;
  stack: string[];
}

export interface BoardflowDecision {
  title: string;
  body: string;
}

export const boardflowParts: BoardflowPart[] = [
  {
    name: 'The canvas',
    role: 'Shapes, notes, text, images and freehand drawing, with selecting, resizing, deleting and reordering. Strokes are rendered from pressure points rather than plain lines.',
    stack: ['Next.js 16', 'perfect-freehand', 'Redux Toolkit'],
  },
  {
    name: 'The room',
    role: 'Everything on a board that other people need to see right now: cursors, current selections, the stroke being drawn, and the layers themselves.',
    stack: ['Liveblocks', 'LiveMap', 'LiveList'],
  },
  {
    name: 'The database',
    role: 'Everything that has to survive a refresh: accounts, organisations, memberships, invitations, boards and favourites, with a search index on board titles scoped per organisation.',
    stack: ['Convex', 'Convex Auth'],
  },
];

/* Three, not five. The ones left are the parts of a shared canvas that are
   actually hard; access rules and the auth migration are in the repository. */
export const boardflowDecisions: BoardflowDecision[] = [
  {
    title: 'Two backends, one for each kind of data',
    body: 'Organisations, boards and who belongs where live in Convex, because they have to still be there the next time you open the app. Cursors, selections and the shapes on the canvas live in a Liveblocks room, because they change dozens of times a second and only matter while someone is looking. Trying to keep both in one place would mean either writing every mouse move to a database or losing the board on refresh.',
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
