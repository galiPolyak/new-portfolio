'use client';

import { Playfair_Display } from 'next/font/google'
import { Kumbh_Sans } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' }) // Changed weight to 400 for light font
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] })
import BubbleAnimation from '../components/bubble-anim'; // Ensure this path is correct

const Home = () => {
  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 8rem)', overflow: 'hidden' }}>
      {/* Bubble Animation Canvas */}
      <BubbleAnimation />

      {/* Main Content */}
      <canvas id="myCanvas" className="w-full h-full"></canvas>
        <div
          id="main__content"
          className={`absolute top-1/4 left-1/4 right-1/4 z-10 ${playfairDisplay.className}`}
        >
          <h1
            className={`text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#ee4086] to-[#ffb199] mb-4`}
            style={{ lineHeight: '1.2' }}
          >
            HELLO, I'M GALI.
          </h1>
          <h2
            className={`text-4xl font-light bg-clip-text text-transparent bg-black mb-6`}
          >
            I'm a Bachelor of Computing Undergrad @ the University of Guelph!
          </h2>
          <button
          id="main__btn"
          className={`text-lg bg-gradient-to-t from-[#ffb6ad] to-[#fa90bb] px-8 py-4 rounded-md text-white cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out ${kumbhSans.className}`}
        >
          <a className="text-2xl text-white no-underline relative z-10">Contact me!</a>
        </button>
        </div>
      </div>
  );
};

export default Home;
