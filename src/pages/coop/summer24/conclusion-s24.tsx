'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const ConclusionS24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
        <h2 className={`coop_heading text-3xl font-bold text-[#000000] mt-20 ${playfairDisplay.className}`}>
          Conclusion
        </h2>
        <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        In conclusion, I am incredibly grateful for the opportunity to intern at Bell Media. This experience has been truly invaluable, providing me with not only the technical skills but also the soft skills necessary for my growth as a developer. Throughout my time here, I&#39;ve had the chance to work on meaningful projects, collaborate with a talented team, and deepen my understanding of backend development, data pipelines, and real-world software applications. These hands-on experiences have equipped me with a stronger foundation that I am excited to carry forward into future roles. The knowledge and skills I’ve gained, both technical and interpersonal, will undoubtedly benefit my career as I continue to grow, face new challenges, and contribute to impactful projects in the future.
        </p>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-20" />
    </div>
  );
};

export default ConclusionS24;