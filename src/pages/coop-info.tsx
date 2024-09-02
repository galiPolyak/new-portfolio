'use client';

import { Playfair_Display } from 'next/font/google';
import { Kumbh_Sans } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

const CoopInfo = () => {
  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 8rem)', overflow: 'hidden' }}>
      <canvas id="myCanvas" className="w-full h-full"></canvas>
      <div
        id="main__content"
        className={`absolute top-1/4 left-1/4 right-1/4 ${playfairDisplay.className}`}
      >
        <h1
          className={`text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#ee4086] to-[#ffb199]`}
          style={{ lineHeight: '1.2' }}
        >
          My Co-op Experiences

        </h1>
        <h2
          className={`text-4xl font-light bg-clip-text text-transparent bg-black`}
        >
          Details about My Co-op Experience
        </h2>
        <p
          className={`text-lg text-black ${kumbhSans.className}`}
        >
          This is where the Co-op information will be displayed. You can include details about your co-op experiences, roles, and accomplishments.
        </p>
      </div>
    </div>
  );
};

export default CoopInfo;
