import React from 'react';

interface DiagramFrameProps {
  children: React.ReactNode;
  caption?: string;
}

/** A surface for a diagram or a chart, so a figure reads as a figure. */
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
