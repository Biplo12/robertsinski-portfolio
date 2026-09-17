import type { Note, Term } from './case-study';

export interface ScalingStage {
  step: number;
  change: string;
  /* Requests per second the server kept up with. */
  capacity: number;
  /* p95 of the task list at that capacity. */
  p95: string;
  /* p99 at 2000 requests asked for, once the server could be pushed that far.
     It is the column that separates the steps that added throughput from the
     one that only capped latency. */
  p99?: string;
}

export const scalingStages: ScalingStage[] = [
  { step: 1, change: 'Nothing. The plain version', capacity: 1, p95: '4980 ms' },
  {
    step: 2,
    change: 'One index on comments.task_id',
    capacity: 30,
    p95: '235 ms',
  },
  {
    step: 3,
    change: 'The right composite index on tasks',
    capacity: 120,
    p95: '197 ms',
  },
  { step: 4, change: 'Joins instead of N+1', capacity: 400, p95: '8.2 ms' },
  {
    step: 5,
    change: 'Node on four processes instead of one',
    capacity: 1200,
    p95: '46 ms',
    p99: '1230 ms',
  },
  {
    step: 6,
    change: 'Timeouts and load shedding',
    capacity: 1200,
    p95: '46 ms',
    p99: '209 ms',
  },
  {
    step: 7,
    change: 'Prepared statements, response schemas',
    capacity: 2000,
    p95: '57 ms',
    p99: '93 ms',
  },
  {
    step: 8,
    change: 'Redis cache with singleflight',
    capacity: 2600,
    p95: '55 ms',
    p99: '65 ms',
  },
];

export const scalingFindings: Note[] = [
  {
    title: 'The bottleneck was never where I expected',
    body: 'The task list ran 42 queries for one page, so that looked like the thing to fix. The query plan disagreed. One of those 42 was a sequential scan that threw away two million rows and took 62 of the 82 ms; the other 41 came to about 15 ms together. Removing the N+1 was still worth doing, but it came two steps later, after the index that was the real problem.',
  },
  {
    title: 'Four indexes for one query',
    body: 'Indexing project_id alone made the query slower than no index at all, 326 ms against 140, because Postgres still had to sort 73 thousand rows. Adding created_at descending brought it to 53 ms and still sorted. Only NULLS FIRST matched the order the query asks for, so the planner could walk the index and stop after 20 rows. That one is 0.178 ms.',
  },
  {
    title: 'Six processes were worse than four',
    body: 'At 800 requests per second six workers dropped nothing and four dropped 120, so six looked better. At 1200 it reversed: six dropped 649 and four dropped 70. The load generator runs on the same machine and needs cores too, so the extra workers were competing with the thing measuring them.',
  },
  {
    title: 'One step added no throughput and I kept it',
    body: 'Query timeouts, a pool timeout and a cap on requests in flight left capacity exactly where it was, at 1200. What changed is what happens above it. At 2000 asked for, p99 went from 1230 ms to 209 ms, and the server answers 503 with a retry-after instead of computing replies nobody is waiting for. Health and metrics skip the check, so a load balancer does not pull the server out at the worst possible moment.',
  },
  {
    title: 'My own code was 1.2 percent of the CPU',
    body: 'The database was idle and Node was the limit, so I profiled Node. Drizzle took 37 percent, writing to sockets 18.3, Node internals 13, the Postgres driver 9.9, Fastify 9.7. The single most expensive function in the server was a type check inside the ORM, at 13.9 percent, called every time it builds a piece of SQL. Preparing the statements once and handing Fastify a response schema took capacity from 1200 to 2000 without touching the database.',
  },
  {
    title: 'The cache TTL turned out not to matter',
    body: 'Thirty seconds gives a 38.5 percent hit rate. Six hundred seconds gives 36.9. Twenty times the lifetime moves it by half a point, because what limits the hit rate is how spread out the requests are, not how long a value survives. The writes invalidate the two keys they affect, and one lookup per key runs at a time so a miss does not turn into a stampede.',
  },
];

export const scalingMethod: Term[] = [
  {
    label: 'Machine',
    body: 'One desktop, six cores and twelve threads, 32 GB of RAM, NVMe disk. Node on Windows, Postgres and Redis in Docker. Nothing was upgraded between step 1 and step 8.',
  },
  {
    label: 'Database',
    body: '7.3 million rows over 1003 MB. The seeder uses a fixed seed, so two runs give the same database.',
  },
  {
    label: 'Uneven on purpose',
    body: 'The largest organisation holds 209 879 tasks, the middle one 1088, the smallest 279. If every organisation were the same size, the cache numbers in step 8 would mean nothing.',
  },
  {
    label: 'Load',
    body: 'k6 sends 60 percent task lists, 30 percent task details and 10 percent writes. A write reads its task first, so the detail endpoint takes 40 percent of everything.',
  },
  {
    label: 'Capacity',
    body: 'The highest rate the server kept up with, not the rate it was asked for. Above capacity the interesting number is p99, which is why that column only fills in once the server got that far.',
  },
  {
    label: 'What this does not say',
    body: 'k6 runs on the same machine and takes CPU away from the server, so these numbers compare the steps against each other. They do not say what this hardware does with a separate client. Step 1 exists partly to measure what k6 itself costs.',
  },
];
