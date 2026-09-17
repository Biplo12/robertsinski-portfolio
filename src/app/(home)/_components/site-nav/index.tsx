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
const SiteNav: React.FC = (): React.JSX.Element => {
  const [shown, setShown] = React.useState(false);
  const [active, setActive] = React.useState<string>();

  React.useEffect(() => {
    const onScroll = (): void => setShown(window.scrollY > 320);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Whichever section last crossed the upper third of the viewport wins, so
       the mark follows reading rather than flickering between neighbours. */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );

    for (const item of items) {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
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
