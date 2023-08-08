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
        <meta name="description" content="Welcome to our home page, find out more about us and see our past work" />
      </Helmet>
      <Navbar /> 
      <Videos />
      <Footer />
    </div>
  )
}

export default Gallery