'use client';

import React from 'react';
import { Playfair_Display, Kumbh_Sans } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

const Projects = () => {
  return (
    <section className={`h-full w-full flex`}>
      <div className="container mx-12 mt-[8rem]">
        <h2
          className={`text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-t from-[#ee4086] to-[#ffb199] mb-10 ${playfairDisplay.className}`}
          style={{ lineHeight: '1.2' }}
        >
          PERSONAL PROJECTS
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <div className="box-container">
          <div
              className="text__box bg-cover bg-center w-80 h-60 hover:bg-[#4137ca] transition-colors ease-in-out"
              style={{ backgroundImage: 'url(/csharpImg.png)' } as React.CSSProperties}
            ></div>
            <div className="description__box bg-white p-4 shadow-lg w-80 h-[11rem]">
              <h4 className={`${playfairDisplay.className} text-lg`}>Minesweeper Game</h4>
              <p className="text-[0.8rem] text-gray-500 my-1">Personal Project</p>
              <p className="text-[0.8rem]">A C#-built Windows game using XNA 
                framework, offering a classic Minesweeper experience with tile uncovering 
                and flag placement strategies. (Mar 2022)</p>
            </div>
          </div>
          <div className="box-container">
          <div
              className="text__box bg-cover bg-center w-80 h-60 hover:bg-[#4137ca] transition-colors ease-in-out"
              style={{ backgroundImage: 'url(/javaImg.png)' } as React.CSSProperties}
            ></div>
            <div className="description__box bg-white p-4 shadow-lg w-80 h-[11rem]">
              <h4 className={`${playfairDisplay.className} text-lg`}>Java Mancala Master</h4>
              <p className="text-[0.8rem] text-gray-500 my-1">Personal Project</p>
              <p className="text-[0.8rem]">A game offering Kalah and Ayo, built using 
                object-oriented principles and showcasing class hierarchies, 
                polymorphism, and user interaction. (Nov 2023)</p>
            </div>
          </div>
          <div className="box-container">
          <div
              className="text__box bg-cover bg-center w-80 h-60 hover:bg-[#4137ca] transition-colors ease-in-out"
              style={{ backgroundImage: 'url(/cImg.png)' } as React.CSSProperties}
            ></div>
            <div className="description__box bg-white p-4 shadow-lg w-80 h-[11rem]">
              <h4 className={`${playfairDisplay.className} text-lg`}>List Tool Efficiency</h4>
              <p className="text-[0.8rem] text-gray-500 my-1">Academic Project</p>
              <p className="text-[0.8rem]">Explores the real-world performance of different data structures. Compares them by processing 
              genomic FASTA data, measuring execution time and memory efficiency. (Oct 2023)</p>
            </div>
          </div>
        </div>
        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-40" />

      </div>
    </section>
  );
};

export default Projects;
