'use client';

import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Marks its children as they come into view, so a section animates when the
 * reader arrives at it rather than all of them animating at load while most
 * are still off screen.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  className,
}): React.JSX.Element => {
  const host = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = host.current;
    if (!element) return;

    const sections = [...element.children] as HTMLElement[];

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (const section of sections) section.dataset.reveal = 'in';
      return;
    }

    /* Measured on scroll rather than with an observer. A jump from the rail
       takes a section from below the fold to above it without ever
       intersecting, and an observer reports no change for that, so skipped
       sections stayed invisible on the way back up. */
    let frame: number | undefined;

    const sweep = (): void => {
      frame = undefined;

      const line = window.innerHeight * 0.94;
      let remaining = false;

      for (const section of sections) {
        if (section.dataset.reveal === 'in') continue;

        if (section.getBoundingClientRect().top < line) {
          section.dataset.reveal = 'in';
        } else {
          remaining = true;
        }
      }

      if (!remaining) window.removeEventListener('scroll', onScroll);
    };

    const onScroll = (): void => {
      frame ??= requestAnimationFrame(sweep);
    };

    sweep();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={host} className={`reveal ${className ?? ''}`}>
      {children}
    </div>
  );
};

export default Reveal;
