'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const IntroductionF24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
        <h1 className={`coop__title mt-10 text-6xl text-center text-[#004B87] ${playfairDisplay.className}`} style={{ lineHeight: '1.2' }}>
          Fall 2024 Blog: Bell Canada
        </h1>
        <h2 className={`coop_heading text-3xl font-bold text-[#000000] mt-8 ${playfairDisplay.className}`}>
          Introduction
        </h2>
        <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        For my Fall 2024 work term, I worked as a Software Developer Intern at Bell Canada, one of Canada&#39;s leading telecommunications companies. This term was particularly enriching as I contributed to the design, development, and maintenance of data pipelines, gaining hands-on experience with backend technologies and real-time data processing. I had the chance to work both remotely and in the office, with a flexible schedule that balanced focused solo work and collaborative team interactions.
        <br/>
        <br/>
        My responsibilities included leveraging tools like SQL Server and Google Cloud while enhancing my proficiency in programming languages such as SQL and Python. This role offered me a unique opportunity to work on impactful projects that directly support Bell&#39;s mission of delivering cutting-edge networks and services. The practical experience I gained in data modeling, problem-solving, and teamwork has been instrumental in shaping my technical and professional growth during this term. 
        </p>

        {/* Images section */}
        <div className="s24Images flex gap-4 mt-8">
          <img src="/s24CoopImgs/bell-building2.jpg" alt="bellBuildingImg"className="w-[20rem] h-auto" />
        </div>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-20 mb-10" />
    </div>
  );
};

export default IntroductionF24;
