import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Form from '../Components/Form'
import { Helmet } from 'react-helmet'


function Contact() {
  return (
    <div>
      <Helmet>
        <title>Smilebooth360 - Contact us</title>
        <meta name="description" content="Welcome to our home page, find out more about us and see our past work" />
      </Helmet>
        <Navbar />
        <Form />
        <Footer />
    </div>
  )
}

export default Contact