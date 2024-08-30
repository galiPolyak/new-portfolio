'use client';

import BubbleAnimation from '../components/bubble-anim'; // Ensure this path is correct

const Home = () => {
  return (
    <div style={{ position: 'relative', height: 'calc(100vh - 8rem)', overflow: 'hidden' }}>
      {/* Bubble Animation Canvas */}
      <BubbleAnimation />

      {/* Page Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className='flex justify-center'>Home Info Page</h2>
        <p className='flex justify-center'>
          This is where the Home information will be displayed. You can include details about your co-op experiences, roles, and accomplishments.
        </p>
      </div>
    </div>
  );
};

export default Home;

