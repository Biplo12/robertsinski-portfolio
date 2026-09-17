import React from 'react';

interface DiagramFrameProps {
  children: React.ReactNode;
  caption?: string;
}

/**
 * A surface for a diagram or a chart. Drawn straight onto the panel they read
 * as loose shapes floating above whatever list follows them, with nothing to
 * say where the picture ends. The frame is the same fill and border the
 * project cards use, so a figure looks like a figure everywhere.
 */
const DiagramFrame: React.FC<DiagramFrameProps> = ({
  children,
  caption,
}): React.JSX.Element => {
  return (
    <figure className='rounded-2xl border border-white/8 bg-white/2 px-5 py-6 text-foreground'>
      {children}

      {caption ? (
        <figcaption className='mt-4 type-meta text-ink-faint'>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
};

export default DiagramFrame;
