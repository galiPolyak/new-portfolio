'use client';

import { Playfair_Display } from 'next/font/google'
import { Kumbh_Sans } from 'next/font/google'
import BubbleAnimation from '../../components/bubble-anim';
import Projects from './projects'; 
import ContactMe from './contact-me'; 
import { useRef } from 'react';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' })
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] })

const Home = () => {
  const contactMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);  // Add a ref for the Projects section

  const scrollToContactMe = () => {
    if (contactMeRef.current) {
      contactMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {  // Function to scroll to the Projects section
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 5rem)', overflowY: 'auto' }}>
      {/* Bubble Animation Canvas */}
      <BubbleAnimation />

      {/* Main Content */}
      <canvas id="myCanvas" className="w-full h-full"></canvas>
      <div
        id="main__content"
        className={`absolute top-1/4 left-1/4 right-1/4 z-10 ${playfairDisplay.className}`}
      >
        <h1
          className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-[#ee4086] to-[#ffb199] mb-4`}
          style={{ lineHeight: '1.2' }}
        >
          HELLO, I&#39;M GALI.
        </h1>
        <h2
          className={`text-2xl font-light bg-clip-text text-transparent bg-black mb-6`}
        >
          I&#39;m a Bachelor of Computing Undergrad @ the University of Guelph!
        </h2>
        <div className="button-container flex items-center space-x-4">
          <button
            id="main__btn"
            onClick={scrollToContactMe}
            className={`text-lg bg-gradient-to-t from-[#ffb6ad] to-[#fa90bb] px-5 py-2 rounded-md text-white cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out ${kumbhSans.className}`}
          >
            <a className="text-1xl text-white no-underline relative z-10">Contact me!</a>
          </button>
          {/* Scroll Icon */}
          <div className="scroll-icon" id="scroll-icon" onClick={scrollToProjects}>
            <img src="/scrollIcon.png" id="scroll-icon-Img" alt="Scroll Icon" className="w-6 h-9 cursor-pointer"/>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="">
        <Projects />
      </div>

      {/* ContactMe Section */}
      <div ref={contactMeRef} className="mt-20">
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
