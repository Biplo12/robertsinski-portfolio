import React from 'react';

const InterestsSection: React.FC = (): React.JSX.Element => {
  return (
    <section className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <h2 className='font-display text-lg font-semibold tracking-tight'>
        Away from the keyboard
      </h2>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        I watch a lot of films, mostly older ones. That is where Klaps came
        from: I kept missing screenings I would have gone to if I had known
        about them.
      </p>

      <p className='mt-4 max-w-[62ch] leading-relaxed text-foreground/85'>
        I also started playing golf recently. Still bad at it, and still going
        back.
      </p>
    </section>
  );
};

export default InterestsSection;
