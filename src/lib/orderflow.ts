export interface OrderflowProcess {
  name: string;
  role: string;
  stack: string[];
}

export interface OrderflowPattern {
  title: string;
  body: string;
}

export const orderflowProcesses: OrderflowProcess[] = [
  {
    name: 'api',
    role: 'Takes the order over HTTP and answers 202 straight away. It writes the order row and the event that announces it in a single transaction, then it is done.',
    stack: ['Fastify 5', 'PostgreSQL 16'],
  },
  {
    name: 'outbox-relay',
    role: 'Reads events that were written but not yet published and puts them on the queue. This is the only place where the database and the queue meet.',
    stack: ['BullMQ 5', 'Redis 7'],
  },
  {
    name: 'inventory-worker',
    role: 'Reserves stock for the order, and releases it again when a later step reports that the payment failed.',
    stack: ['BullMQ', 'PostgreSQL'],
  },
  {
    name: 'payment-worker',
    role: 'Charges the card once, no matter how many times it sees the same event, and reports back whether it went through.',
    stack: ['BullMQ', 'PostgreSQL'],
  },
  {
    name: 'notification-worker',
    role: 'Sends the confirmation after the payment succeeds. Last step, and the only one the customer sees.',
    stack: ['BullMQ'],
  },
];

export const orderflowPatterns: OrderflowPattern[] = [
  {
    title: 'The order and its event are written together',
    body: 'Writing the order to the database and publishing the event are two different systems, so doing them one after another leaves a window where the process can die and the order exists with nobody told about it. Both go into the same transaction: the row and an entry in an outbox table. Publishing happens later, from that table.',
  },
  {
    title: 'Every step can handle the same event twice',
    body: 'A queue that guarantees delivery will eventually deliver twice. Each worker keys its state on the order id with a unique constraint, so a repeated event is a no-op instead of a second reservation or a second charge. This is what makes retries safe.',
  },
  {
    title: 'Failures retry with a growing delay',
    body: 'A timeout usually means the other side is busy, not broken, so failing immediately just moves the problem. Jobs retry with an increasing wait between attempts, which gives whatever went wrong time to recover.',
  },
  {
    title: 'Jobs that keep failing get moved aside',
    body: 'A job that will never succeed, because the data is wrong rather than the service is down, would retry forever and hold up everything behind it. After a limit it lands in a dead letter table where it can be looked at, and the queue moves on.',
  },
  {
    title: 'A failed payment undoes the reservation',
    body: 'There is no transaction spanning the whole flow, so the way back is an event, not a rollback. When the payment fails, that fact travels back to the inventory step, which releases what it had reserved. The order ends in a consistent state without anything holding a lock in between.',
  },
];
