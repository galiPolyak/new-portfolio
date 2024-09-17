import React from 'react';
import { Playfair_Display, Kumbh_Sans } from 'next/font/google';
import { FaGithub } from 'react-icons/fa'; // Make sure react-icons is installed
import { projects } from '../../app/constant'; // Adjust the import path if needed

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

const Projects = () => {
  return (
    <section className={`h-full w-full flex flex-col items-center`}>
      <h2
        className={`text-6xl font-bold text-center bg-clip-text mt-[6rem] text-transparent bg-gradient-to-t from-[#ee4086] to-[#ffb199] mb-10 ${playfairDisplay.className}`}
        style={{ lineHeight: '1.2' }}
      >
        PERSONAL PROJECTS
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-80 h-[25rem] transform transition-transform duration-300 ease-in-out hover:scale-105 outline-none overflow-hidden" // Ensure proper overflow handling
          >
            {/* Container for the image and GitHub icon */}
            <div
              className="text__box bg-cover bg-center w-full h-60 relative group"
              style={{ backgroundImage: `url(${project.imageUrl})` } as React.CSSProperties}
            >
              {/* Overlay with fade-in effect when hovering over image */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
              
              {/* GitHub Icon with fade-in effect when hovering over image */}
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <FaGithub size={130} color="#fff" />
              </a>
            </div>
            
            {/* Project Description */}
            <div className="description__box bg-white p-4 absolute bottom-0 left-0 w-full h-[11rem] flex flex-col justify-between">
              <div>
                <h4 className={`${playfairDisplay.className} text-lg`}>{project.title}</h4>
                <p className="text-[0.8rem] text-gray-500 my-1">{project.type}</p>
              </div>
              <p className="text-[0.8rem]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Horizontal line */}
      <hr className="w-[calc(100vw-20rem)] border-t-2 border-gray-300 mt-[6rem]" />
    </section>
  );
};

export default Projects;
