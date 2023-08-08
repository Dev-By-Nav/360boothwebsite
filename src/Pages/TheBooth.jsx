import React from 'react'
import Navbar from '../Components/Navbar'
import BoothSize from '../Components/Booth'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'


function TheBooth() {
  return (
    <div>
      <Helmet>
        <title>Smilebooth360 - The booth</title>
        <meta name="description" content="Welcome to our home page, find out more about us and see our past work" />
      </Helmet>
        <Navbar />
        <BoothSize />
        <Footer />
    </div>
  )
}

export default TheBooth