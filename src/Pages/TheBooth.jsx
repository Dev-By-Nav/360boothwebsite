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
        <meta name="description" content="Find out more info about the booth itself." />
      </Helmet>
        <Navbar />
        <BoothSize />
        <Footer />
    </div>
  )
}

export default TheBooth