'use client';

import { Playfair_Display } from 'next/font/google';
import { Kumbh_Sans } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

const Fall24 = () => {
  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 8rem)', overflow: 'hidden' }}>
      <div
        id="main__content"
        className={`absolute top-1/4 left-1/4 right-1/4 ${playfairDisplay.className}`}
      >
        <h1
          className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#ee4086] to-[#ffb199]`}
          style={{ lineHeight: '1.2' }}
        >
          Fall 24&#39; Co-op Experience
        </h1>
        <p
          className={`text-2xl text-black ${kumbhSans.className}`}
        >
          To be determined...
        </p>
      </div>
    </div>
  );
};

export default Fall24;
