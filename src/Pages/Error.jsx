import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Error() {
  return (
    <div>
      <Navbar />
      <div>
        <p className='text-2xl flex items-center justify-center text-[#c94b60]'>404. Please Return To The Home Page</p>
      </div>
      <Footer />
    </div>
  )
}

export default Error