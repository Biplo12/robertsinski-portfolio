'use client';

import React from 'react';

interface ProjectClipProps {
  src: string;
  /* Shown until playback starts, and left standing whenever it does not: a
     browser that cannot decode the file, a blocked autoplay, reduced motion. */
  poster: string;
  label: string;
  width: number;
  height: number;
}

/**
 * A short screen capture of the running thing, in place of a screenshot. The
 * write-up is otherwise a wall of text and a still frame cannot show that the
 * listing loads, filters and scrolls.
 */
const ProjectClip: React.FC<ProjectClipProps> = ({
  src,
  poster,
  label,
  width,
  height,
}): React.JSX.Element => {
  const video = React.useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = React.useState(false);

  React.useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = (): void => setReduced(query.matches);

    apply();
    query.addEventListener('change', apply);

    return () => query.removeEventListener('change', apply);
  }, []);

  React.useEffect(() => {
    const element = video.current;
    if (!element) return;

    /* Playback is started here rather than with the autoplay attribute, so a
       reader who asked for less motion never gets a frame of it. They get the
       poster and the controls to start it themselves. */
    if (reduced) element.pause();
    else void element.play().catch(() => undefined);
  }, [reduced]);

  return (
    <figure className='mt-8 rounded-2xl border border-white/8 bg-white/2 p-2.5'>
      <video
        ref={video}
        poster={poster}
        width={width}
        height={height}
        aria-label={label}
        controls={reduced}
        muted
        loop
        playsInline
        preload='metadata'
        className='block h-auto w-full rounded-xl'
      >
        <source src={src} type='video/webm' />
      </video>
    </figure>
  );
};

export default ProjectClip;
