import React from 'react';
import banner from '../assets/images/banner.png';
import banner2 from '../assets/images/banner2.png';

const Banner = () => {
  return (
    <div className='banner-container container m-auto mt-3 flex flex-col-reverse lg:flex-row items-center justify-between px-4 py-8 bg-red-400 shadow-inherit rounded-md lg:py-16'>
      {/* Left Box */}
      <div className="left-box text-center lg:text-left lg:w-1/2 space-y-4 lg:space-y-6">
        <h1 className='text-3xl lg:text-10xl font-bold'>Learn</h1>
        <p className='heading text-xxl lg:text-2xl'>
          Your Favorite Songs on Guitar.
        </p>
        <p className='subheading text-sm lg:text-lg'>
          Find chords, lyrics, and video tutorials all in one<br /> platform and share your talent with the world.
        </p>
        <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-white hover:text-black hover:delay-500'>
          Signup
        </button>
        <button className='bg-black mx-3 text-white  hover:bg-white transition-all hover:delay-500 hover:text-black  px-6 py-2 rounded-md'>
          Upload Video
        </button>
      </div>

      {/* Right Box (Images) */}
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-8 lg:w-1/2 items-center justify-center'>
        {/* Extra Box */}
        {/* <div className="extra-box lg:w-1/2">
          <img src={banner2} alt="Banner Image" className='w-full h-auto' />
        </div> */}
        
        {/* Right Box */}
        <div className="right-box border p-4 border-white shadow-lg rounded-md lg:w-1/2">
          <img src={banner} alt="Banner Image" className='w-full h-auto' />
        </div>
      </div>
    </div>
  );
}

export default Banner;
