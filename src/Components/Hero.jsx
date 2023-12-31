import React from 'react';
import banner from '../assets/Banner9.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div>
      <div
        className="bg-[url] bg-cover bg-center flex items-center justify-center h-96 md:h-150 bg-[#c94b60] relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <a
          href="https://www.poptop.uk.com/supplier/smilebooth360uk/"
          target="_blank"
          className="absolute top-3 right-4 md:top-4 md:right-8 z-10 "
        >
          <img
            src="https://www.poptop.uk.com/ranking/smilebooth360uk/GoldPoptopFeaturedSupplierRating.png"
            className="w-16 h-16 lg:w-36 lg:h-36"
            alt="Poptop Featured Supplier"
          />
        </a>
        <div className='flex flex-col items-center py-4 md:py-8 mt-16 lg:mt-10'>
          <div className='flex flex-col justify-center items-center text-white'>
            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold font-montserrat py-3 text-center text-white">Capturing Your Moments from Every Angle:<br/>Book Now & Start Your Unforgettable Journey with Smilebooth360</h1>
            <h2 className="text-center w-3/4 font-semibold font-raleway sm:text-lg text-base ">Step into a World of Immersive Memories: Transforming Special Moments with Our State-of-the-Art 360-Degree Video Booths</h2>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-10 ">
            <button className="bg-[#c94b60] text-white hover:bg-[#ad345c] py-2 px-4 md:py-4 md:px-8 md:text-lg font-semibold rounded font-montserrat">
              <Link to='/gallery'>See Our Work</Link>
            </button>
            <button className="bg-[#c94b60] text-white hover:bg-[#ad345c] py-2 px-5 md:py-4 md:px-9 md:text-lg font-semibold font-montserrat rounded">
              <Link to='/services'>Book Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
