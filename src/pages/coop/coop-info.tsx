'use client';

import { useState } from 'react';
import { Playfair_Display } from 'next/font/google';
import { Kumbh_Sans } from 'next/font/google';
import { PageStatus } from '../../app/constant'; // Adjust the import path if needed

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

interface CoopInfoProps {
  setCurrentPage: (page: number) => void;
}

const CoopInfo = ({ setCurrentPage }: CoopInfoProps) => {
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
          className={`text-4xl font-light bg-clip-text text-transparent bg-black mt-6 mb-6`}
          style={{ lineHeight: '1.2' }}
        >
          Blog about My Co-op/Internship!
        </h2>
        <div className="flex space-x-4 mt-8">
          <button
            id="main__btn"
            className={`text-lg bg-gradient-to-t from-[#f9a8c8] to-[#c9a1fd] px-8 py-4 rounded-md text-white cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out ${kumbhSans.className}`}
            onClick={() => setCurrentPage(PageStatus.S24)} // Update page status to Summer 24'
          >
            <a className="text-2xl text-white no-underline relative z-10">Summer 24'</a>
          </button>
          <button
            id="main__btn"
            className={`text-lg bg-gradient-to-t from-[#f9a8c8] to-[#c9a1fd] px-8 py-4 rounded-md text-white cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out ${kumbhSans.className}`}
            onClick={() => setCurrentPage(PageStatus.F24)} // Update page status to Fall 24'
          >
            <a className="text-2xl text-white no-underline relative z-10">Fall 24'</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoopInfo;
