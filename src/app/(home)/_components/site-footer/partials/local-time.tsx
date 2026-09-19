'use client';

import React from 'react';

const formatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Warsaw',
  hour: '2-digit',
  minute: '2-digit',
});

/* The clock is an external source, so the component subscribes to it rather
   than holding a copy in state. Strings compare by value, so a render only
   happens when the minute actually changes. */
const subscribe = (notify: () => void): (() => void) => {
  const tick = setInterval(notify, 15_000);

  return () => clearInterval(tick);
};

const read = (): string => formatter.format(new Date());

/* Nothing on the server: it has no business guessing what time it is, and a
   guess that disagreed with the client would be a hydration mismatch. */
const readOnServer = (): undefined => undefined;

/**
 * My clock, not the reader's. Someone deciding whether to write from another
 * timezone can see whether it is a reasonable hour here.
 */
const LocalTime: React.FC = (): React.JSX.Element => {
  const now = React.useSyncExternalStore(subscribe, read, readOnServer);

  if (!now) return <span aria-hidden />;

  return (
    <span className='inline-flex items-center gap-2'>
      <span aria-hidden className='size-1.5 rounded-full bg-signal' />
      {now} in Katowice
    </span>
  );
};

export default LocalTime;
