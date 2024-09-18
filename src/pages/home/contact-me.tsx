'use client';

import { Playfair_Display } from 'next/font/google'
import { Kumbh_Sans } from 'next/font/google'
import ContactForm from "../../components/contact-form"

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' })
const kumbhSans = Kumbh_Sans({ subsets: ['latin'] })

const ContactMe = () => {
  return (
    <div 
      className="w-full h-full flex flex-col justify-center items-center" 
    >
      <h1 className={`text-3xl font-bold mb-4 ${playfairDisplay.className}`}>
        Contact Me
      </h1>
      <p className={`text-1xl mb-4 mx-10 ${playfairDisplay.className}`}>
        I&#39;d love to hear from you! Whether you have a question, a project in mind, or just want to say hi, feel free to reach out.
      </p>

      <ContactForm />

      {/* Horizontal line */}
      <hr className="w-[80%] border-t-2 border-gray-300 mt-20 mb-10" />
    </div>
  );
};

export default ContactMe;
