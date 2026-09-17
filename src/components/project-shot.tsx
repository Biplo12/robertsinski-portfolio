import Image from 'next/image';
import React from 'react';

interface ProjectShotProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * A screenshot of the running thing, sitting under the case-study hero. The
 * write-ups are otherwise walls of text and the reader has to take it on faith
 * that any of it shipped.
 */
const ProjectShot: React.FC<ProjectShotProps> = ({
  src,
  alt,
  width,
  height,
}): React.JSX.Element => {
  return (
    <figure className='mt-8 overflow-hidden rounded-2xl border border-white/10'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes='(max-width: 1080px) 100vw, 1016px'
        className='h-auto w-full'
      />
    </figure>
  );
};

export default ProjectShot;
