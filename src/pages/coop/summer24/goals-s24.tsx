'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const GoalsS24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
        <h2 className={`coop_heading text-3xl font-bold text-[#000000] mt-10 ${playfairDisplay.className}`}>
          Learning Goals
        </h2>
        <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        Learning Goal 1: Technological Literacy
        <br/>
        During this work term, one of my key objectives was to enhance my technological literacy by mastering Golang and SQL. I&#39;m happy to report that I successfully achieved this goal. I worked on multiple backend projects, including the development of a full-stack tool with another intern. This tool integrated SQL scripts written in Golang with a Next.js app through a REST API, allowing me to apply and strengthen my knowledge in both languages. These experiences not only improved my proficiency but also introduced me to Next.js, which I hadn&#39;t initially planned to learn but will be highly beneficial in future roles. By successfully contributing to backend projects and gaining hands-on experience, I made significant progress in this area, positioning myself well for future software development opportunities.
        <br/>
        <br/>
        Learning Goal 2: Oral Communication
        <br/>
        I aimed to improve my oral communication skills, particularly in explaining technical concepts to non-technical stakeholders. Throughout the term, I actively participated in team meetings and presented my work during sprint reviews, which helped me gain some confidence. However, I still find myself struggling to communicate confidently in front of superiors due to shyness. This sometimes limits my ability to express my ideas and needs fully. While I made progress, I recognize that this is an area where I need further development. Improving my communication skills will be essential for future roles, especially when collaborating with stakeholders and ensuring my ideas are clearly understood.
        <br/>
        <br/>
        Learning Goal 3: Critical & Creative Thinking
        <br/>
        In terms of critical and creative thinking, my goal was to develop innovative solutions, particularly in automating testing and ticketing processes. Although I explored several automation tools and brainstormed ideas with senior developers, I wasn&#39;t able to implement as many automated solutions as I had originally planned. Despite not fully meeting this goal, the knowledge I gained from studying automation frameworks and collaborating with experienced developers will prove valuable in future projects. I will continue to refine my automation skills and apply them in future work where efficiency improvements can have a significant impact.
        <br/>
        <br/>
        Learning Goal 4: Time Management and Personal Organization
        <br/>
        Improving my time management and personal organization was another key goal for this work term. I used tools like Jira to manage my tasks, breaking down larger projects into smaller, more manageable pieces. While I didn&#39;t fully explore all the features of Jira, such as adding story points, I still managed to stay organized and consistently met my deadlines. This progress in managing my workload and staying on top of my tasks has been beneficial, and I plan to further refine these practices in future roles to increase my productivity.
       <br/>
        <br/>
        Refelection:
        <br/>
        Overall, I&#39;m pleased with the progress I made during this work term. Mastering Golang and SQL was a major achievement that has significantly enhanced my technical expertise. While I&#39;ve made strides in communication, there&#39;s still work to be done in building confidence when speaking to superiors. Additionally, my efforts to develop creative automation solutions provided valuable insights, even if I didn&#39;t fully meet my initial expectations. Lastly, the improvements in my time management will be instrumental as I handle more complex projects in future roles. These learnings have set a strong foundation for my continued growth as a software engineer.
        </p>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-20" />
    </div>
  );
};

export default GoalsS24;