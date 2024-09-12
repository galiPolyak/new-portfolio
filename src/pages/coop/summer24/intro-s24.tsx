'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const IntroductionS24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
        <h1 className={`coop__title mt-10 text-6xl text-[#004B87] ${playfairDisplay.className}`} style={{ lineHeight: '1.2' }}>
          Summer 2024 Blog: Bell Canada
        </h1>
        <h2 className={`coop_heading text-3xl font-bold text-[#000000] mt-8 ${playfairDisplay.className}`}>
          Introduction
        </h2>
        <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        For my Summer 2024 work term, I worked as a Software Developer Intern at Bell Media, a leading Canadian telecommunications company. This term was especially exciting because I had the opportunity to work in the office on a flexible schedule, going in three times a week and choosing the days that suited me best. The flexibility allowed me to balance office time with remote work, providing a great mix of collaboration and focused work time. It was a refreshing experience compared to my fully remote past work terms, and I enjoyed the opportunity to interact with colleagues in person.
        <br/>
        <br/>
        During my internship at Bell, I gained valuable hands-on experience in backend development, particularly working with Golang and SQL to manage and monitor data pipelines. I found this role incredibly engaging because I worked on projects that had direct impact on the systems customers rely on. Being involved in real-world software that contributes to Bell&#39;s services was a fulfilling experience, especially compared to previous roles where I was more removed from the product itself. 
        </p>

        {/* Images section */}
        <div className="flex gap-4 mt-8">
          <img src="/s24CoopImgs/bell-building.jpeg" alt="bellBuildingImg"className="w-[16rem] h-auto" />
          <img src="/s24CoopImgs/bell-interior.jpeg" alt="bellInteriorImg" className="w-[16rem] h-auto" />
        </div>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-20" />
    </div>
  );
};

export default IntroductionS24;
