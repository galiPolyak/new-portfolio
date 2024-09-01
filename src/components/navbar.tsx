'use client';

import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState } from 'react';
import { PageStatus } from '../app/constant'; // Adjust the import path if needed

interface NavbarProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Navbar = ({ currentPage, setCurrentPage }: NavbarProps) => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!isMenuActive);

  return (
    <nav className="bg-gradient-navbar h-32 flex items-center justify-center sticky top-0 z-50"> {/* Changed gradient direction */}
      <div className="container mx-auto flex justify-between items-center h-full px-6">
      <div id="navbar__text" className="text-4xl text-transparent bg-clip-text text-white">
          Gali's Website
        </div>
        <div className="hidden lg:flex space-x-12">
          <button
            onClick={() => setCurrentPage(PageStatus.HOME)}
            className={`text-3xl text-white hover:text-pink-600 transition-colors duration-300 ${currentPage === PageStatus.HOME ? 'text-pink-600' : ''}`}>
            Home
          </button>
          <button
            onClick={() => setCurrentPage(PageStatus.RES)}
            className={`text-3xl text-white hover:text-pink-600 transition-colors duration-300 ${currentPage === PageStatus.RES ? 'text-pink-600' : ''}`}>
            Resume
          </button>
          <button
            onClick={() => setCurrentPage(PageStatus.COOP)}
            className={`text-3xl text-white hover:text-pink-600 transition-colors duration-300 ${currentPage === PageStatus.COOP ? 'text-pink-600' : ''}`}>
            Co-op
          </button>
          <a
            href="https://github.com/galiPolyak/"
            target="_blank"
            className="text-3xl text-white hover:text-pink-600 transition-colors duration-300">
            <i style={{ fontSize: "40px" }} className="fa">&#xf09b;</i>
          </a>
          <a
            href="https://www.linkedin.com/in/galipolyak/"
            target="_blank"
            className="text-3xl text-white hover:text-pink-600 transition-colors duration-300"
          >
            <i style={{ fontSize: '40px' }} className="fa">&#xf08c;</i>
          </a>
        </div>
        <button 
          className="lg:hidden flex flex-col items-center justify-center space-y-2 relative z-50" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div 
            className={`w-12 h-1.5 bg-white transition-transform duration-300 ${isMenuActive ? 'rotate-45 translate-y-3.5' : ''}`}
          ></div>
          <div 
            className={`w-12 h-1.5 bg-white transition-opacity duration-300 ${isMenuActive ? 'opacity-0' : ''}`}
          ></div>
          <div 
            className={`w-12 h-1.5 bg-white transition-transform duration-300 ${isMenuActive ? '-rotate-45 -translate-y-3.5' : ''}`}
          ></div>
        </button>
        {isMenuActive && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={() => setMenuActive(false)}></div>
            <div className={`lg:hidden absolute top-32 right-0 bg-gradient-toggle-menu text-white w-full max-w-xs p-3 rounded shadow-lg transition-transform duration-300 ${isMenuActive ? 'translate-y-0 opacity-100 z-40' : '-translate-y-80 opacity-0 z-0'}`}>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCurrentPage(PageStatus.HOME)}
                  className={`block py-6 text-center text-2xl hover:text-pink-600 transition-colors duration-300 ${currentPage === PageStatus.HOME ? '' : ''}`}> {/* Changed text size */}
                  Home
                </button>
                <button
                  onClick={() => setCurrentPage(PageStatus.RES)}
                  className={`block py-6 text-center text-2xl hover:text-pink-600 transition-colors duration-300 ${currentPage === PageStatus.RES ? '' : ''}`}> {/* Changed text size */}
                  Resume
                </button>
                <button
                  onClick={() => setCurrentPage(PageStatus.COOP)}
                  className={`block py-6 text-center text-2xl hover:text-pink-600 transition-colors duration-300 ${currentPage === PageStatus.COOP ? '' : ''}`}> {/* Changed text size */}
                  Co-op
                </button>
                <a
                  href="https://github.com/galiPolyak/"
                  target="_blank"
                  className="text-3xl py-4 text-white hover:text-pink-600 transition-colors duration-300 mt-4"
                >
                  <i style={{ fontSize: "40px" }} className="fa">&#xf09b;</i>
                </a>
                <a
                  href="https://www.linkedin.com/in/galipolyak/"
                  target="_blank"
                  className="text-3xl py-5 text-white hover:text-pink-600 transition-colors duration-300 mt-2"
                >
                  <i style={{ fontSize: '40px' }} className="fa">&#xf08c;</i>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
