'use client';

import { useState, useRef } from 'react';
import { Playfair_Display } from 'next/font/google';
import { Kumbh_Sans } from 'next/font/google';

import AboutS24 from './summer24/about-s24';
import ConclusionS24 from './summer24/conclusion-s24';
import GoalsS24 from './summer24/goals-s24';
import JdescS24 from './summer24/jdesc-s24';
import IntroductionS24 from './summer24/intro-s24';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

const Summer24 = () => {
  // Create references for each section
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLDivElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);
  const jdescRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a specific section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 8rem)', overflow: 'hidden' }}>
      {/* Toggle button to reveal the strip when hidden */}

      {/* Vertical strip with buttons */}
        <div
          className="vertical-strip fixed top--8rem left-0 h-[calc(100vh-8rem)] w-60 bg-[#955988] flex flex-col space-y-8 p-10 z-10"
        >

          <button
            onClick={() => scrollToSection(introRef)}
            className="text-lg bg-white text-black hover:text-white hover:bg-[#950476] px-6 py-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
          >
            Introduction
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="text-lg bg-white text-black hover:text-white hover:bg-[#950476] px-6 py-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
          >
            About Bell
          </button>
          <button
            onClick={() => scrollToSection(jdescRef)}
            className="text-lg bg-white text-black hover:text-white hover:bg-[#950476] px-6 py-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
          >
            Job Description
          </button>
          <button
            onClick={() => scrollToSection(goalsRef)}
            className="text-lg bg-white text-black hover:text-white hover:bg-[#950476] px-6 py-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
          >
            Learning Goals
          </button>
          <button
            onClick={() => scrollToSection(conclusionRef)}
            className="text-lg bg-white text-black hover:text-white hover:bg-[#950476] px-6 py-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
          >
            Conclusion
          </button>
        </div>

      {/* Main content */}
      <div
        id="coop_content"
        className={`absolute top-0 left-0 right-0 bottom-0 overflow-auto ${kumbhSans.className}`}
      >
        {/* Sections */}
        <div ref={introRef}><IntroductionS24/></div>
        <div ref={aboutRef}><AboutS24 /></div>
        <div ref={jdescRef}><JdescS24 /></div>
        <div ref={goalsRef}><GoalsS24 /></div>
        <div ref={conclusionRef}><ConclusionS24 /></div>
      </div>
    </div>
  );
};

export default Summer24;
