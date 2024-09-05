'use client';

import { Playfair_Display } from 'next/font/google';
import { Kumbh_Sans } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

const Summer24 = () => {
  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 8rem)', overflow: 'hidden' }}>
      <div
        id="coop_content"
        className={`absolute flex left-1/4 ${playfairDisplay.className}`}
      >
        <div className="flex-1">
          <h1
            className={`text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#ee4086] to-[#ffb199]`}
            style={{ lineHeight: '1.2' }}
          >
            Summer 24':
          </h1>
          <h1
            className={`text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-t text-[#004B87]`}
            style={{ lineHeight: '1.2' }}
          >
            Bell Canada
          </h1>
        </div>
      </div>
      <div
        className="absolute top-1/4 left-2/3 flex flex-col space-y-8"
      >
        <button className="text-2xl bg-gradient-to-t from-[#007bff] to-[#0056b3] px-8 py-5 rounded-md text-white cursor-pointer transition-all duration-300 ease-in-out">
          Introduction
        </button>
        <button className="text-2xl bg-gradient-to-t from-[#007bff] to-[#0056b3] px-8 py-5 rounded-md text-white cursor-pointer transition-all duration-300 ease-in-out">
          About Bell
        </button>
        <button className="text-2xl bg-gradient-to-t from-[#007bff] to-[#0056b3] px-8 py-5 rounded-md text-white cursor-pointer transition-all duration-300 ease-in-out">
          Job Description
        </button>
        <button className="text-2xl bg-gradient-to-t from-[#007bff] to-[#0056b3] px-8 py-5 rounded-md text-white cursor-pointer transition-all duration-300 ease-in-out">
          Learning Goals
        </button>
        <button className="text-2xl bg-gradient-to-t from-[#007bff] to-[#0056b3] px-8 py-5 rounded-md text-white cursor-pointer transition-all duration-300 ease-in-out">
          Conclusion
        </button>
      </div>
    </div>
  );
};

export default Summer24;
