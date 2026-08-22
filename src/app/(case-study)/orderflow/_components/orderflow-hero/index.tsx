import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const OrderflowHero: React.FC = (): React.JSX.Element => {
  return (
    <article className='glass glass-sheen rounded-[2rem] px-8 pt-7 pb-8'>
      <Link
        href='/'
        className='inline-flex items-center gap-1.5 text-xs text-foreground/60 transition-colors hover:text-foreground'
      >
        <ArrowLeft aria-hidden className='size-3' />
        Back
      </Link>

      <h1 className='font-display mt-6 text-[2rem] leading-none font-semibold tracking-tight'>
        orderflow-engine
      </h1>

      <p className='mt-5 max-w-[62ch] leading-relaxed text-foreground/85'>
        Placing an order means reserving stock, charging a card and sending a
        confirmation. Do all three inside one request and every one of them can
        go wrong: the request waits for all three, a crash halfway through loses
        the order, a retry can charge the card twice, and stock stays reserved
        for a payment that never arrived.
      </p>

      <p className='mt-3 max-w-[62ch] leading-relaxed text-foreground/85'>
        This splits the job into five processes that talk only through a queue.
        No service calls another directly, and any of them can be restarted
        mid-flow without losing an order or repeating a charge.
      </p>

      <div className='mt-7'>
        <a
          href='https://github.com/Biplo12/orderflow-engine'
          target='_blank'
          rel='noreferrer'
          className='inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-transform hover:-translate-y-0.5'
        >
          Read the code
          <ArrowUpRight aria-hidden className='size-3.5' />
        </a>
      </div>
    </article>
  );
};

export default OrderflowHero;
