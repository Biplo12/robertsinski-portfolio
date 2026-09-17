'use client';

import React from 'react';

import { site } from '@/lib/site';

interface NavItem {
  id: string;
  label: string;
}

const items: NavItem[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'activity', label: 'Activity' },
  { id: 'tools', label: 'Tools' },
];

/**
 * A rail of anchors that appears once the hero is behind you. It stays out of
 * the way at the top of the page, where the hero already says who this is, and
 * turns up when the reader is deep enough to want to jump.
 */
/* The page scrolls smoothly, and Chrome scales that animation with the
   distance: from the top of the page a jump to the last section takes about
   three seconds, which reads as a dead link. These run on a fixed duration
   instead, so every item in the rail feels the same. */
let running: number | undefined;

const jump = (event: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
  const section = document.getElementById(id);
  if (!section) return;

  /* Two clicks in a row would otherwise leave two animations writing to the
     same scroll position and fighting each other. */
  if (running !== undefined) cancelAnimationFrame(running);

  event.preventDefault();
  history.replaceState(null, '', `#${id}`);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = 96;
  const limit = document.documentElement.scrollHeight - window.innerHeight;
  const to = Math.min(
    Math.max(section.getBoundingClientRect().top + window.scrollY - header, 0),
    limit,
  );

  if (reduced) {
    window.scrollTo({ top: to, behavior: 'instant' });
    return;
  }

  const from = window.scrollY;
  const start = performance.now();
  const ease = (t: number): number =>
    t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

  const step = (now: number): void => {
    const t = Math.min((now - start) / 520, 1);
    /* Instant on every frame: the stylesheet asks for smooth scrolling, and
       without this each frame would start its own animation. */
    window.scrollTo({ top: from + (to - from) * ease(t), behavior: 'instant' });
    if (t < 1) {
      running = requestAnimationFrame(step);
      return;
    }

    running = undefined;
    /* One last event once the animation has landed. The browser coalesces
       scroll events while a frame loop is writing to the position, and the
       last one it delivers is not always the final position. */
    window.dispatchEvent(new Event('scroll'));
  };

  running = requestAnimationFrame(step);
};

const SiteNav: React.FC = (): React.JSX.Element => {
  const [shown, setShown] = React.useState(false);
  const [active, setActive] = React.useState<string>();

  React.useEffect(() => {
    /* The last section whose top has passed the line under the rail. An
       observer was picking whichever entry fired last, so two sections in the
       band at once could hand the mark to the lower one and clicking an item
       lit up the one after it. This cannot be ambiguous. */
    const onScroll = (): void => {
      setShown(window.scrollY > 320);

      const line = window.scrollY + 140;
      const page = document.documentElement;
      const atBottom =
        window.scrollY + window.innerHeight >= page.scrollHeight - 2;

      if (atBottom) {
        setActive(items[items.length - 1].id);
        return;
      }

      let current: string | undefined;

      for (const item of items) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        if (section.getBoundingClientRect().top + window.scrollY <= line) {
          current = item.id;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <nav
      aria-label='Sections'
      data-shown={shown}
      className='pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-6 pt-4 opacity-0 transition-opacity duration-300 data-[shown=true]:pointer-events-auto data-[shown=true]:opacity-100 motion-reduce:transition-none'
    >
      <div className='flex items-center gap-1 rounded-full border border-white/10 bg-black/80 px-2 py-1.5 backdrop-blur-md'>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => {
              /* Mark it straight away. The scroll listener would get there on
                 its own, but not until the animation has finished, so the
                 click looked like it had gone to the wrong item. */
              setActive(item.id);
              jump(event, item.id);
            }}
            aria-current={active === item.id ? 'true' : undefined}
            className={`rounded-full px-3 py-1.5 type-meta transition-colors ${
              active === item.id
                ? 'bg-white/10 text-ink-strong'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            {item.label}
          </a>
        ))}

        <a
          href={`mailto:${site.email}`}
          className='ml-1 rounded-full bg-white/92 px-3 py-1.5 type-meta text-background transition-opacity hover:opacity-90'
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default SiteNav;
