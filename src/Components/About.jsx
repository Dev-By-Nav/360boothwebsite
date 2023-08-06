import React from 'react'
import image from '../assets/abt-img.jpg'

function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8">
  <h1 className="text-2xl font-bold mb-4 mt-0 text-[#c94b60] font-montserrat">Smile Booth 360</h1>
  <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="md:pr-4">
      <img
        className="rounded-lg shadow-md h-60 w-auto"
        src={image}
        alt="Your Image"
      />
    </div>
    <div className="w-3/4 md:w-1/2 md:pl-4 mt-4 md:mt-0 text-center md:text-left">
      <p className='font-raleway'>
      At SmileBooth360, we understand the importance of leaving a lasting impression on your guests. Our cutting-edge technology combines state-of-the-art cameras and advanced software to capture captivating moments from every angle, ensuring that every cherished memory is beautifully preserved. Whether it's a wedding celebration, a corporate event, a private party, a graduation, or any reason to come together, our innovative 360-degree video booths will not only elevate your overall experience but also add an element of excitement and fun that sets your event apart. Our commitment to delivering exceptional quality and unparalleled creativity shines through in every frame, making your event truly extraordinary and etching it into the hearts of all who attend.
      </p>
    </div>
  </div>
</div>
  )
}

export default About