import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import ClientInfo from '../Components/ClientInfo'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Services() {
  return (
    <div>
      <Helmet>
        <title>Smilebooth360 - Services</title>
        <meta name="description" content="Welcome to our home page, find out more about us and see our past work" />
      </Helmet>

      <Navbar />
      <Cards />
      <div className='flex justify-center flex-col items-center '>
        <h1 className='text-xl font-semibold font-montserrat text-[#c94b60]'>Booking For A Corporate Event ?</h1>
        <p className=''>Send us a message through our <Link to='/contact-us'><span className='underline'>contact form</span></Link></p>
      </div>
      <h1 className='flex justify-center text-3xl font-semibold font-montserrat text-[#c94b60] mt-16'>Frequently Asked Questions</h1>
      <ClientInfo />
      <Footer />
    </div>
  )
}

export default Services