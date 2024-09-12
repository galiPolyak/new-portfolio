'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const JdescS24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
        <h2 className={`coop_heading text-3xl font-bold text-[#000000] ${playfairDisplay.className}`}>
          Job Description
        </h2>
        <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        During my internship, I focused on designing, developing, and maintaining both batch and real-time data pipelines. This role gave me practical experience working with SQL Server, AWS, and Postgres databases, while also introducing me to key concepts in data modeling and architecture. One of the highlights of my work was operating within a mono-repo environment, where Go was the primary language. This structure streamlined development and enhanced team collaboration, giving me a deep dive into backend development, particularly in managing data pipelines and integrating systems.
        <br/>
        <br/>
        While I came in with a solid foundation in programming from my coursework, many of the tools and practices—such as working with APIs, connecting to databases through code, and navigating the mono-repo environment—were new to me. I had to quickly adapt and learn these on the job. Initially, the unfamiliarity with specific workflows, like using AWS and the mono-repo setup, was challenging, but it became a valuable learning opportunity. I swiftly adjusted, and the hands-on experience significantly boosted my technical skills and understanding of real-world industry practices.
        <br/>
        <br/>
        Overall, while my classroom learning was helpful, the practical experience of working with SQL Server, AWS, and Postgres, along with coding in Go within a mono-repo, was instrumental in my growth. This role not only sharpened my technical abilities but also deepened my appreciation for the tools and workflows commonly used in the industry.</p>
    
        {/* Images section */}
        <div className="s24Images flex gap-8 mt-8">
          <img src="/s24CoopImgs/aws.jpeg" alt="awsImg" className="w-[18rem] h-auto" />
          <img src="/s24CoopImgs/datapipeline.webp" alt="dataPipelineImg" className="w-[18rem] h-auto" />
        </div>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-20 mb-10" />

    </div>
  );
};

export default JdescS24;
