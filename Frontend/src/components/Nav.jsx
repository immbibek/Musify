import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-black text-white w-full'>
      {/* Main Navbar Container */}
      <div className='flex justify-between items-center px-4 py-4 lg:px-10'>
        {/* Logo */}
        <div className='text-2xl'>
          <h1>LOGO</h1>
        </div>

        {/* Toggle Button for Mobile */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>

        {/* Nav Links and Search Bar (centered) - Only for large screens */}
        <div className='flex-grow hidden lg:flex lg:items-center lg:justify-center lg:gap-10'>
          <p className='text-sm'>HOME</p>
          <input className='px-4 py-2 rounded-md text-black outline-none' type="text" placeholder='Search Here..' />
          <p className='text-sm'>ABOUT US</p>
          <p className='text-sm'>CONTACT</p>
        </div>

        {/* Buttons - Only for large screens */}
        <div className='hidden lg:flex lg:items-center lg:gap-5'>
          <button className='bg-blue-300 px-5 py-2 rounded-md'>Sign in</button>
          <button className='px-5 py-2'>Login</button>
        </div>
      </div>

      {/* Mobile Menu - Show center section and buttons */}
      {isMenuOpen && (
        <div className='lg:hidden'>
          <div className='flex flex-col items-center gap-4 px-4 py-4'>
            <p className='text-sm'>HOME</p>
            <input className='px-4 py-2 rounded-md text-black outline-none w-80' type="text" placeholder='Search Here..' />
            <p className='text-sm'>ABOUT US</p>
            <p className='text-sm'>CONTACT</p>
            {/* Buttons in mobile view */}
            <button className='bg-blue-300 w-40 py-2 rounded-md'>Sign in</button>
            <button className='bg-blue-300 w-40 py-2 rounded-md'>Login</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
