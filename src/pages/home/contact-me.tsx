'use client';

import { Playfair_Display } from 'next/font/google'
import { Kumbh_Sans } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' })
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] })

const ContactMe = () => {
  return (
    <div 
      className="w-full h-[calc(100vh-8rem)] flex flex-col justify-center items-center p-8" 
      style={{ padding: '4rem' }}
    >
      <h1 className={`text-5xl font-bold mb-4 ${playfairDisplay.className}`}>
        Contact Me
      </h1>
      <p className={`text-lg mb-4 ${kumbhSans.className}`}>
        I'd love to hear from you! Whether you have a question, a project in mind, or just want to say hi, feel free to reach out.
      </p>
      <form className={`space-y-4 ${kumbhSans.className} w-full max-w-lg`}>
        <div>
          <label className="block text-lg mb-1" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-lg mb-1" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-lg mb-1" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            className="w-full border border-gray-300 p-2 rounded-md"
            placeholder="Your Message"
            rows={5}
          />
        </div>
        <button 
          id="main__btn"
          className={`text-lg bg-gradient-to-t from-[#ffb6ad] to-[#fa90bb] px-8 py-4 rounded-md text-white cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out ${kumbhSans.className}`}
        >
          <a className="text-1xl text-white no-underline relative z-10">Send Message</a>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
