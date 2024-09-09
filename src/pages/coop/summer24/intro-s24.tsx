'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const IntroductionS24 = () => {
  return (
    <div className="coop__text w-full h-[calc(100vh-8rem)] flex flex-col items-center justify-start px-4 md:px-8">
        <h1 className={`coop__title mt-20 text-7xl text-[#004B87] ${playfairDisplay.className}`} style={{ lineHeight: '1.2' }}>
          Summer 2024 Blog: Bell Canada
        </h1>
        <h2 className={`coop_heading text-5xl font-bold text-[#000000] mt-8 ${playfairDisplay.className}`}>
          Introduction
        </h2>
        <p className={`coop__paragraph text-3xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
          Hi there, from May &#39;24 to Aug &#39;24 I was working as a Software Development Intern for Bell Media. Bell is a leading Canadian telecommunications company that specializes in providing advanced communications services, including wireless, internet, and television. The company plays a significant role in the field of computing science, particularly in areas such as network engineering, cloud computing, cybersecurity, and the development of digital platforms. Bell is known for its innovation in building high-speed networks and digital solutions that connect millions of people across Canada.
        </p>
    </div>
  );
};

export default IntroductionS24;
