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
  *
  * It sits inside a frame with a margin rather than bleeding to the edges,
  * because a light product shot on a black page otherwise reads as a hole
  * punched through it.
  */
const ProjectShot: React.FC<ProjectShotProps> = ({
  src,
  alt,
  width,
  height,
}): React.JSX.Element => {
  return (
    <figure className='mt-8 rounded-2xl border border-white/8 bg-white/2 p-2.5'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes='(max-width: 1080px) 100vw, 1016px'
        className='h-auto w-full rounded-xl'
      />
    </figure>
  );
};

export default ProjectShot;
