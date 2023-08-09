import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'

function Error() {
  return (
    <div>
      <Helmet>
        <title>Smilebooth360 - Error</title>
        <meta name="description" content="404. This is not a valid page" />
      </Helmet>

      <Navbar />
      <div>
        <p className='text-2xl flex items-center justify-center text-[#c94b60]'>404. Please Return To The Home Page</p>
      </div>
      <Footer />
    </div>
  )
}

export default Error