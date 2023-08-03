import React from 'react'
import melody from '../assets/melody.jpg'

function Celebrity() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
  <h1 className="text-2xl font-bold mb-4 mt-0">Celebrities Love Our Booth Too</h1>
  <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="md:pr-4">
      <img
        className="rounded-lg shadow-md h-60 w-auto"
        src={melody}
        alt="Your Image"
      />
    </div>
    <div className="w-3/4 md:w-1/2 md:pl-4 mt-4 md:mt-0 text-center md:text-left">
      <p>
        Melody Hossaini is a social entrepreneur, a professional speaker and personal development trainer and coach.
      </p>
    </div>
  </div>
</div>

  )
}

export default Celebrity