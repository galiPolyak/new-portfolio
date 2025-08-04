'use client';

import React from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const JdescF24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
      <h2 className={`coop_heading text-3xl font-bold text-[#000000] ${playfairDisplay.className}`}>
        Job Description
      </h2>
      <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        As a Software Developer Intern at Bell Canada, I was responsible for contributing to backend development projects focused on improving the company’s telecommunications services. I worked with Golang and SQL to create software solutions that integrated data from multiple systems via REST APIs. I also collaborated with another intern to develop a full-stack application using Next.js, which streamlined the team’s workflow by connecting backend scripts to the frontend. My role included ensuring data consistency and accuracy across various platforms, while also working on automating processes to increase efficiency.
        <br />
        <br />
        One significant challenge I faced during my internship was troubleshooting and resolving data discrepancies between different systems. I had to work closely with senior developers to identify the root causes of inconsistencies, optimize queries for better performance, and ensure that the data displayed to stakeholders was accurate. Overcoming this challenge required quick problem-solving and collaboration, ultimately strengthening my technical skills and improving my ability to handle complex data-related issues.
      </p>

      {/* Images section */}
      <div className="s24Images flex gap-8 mt-8">
        <div className="relative w-[14rem] h-[10rem]">
          <Image
            src="/s24CoopImgs/golang.png"
            alt="Golang logo"
            layout="fill"
            objectFit="contain"
            className="rounded"
            priority
          />
        </div>
        <div className="relative w-[24rem] h-[10rem]">
          <Image
            src="/s24CoopImgs/sql.png"
            alt="SQL database graphic"
            layout="fill"
            objectFit="contain"
            className="rounded"
            priority
          />
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="w-full border-t-2 border-gray-300 mt-20 mb-10" />
    </div>
  );
};

export default JdescF24;