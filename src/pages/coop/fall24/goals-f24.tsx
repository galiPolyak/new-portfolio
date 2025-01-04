'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const GoalsF24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
        <h2 className={`coop_heading text-3xl font-bold text-[#000000] ${playfairDisplay.className}`}>
          Learning Goals
        </h2>
        <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        Learning Goal 1: Technological Literacy
        <br/>
        During this work term, my primary objective was to enhance my technological literacy by improving my skills in TypeScript and Node.js. To achieve this, I worked on side projects and took on tasks within the Techno Sharks team that utilized these technologies. By dedicating time each week to these efforts and seeking feedback from my team, I successfully completed multiple tasks and projects. Reflecting on my progress, I am more confident in my ability to write scalable, maintainable code and integrate TypeScript into my workflow, positioning myself well for future full-stack development roles.
        <br/>
        <br/>
        Learning Goal 2: Teamwork
        <br/>
        My goal was to improve teamwork skills by fostering collaboration and being open to giving and receiving help. I participated actively in team-based projects and sought feedback on how I could better contribute to the team&#39;s success. Volunteering to assist during sprints and being more proactive in interactions significantly improved my collaboration skills. The positive feedback from my peers and the stronger team dynamics I observed reinforced my growth in this area.
        <br/>
        <br/>
        Learning Goal 3: Problem Solving
        <br/>
        I aimed to enhance my problem-solving abilities, particularly in debugging and performance optimization. Throughout the term, I focused on tackling challenging tasks and engaging in coding challenges to sharpen these skills. I received constructive feedback on the solutions I provided for complex issues, which helped me refine my approach. These experiences have strengthened my ability to analyze and resolve technical challenges effectively.
        <br/>
        <br/>
        Refelection:
        <br/>
        Overall, I made meaningful progress in achieving my learning goals this term. I improved my technical proficiency in TypeScript and Node.js, became a more collaborative team member, and developed better problem-solving skills. While there is always room for further growth, these experiences have provided a solid foundation for my continued development as a software engineer.
        </p>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-20 mb-10" />
    </div>
  );
};

export default GoalsF24;