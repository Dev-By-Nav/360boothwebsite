import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Videos from '../Components/Videos'
import { Helmet } from 'react-helmet'

function Gallery() {
  return (
    <div>
      <Helmet>
        <title>Smilebooth360 - Gallery</title>
        <meta name="description" content="See our past events" />
      </Helmet>
      <Navbar /> 
      <Videos />
      <Footer />
    </div>
  )
}

export default Gallery