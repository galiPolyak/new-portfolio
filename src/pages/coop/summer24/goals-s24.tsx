'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const GoalsS24 = () => {
  return (
    <div className={`w-full h-[calc(100vh-8rem)] bg-gradient-to-t from-[#ee4086] to-[#ffb199] flex items-center justify-center`}>
      <h2 className={`text-4xl ${playfairDisplay.className}`}>This is the Learning Goals Page!</h2>
    </div>
  );
};

export default GoalsS24;