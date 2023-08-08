import React from 'react'
import Navbar from '../Components/Navbar'
import Form4Hours from '../Components/Form4Hours'
import Footer from '../Components/Footer'
import { Helmet } from 'react-helmet'

function Form4hr() {
  return (
    <div>
      <Helmet>
        <title>Smilebooth360 - Book 4 hours</title>
        <meta name="description" content="Welcome to our home page, find out more about us and see our past work" />
      </Helmet>
        <Navbar />
        <Form4Hours />
        <Footer />
    </div>
  )
}

export default Form4hr