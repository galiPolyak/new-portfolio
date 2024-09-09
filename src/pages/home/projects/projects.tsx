'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const Projects = () => {
  return (
    <div className={`w-full h-[calc(100vh-6rem)] bg-gradient-to-t from-[#f6cbdc] to-[#ffddd3] flex items-center justify-center`}>
      <h2 className={`text-3xl ${playfairDisplay.className}`}>This is the Projects Page!</h2>
    </div>
  );
};

export default Projects;
