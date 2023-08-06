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
      Melody Hossaini, recognized from her appearance on "The Apprentice," is not only a talented business figure but also a genuinely kind and approachable individual. Her amiable and friendly demeanor radiates positivity, leaving a lasting and heartwarming impression on all who have the pleasure of interacting with her. Melody's remarkable combination of business acumen and warm-heartedness makes her a standout personality, and her ability to connect with people on a personal level adds a unique touch to any event she is a part of. Her graciousness and approachability make her a perfect fit for various occasions, where her inspiring presence is certain to leave attendees with a sense of admiration and fondness.
      </p>
    </div>
  </div>
</div>

  )
}

export default Celebrity