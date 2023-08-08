import React from 'react'
import Navbar from '../Components/Navbar'
import Form2Hours from '../Components/Form2Hours'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'

function Form2hr() {
  return (
    <div>
      <Helmet>
        <title>Smilebooth360 - Book 2 hours</title>
        <meta name="description" content="Welcome to our home page, find out more about us and see our past work" />
      </Helmet>
      <Navbar />
      <Form2Hours />
      <Footer />
    </div>
  )
}

export default Form2hr