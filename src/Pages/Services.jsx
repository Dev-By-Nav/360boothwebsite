import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import ClientInfo from '../Components/ClientInfo'

function Services() {
  return (
    <div>
      <Navbar />
      <Cards />
      <h1 className='flex justify-center text-3xl font-semibold font-montserrat'>Frequently Asked Questions</h1>
      <ClientInfo />
      <Footer />
    </div>
  )
}

export default Services