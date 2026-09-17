import React from 'react';

import SectionHeader from '@/components/section-header';

interface Block {
  label: string;
  paragraphs: string[];
}

const blocks: Block[] = [
  {
    label: 'Homelab',
    paragraphs: [
      'One machine at home runs the media library, the house automation, the cameras and my files. Proxmox underneath, services in Docker, cameras processed on the GPU, backups on their own box.',
      'There are two domains. One resolves only inside the house and I reach it from anywhere over NetBird. The other sits behind Cloudflare, for the few things other people use, like Jellyfin and Plex.',
    ],
  },
  {
    label: 'Films, and lately golf',
    paragraphs: [
      'I watch a lot of films, mostly older ones. That is where Klaps came from: I kept missing screenings I would have gone to if I had known about them.',
      'I also started playing golf recently. Still bad at it, and still going back.',
    ],
  },
];

const AwaySection: React.FC = (): React.JSX.Element => {
  return (
    <section className='section-panel grid gap-x-10 gap-y-6 px-8 pt-7 pb-8 sm:grid-cols-[16rem_minmax(0,1fr)]'>
      <SectionHeader
        title='Away from work'
        note='One box at home, and what I do when I am not near it.'
        stacked
      />

      <div className='min-w-0'>
        {blocks.map((block) => (
          <div
            key={block.label}
            className='border-t border-white/10 py-5 first:border-t-0 first:pt-0 last:pb-0'
          >
            <h3 className='type-name text-ink-strong'>{block.label}</h3>

            {block.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className='mt-2 max-w-[62ch] type-body text-ink-muted'
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwaySection;
