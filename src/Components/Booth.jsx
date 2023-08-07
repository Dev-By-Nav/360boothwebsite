import React from 'react'
import Booth from '../assets/Booth.jpeg'

function BoothSize() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-8 pb-16">
  <h1 className="text-2xl font-bold mb-4 mt-0 text-[#c94b60] font-montserrat">Booth Dimensions & Specifications</h1>
  <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="md:pr-4">
      <img
        className="rounded-lg shadow-md h-60 w-auto"
        src={Booth}
        alt="Your Image"
      />
    </div>
    <div className="w-3/4 md:w-1/2 md:pl-4 mt-4 md:mt-0 text-center md:text-left flex-col">
        <p className="">100″ Video Stage</p>
        <p className="">Capacity 1-4 Guests</p>
        <p className="">Equipped with: iPad Pro or M50</p>
        <p className="">Platform Height : 11″</p>
        <p className="">Footprint Range : 8' – 16’</p>
        <p className="">Maximum weight : 385 Kg</p>
        <p className="">Automatic Rotation: 10-50 RPM</p>
        <p className="">Unit Weight : 60 Kg</p>
        <p className="">Power Source : UK Standard, 120-240V</p>
    </div>
  </div>
</div>
  )
}

export default BoothSize

// 100″ Video Stage
// Capacity 1-4 Guests
// Equipped with: iPad Pro or M50
// Platform Height : 11″
// Footprint Range : 8' – 16’ 
// Maximum weight : 385 Kg 
// Automatic Rotation: 10-50 RPM
// Unit Weight : 60 Kg
// Power Source : US Standard, 120-240V