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
        During this work term, one of my key objectives was to enhance my technological literacy by mastering Golang and SQL. I’m happy to report that I successfully achieved this goal. I worked on multiple backend projects, including the development of a full-stack tool with another intern. This tool integrated SQL scripts written in Golang with a Next.js app through a REST API, allowing me to apply and strengthen my knowledge in both languages. These experiences not only improved my proficiency but also introduced me to Next.js, which I hadn't initially planned to learn but will be highly beneficial in future roles. By successfully contributing to backend projects and gaining hands-on experience, I made significant progress in this area, positioning myself well for future software development opportunities.
        <br/>
        <br/>
        Learning Goal 2: Oral Communication
        <br/>
        During this work term, one of my key objectives was to enhance my technological literacy by mastering Golang and SQL. I’m happy to report that I successfully achieved this goal. I worked on multiple backend projects, including the development of a full-stack tool with another intern. This tool integrated SQL scripts written in Golang with a Next.js app through a REST API, allowing me to apply and strengthen my knowledge in both languages. These experiences not only improved my proficiency but also introduced me to Next.js, which I hadn't initially planned to learn but will be highly beneficial in future roles. By successfully contributing to backend projects and gaining hands-on experience, I made significant progress in this area, positioning myself well for future software development opportunities.
        <br/>
        <br/>
        Learning Goal 3: Critical & Creative Thinking
        <br/>
        During this work term, one of my key objectives was to enhance my technological literacy by mastering Golang and SQL. I’m happy to report that I successfully achieved this goal. I worked on multiple backend projects, including the development of a full-stack tool with another intern. This tool integrated SQL scripts written in Golang with a Next.js app through a REST API, allowing me to apply and strengthen my knowledge in both languages. These experiences not only improved my proficiency but also introduced me to Next.js, which I hadn't initially planned to learn but will be highly beneficial in future roles. By successfully contributing to backend projects and gaining hands-on experience, I made significant progress in this area, positioning myself well for future software development opportunities.
        <br/>
        <br/>
        Learning Goal 4: Time Management and Personal Organization
        <br/>
        During this work term, one of my key objectives was to enhance my technological literacy by mastering Golang and SQL. I’m happy to report that I successfully achieved this goal. I worked on multiple backend projects, including the development of a full-stack tool with another intern. This tool integrated SQL scripts written in Golang with a Next.js app through a REST API, allowing me to apply and strengthen my knowledge in both languages. These experiences not only improved my proficiency but also introduced me to Next.js, which I hadn't initially planned to learn but will be highly beneficial in future roles. By successfully contributing to backend projects and gaining hands-on experience, I made significant progress in this area, positioning myself well for future software development opportunities.
        <br/>
        <br/>
        Refelection:
        <br/>
        During this work term, one of my key objectives was to enhance my technological literacy by mastering Golang and SQL. I’m happy to report that I successfully achieved this goal. I worked on multiple backend projects, including the development of a full-stack tool with another intern. This tool integrated SQL scripts written in Golang with a Next.js app through a REST API, allowing me to apply and strengthen my knowledge in both languages. These experiences not only improved my proficiency but also introduced me to Next.js, which I hadn't initially planned to learn but will be highly beneficial in future roles. By successfully contributing to backend projects and gaining hands-on experience, I made significant progress in this area, positioning myself well for future software development opportunities.
        </p>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-20" />
    </div>
  );
};

export default GoalsS24;