'use client';

import React from 'react';

const ResumeInfo = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow flex justify-center items-center">
        <iframe 
          src="/res2025.pdf"  // Use root-relative path
          width="100%" 
          height="100%" 
          style={{border: 'none'}}
          title="Resume"
        >
          This browser does not support PDFs. Please download the PDF to view it: 
          <a href="/res2025.pdf">Download PDF</a>.
        </iframe>
      </div>
    </div>
  );
};

export default ResumeInfo;
