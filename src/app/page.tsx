'use client';

import { useState } from 'react';
import Navbar from '../pages/navbar';
import ResumeInfo from '../pages/resume';
import CoopInfo from '../pages/coop-info';
import Home from '../pages/home';
import { PageStatus } from './constant';

export default function Page() {
  const [currentPage, setCurrentPage] = useState(PageStatus.HOME);

  return (
    <div>
      {/* Navbar */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Page Content */}
      <div className="p-5">
        {currentPage === PageStatus.HOME && <Home/>}
        {currentPage === PageStatus.RES && <ResumeInfo />}
        {currentPage === PageStatus.COOP && <CoopInfo />}
      </div>
    </div>
  );
}
