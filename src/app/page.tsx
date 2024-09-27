'use client';

import { useState } from 'react';
import Navbar from '../components/navbar';
import ResumeInfo from '../pages/resume/resume';
import CoopInfo from '../pages/coop/coop-info';
import Home from '../pages/home/home';
import Summer24 from '../pages/coop/summer-24';
import Fall24 from '../pages/coop/fall-24';
import { PageStatus } from './constant';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(PageStatus.HOME);

  return (
    <div>
      {/* Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Page Content */}
      <div className="">
        {currentPage === PageStatus.HOME && <Home/>}
        {currentPage === PageStatus.RES && <ResumeInfo />}
        {currentPage === PageStatus.COOP && <CoopInfo setCurrentPage={setCurrentPage} />}
      {/* Render other components based on `currentPage` */}
        {currentPage === PageStatus.S24 && <Summer24 />}
        {currentPage === PageStatus.F24 && <Fall24 />}
      </div>
    </div>
  );
}
