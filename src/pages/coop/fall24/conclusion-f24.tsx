'use client';

import React from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const ConclusionF24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
      <h2 className={`coop_heading text-3xl font-bold text-[#000000] ${playfairDisplay.className}`}>
        Conclusion
      </h2>
      <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        In conclusion, I am incredibly grateful for the opportunity to intern at Bell. This experience has been immensely valuable, equipping me with both technical and interpersonal skills that are essential for my growth as a software developer. During my time here, I worked on meaningful projects, such as building a full-stack tool to streamline workflows and automating processes to enhance efficiency. Collaborating with a supportive team allowed me to deepen my understanding of backend development, database management, and real-world software applications. These experiences have provided me with a stronger foundation and greater confidence as I look toward future opportunities. The knowledge and skills I&#39;ve gained will undoubtedly guide me as I continue to grow, embrace new challenges, and contribute to impactful projects in my career.
      </p>

      <div className="s24Images flex justify-center gap-8 mt-8">
        <div className="relative w-[24rem] h-[15rem]">
          <Image
            src="/s24CoopImgs/bell_coworkers.jpg"
            alt="Bell coworkers group photo"
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority
          />
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="w-full border-t-2 border-gray-300 mt-20" />
    </div>
  );
};

export default ConclusionF24;
