'use client';
import Image from 'next/image';
import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const AboutF24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
      <h2 className={`coop_heading text-3xl font-bold text-[#000000] ${playfairDisplay.className}`}>
        About Bell Canada
      </h2>
      <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        Bell Canada is Canada&#39;s largest communications company, dedicated to connecting people and businesses through reliable and innovative services. With a strong presence across the country, Bell delivers cutting-edge fiber and wireless networks that power internet, mobile, and digital solutions for millions of Canadians.
        <br />
        <br />
        The company&#39;s focus on advancing next-generation technologies ensures not only fast and dependable connectivity but also enables Canadian businesses to thrive on a global stage. Bell&#39;s commitment to innovation and adaptability is reflected in its role as a leader in telecommunications, continually shaping the future of communication while making a meaningful impact in communities nationwide.
      </p>

      {/* Images section */}
      <div className="s24Images flex justify-center gap-8 mt-8">
        <div className="relative w-[14rem] h-[10rem]">
          <Image
            src="/s24CoopImgs/about-bell1.jpg"
            alt="bellAbout1Img"
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority
          />
        </div>
        <div className="relative w-[14rem] h-[10rem]">
          <Image
            src="/s24CoopImgs/about-bell2.jpg"
            alt="bellAbout2Img"
            layout="fill"
            objectFit="cover"
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

export default AboutF24;
