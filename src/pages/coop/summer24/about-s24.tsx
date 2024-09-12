'use client';

import React from 'react';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

const AboutS24 = () => {
  return (
    <div className="coop__text w-full h-full flex flex-col items-center justify-start px-4 md:px-20">
        <h2 className={`coop_heading text-3xl font-bold text-[#000000] ${playfairDisplay.className}`}>
          About Bell Canada
        </h2>
        <p className={`coop__paragraph text-1xl text-center ${playfairDisplay.className} mt-4 leading-relaxed max-w-7xl p-4`}>
        Bell Canada, commonly referred to as Bell, is a leading Canadian telecommunications company headquartered in Verdun, Quebec. As an incumbent local exchange carrier (ILEC) in Ontario and Quebec, Bell has been a key player in the Canadian telecom landscape and was a founding member of the Stentor Alliance. It also operates as a competitive local exchange carrier (CLEC) for enterprise customers in the western provinces.
        <br/>
        <br/>
        Through its various subsidiaries, Bell provides a wide range of services. Bell Aliant offers telecommunications services in the Atlantic provinces, while Bell Mobility, including its flanker brand Virgin Plus, delivers mobile services across the country. Bell also provides television services via Bell Satellite TV and Bell Fibe TV, covering both direct broadcast satellite and IPTV options.
        <br/>
        <br/>
        As one of Canada&#39;s foremost telecommunications companies, Bell specializes in advanced communications services, including wireless, internet, and television. The company plays a critical role in fields like network engineering, cloud computing, cybersecurity, and digital platform development. Known for its innovation, Bell continues to build high-speed networks and digital solutions that connect millions of Canadians, shaping the future of communication across the country.</p>
    
        {/* Images section */}
        <div className="s24Images flex justify-center gap-8 mt-8">
          <img src="/s24CoopImgs/bell-about2.png" alt="bellAbout1Img" className="w-[14rem] h-auto" />
          <img src="/s24CoopImgs/bell-about3.png" alt="bellAbout2Img" className="w-[14rem] h-auto" />
          <img src="/s24CoopImgs/bell-about.webp" alt="bellAboutImg" className="w-[14rem] h-auto" />
        </div>

        {/* Horizontal line */}
        <hr className="w-full border-t-2 border-gray-300 mt-20 mb-10" />
    
    </div>
  );
};

export default AboutS24;