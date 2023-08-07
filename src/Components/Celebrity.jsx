import React from 'react'
import melody from '../assets/melody.jpg'

function Celebrity() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
  <h1 className="text-2xl font-bold mb-4 mt-0 text-[#c94b60] font-montserrat">Celebrities Love Our Booth Too</h1>
  <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="md:pr-4">
      <img
        className="rounded-lg shadow-md h-60 w-auto"
        src={melody}
        alt="Your Image"
      />
    </div>
    <div className="w-3/4 md:w-1/2 md:pl-4 mt-4 md:mt-0 text-center md:text-left">
      <p className='font-raleway'>
      Melody Hossaini, former BBC Apprentice star says “SmileBooth's 360 Video Booth is an absolute game-changer! As I am no stranger to innovation, and this booth exceeded all expectations. The cutting-edge technology flawlessly captured immersive content from every angle, adding a unique and exciting touch to my videos. The user-friendly interface and dedicated team made the entire experience a breeze. SmileBooth's 360 Video Booth is a must-try for anyone aiming to captivate their audience in a fresh and unforgettable way.

Warmly,
Melody Hossaini
      </p>
    </div>
  </div>
</div>

  )
}

export default Celebrity